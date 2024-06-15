import express from 'express'
import {sendprofile} from '../controller/profiles.js'
import { Profile } from '../models/profileSchema.js'

const router = express.Router()

router.post("", sendprofile)
// router.get("/:profileId", )

router.get('/:profileId', async (req, res) => {
    const profile = await Profile.findOne();
    res.json(profile);
  });

export default router