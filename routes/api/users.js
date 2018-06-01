const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const User = require('../../models/User');

const PrevBooking = require('../../models/prevBooking');
const keys = require('../../config/keys');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');

router.get('/test', (req, res) => res.json({ msg: "Users works" }));

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

//Users login 
//GET api/users/login   returning JWT
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //Find user by email
    User.findOne({ email })
        .then(user => {
            //Check for users
            if (!user) {
                return res.status(404).json({ msg: 'email not found' });
            }

            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //User Matched
                        const payload = { id: user.id, name: user.name } //jwt payload

                        //Sign token
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token,
                                user:user
                            });
                        });
                    } else {
                        return res.status(400).json({ msg: 'Password incorrect' });
                    }
                })
        });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

router.post('/prevBooking',(req,res)=>{
    let bookingData= new PrevBooking({
        userId:req.body.userId,
        roomId:req.body.roomId,
        roomName:req.body.roomName,
        capacity:req.body.capacity,
        city:req.body.city,
        state:req.body.state,
        zipcode:req.body.zipcode,
        fromDate:req.body.fromDate,
        toDate:req.body.toDate,
        status:req.body.status
    })
    //console.log(bookingData)
    PrevBooking.create(bookingData,(err,data)=>{
        if(err)
            return res.json({success:false,msg:"server not responding"});  
        
        return res.json({success:true,msg:"Booking is success"});              
    })
});
router.post('/updatePrevBooking',(req,res)=>{
    const status=req.body.status;
    const id=req.body.bookingId;
    PrevBooking.updateOne({_id:id},{$set: {status:status}},(err,data)=>{
        if(err){
             throw err;
        }
        else{

            console.log(data);
            PrevBooking.find((err,data)=>{
                if(err) throw err;
                return res.json({success:true,data:data})
            }); 
        }
    })
})
router.get('/prevBookingData',(req,res)=>{
    PrevBooking.find((err,data)=>{
        if(err) throw err;

        return res.json({success:true,data:data})
    });
})
module.exports = router;