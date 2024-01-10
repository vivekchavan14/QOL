const router = require('express').Router()
const User = require('../models/users.models');

//creating and handling Requests
router.route('/').get((req,res)=>{
    User.find()
        .then(users=>res.json(users)) // sending responce 
        .catch(err=>res.status(400).json('Error:'+ err))
})


router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const age = req.body.age;
    const gender = req.body.gender;
    const position = req.body.position;

    const newUser =  new User({username,age,gender,position}); //creating username with username type

    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err => res.status(400).json('Error:'+ err));
})

module.exports = router;