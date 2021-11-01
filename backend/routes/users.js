const express = require('express')
const router = express.Router()
let User = require('../models/user.model')

router
    .route('/')
    .get((req, res) =>{
        User.find()
            .then(users => res.send(users))
            .catch(err => res.status(400).json("ERROR: " + err))
    })

router
    .route('/add')
    .post((req, res) =>{
        const username = req.body.username;

        const newuser = new User({username})

        newuser
            .save()
            .then(() => res.json('User Added'))
            .catch(err => res.status(400).json('Error '+ err))
    })

module.exports = router;