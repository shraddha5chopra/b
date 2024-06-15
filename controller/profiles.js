import ErrorHandler from '../error/error.js'
import { Profile } from '../models/profileSchema.js'

export const sendprofile = async (req, res, next) => {
    const { img, firstName, lastName, email, address } = req.body;
    
    if(!img || !firstName || !lastName || !email || !address){
        return next(new ErrorHandler("Please fill all the details", 400))
    }
    try{

        // await Profile.create({imgStr, firstName, lastName, email, address})       
        //     res.status(200).json({
        //         success: true,
        //         message: "Filled successfully"
        //})

        //upsert
        // profile.findOneAndUpdate
        let profile = await Profile.findOne();
            if (profile) {
              profile.img = img;
              profile.firstName = firstName;
              profile.lastName = lastName;
              profile.email = email;
              profile.address = address;
            } else {
              profile = new Profile({ img, firstName, lastName, email, address });
            }
            await profile.save();
            res.status(200).json(profile);
        
    } catch (error) {
        console.log(error)
        if(error.name === "ValidationError"){
            const ValidationError = Object.values(error.errors).map(
                (err) => err.message
            )
            return next(new ErrorHandler(ValidationError.join(" , "), 400))
        }

        return next(error)
    }

}