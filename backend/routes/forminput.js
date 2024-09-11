const express = require('express')
const app = express()
const router = express.Router()
const { body, validationResult } = require('express-validator');
const User = require('../model/UserModel')


router.post('/formvalue', [
    body('username', 'Username Not Blank').isLength({ min: 5 }),
    body('password', 'Password Must Be 5 Charecters').isLength({ min: 5 }),
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const checkUser = await User.findOne({username : req.body.username})
    if(checkUser){
        res.status(401).json({errors : 'Username Already Exists'})
    } 
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.status(200).json({success : "Successfully Save"})
})

module.exports = router;