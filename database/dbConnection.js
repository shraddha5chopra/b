import mongoose from "mongoose"

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI,{
        dbName: "ProfilePage",
    }).then(()=>{
        console.log("Connected to database successfully!")
    }).catch(err=>{
        console.log(`Some error occurred while connecting to database ${err} `)
    })
}