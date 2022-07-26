const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const nodemailer = require('nodemailer');
const User = require('../../models/User');

const PrevBooking = require('../../models/prevBooking');

const AvailableRooms= require('../../models/available');

const Configurations= require('../../models/configurations');

const Capacity= require('../../models/capacity');
const Location= require('../../models/locations');
const keys = require('../../config/keys');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');


//multer
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        //cb(null,file.originalname);
        //console.log(file);
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
}); 
const upload = multer({
    storage: storage
}).single('file');

router.post('/upload',(req,res,next)=>{
    //console.log(req.file);
    upload(req,res,function(err){
        if(err){
            return res.status(501).json({error:err});
        }
        return res.json({originalname:req.file.originalname,uploadname:req.file.filename})
    })
})
router.post('/sendMail',(req,res)=>{
    //console.log(req.body.userEmail);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alchemyapplication170@gmail.com',
        pass: 'alchemy@123'
      }
    });

    var mailOptions = {
      from: 'alchemyapplication170@gmail.com',
      to: 'niranjan@alchemysolutions.net',
      subject: 'Conformation for your advance booking ',
      text: 'This is the conformation PO Number for Your Advance Room Booking From '+ req.body.startDate + ' to ' +req.body.endDate + ' is :' +req.body.poNumber
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        //console.log('Email sent: ' + info.response);
        res.json({success:true,msg:"PO Validator Sended to Your Regitered GMail"})
      }
    });
})
router.post('/capacity',(req,res)=>{
    const capacity=req.body.capacity;
    //console.log(capacity);
    Capacity.findOne({capacity:capacity},(err,result)=>{
        if(err) throw err;
        if(result){
            res.send({success:false,msg:'capacity already exits'});
        }else{
            Capacity.create({capacity:capacity},(err,result)=>{
                if(err) throw err;
                res.send({success:true,msg:'capacity Inserted',data:result});
            })
        }
    })        
});
router.get('/capacityFetch',(req,res)=>{
    Capacity.find((err,capacity)=>{
        if(err) throw err;
        return res.json({success:true,data:capacity});
    })
});
router.post('/locations',(req,res)=>{
    const location=req.body.location;
    //console.log(capacity);
    Location.findOne({location:location},(err,result)=>{
        if(err) throw err;
        if(result){
            res.send({success:false,msg:'location already exits'});
        }else{
            Location.create({location:location},(err,result)=>{
                if(err) throw err;
                res.send({success:true,msg:'location Inserted',data:result});
            })
        }
    })        
});
router.get('/locationsFetch',(req,res)=>{
    Location.find((err,location)=>{
        if(err) throw err;
        return res.json({success:true,data:location});
    })
});

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
                    password: req.body.password,
                    userType:"user"
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
            //console.log(user);
            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //User Matched
                        const payload = { id: user.id, name: user.name } //jwt payload

                        //Sign token
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 604800  }, (err, token) => {
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
        rmResourceId:req.body.rmResourceId,
        userId:req.body.userId,
        roomId:req.body.roomId,
        roomName:req.body.roomName,
        image:req.body.image,
        configuration:req.body.configuration,
        location:req.body.location,
        capacity:req.body.capacity,
        city:req.body.city,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        status:req.body.status,
        poNumber:req.body.poNumber
    })
    //console.log(bookingData)
    PrevBooking.create(bookingData,(err,data)=>{
        if(err) throw err;
        return res.json({success:true,data:data});
    })
});
router.post('/updatePrevBooking',(req,res)=>{
    const status=req.body.status;
    const id=req.body.bookingId;
    const poNumber=req.body.poNumber;
    //console.log(poNumber,status,id);
    PrevBooking.updateOne({_id:id},{$set: {status:status,poNumber:poNumber}},{upsert:true},(err,data)=>{
        if(err){
             throw err;
        }
        else{
            PrevBooking.find((err,data)=>{
                if(err) throw err;
                return res.json({success:true,data:data})
            }); 
        }
    })
})
router.post('/updateBooking',(req,res)=>{
    const id=req.body.rmResourceId;
    const startDate=req.body.startDate;
    const endDate=req.body.endDate;
    //console.log(id);
    AvailableRooms.updateOne({_id:id},{$set: {startDate:startDate,endDate:endDate}},{upsert:true},(err,data)=>{
        if(err){
             throw err;
        }
        else{
            AvailableRooms.find((err,data)=>{
                if(err) throw err;
                return res.json({success:true,data:data})
            }); 
        }
    })
});
// router.post('/deleteWrong',(req,res)=>{
//     //const roomId=req.body.roomId;
//     const location=req.body.location;
//     AvailableRooms.deleteMany({location:location},(err,result)=>{
//         if(err) throw err;
        
//         return res.json({success:true,data:result})
//     })

// })
router.get('/prevBookingData',(req,res)=>{
    PrevBooking.find({}).sort({_id: -1}).exec((err,data)=>{
        if(err) throw err;

        return res.json({success:true,data:data})
    });
})
router.post('/configurations',(req,res)=>{

    let configuration=new Configurations({
        location:req.body.location,
        configuration: req.body.configuration,
        capacity:req.body.capacity
    })
    Configurations.findOne({'configuration':configuration.configuration},(err,list)=>{
        if(err) throw err;
        if(list){
            return res.json({success:false,msg:"configuration exits"});
        }else{
            Configurations.create(configuration,(err,list)=>{
                if(err) throw err;

                return res.json({success:true,data:list});
            })
        }
    })
            
});
router.get('/getConfigurations',(req,res)=>{
    Configurations.find((err,configurations)=>{
        if(err) throw err;
        return res.json({success:true,data:configurations});
    })
});
router.post('/roomResource',(req,res)=>{
    let availableRooms=new AvailableRooms({
        location:req.body.location,
        capacity:req.body.capacity,
        configuration:req.body.configuration,
        roomId:req.body.roomId,
        status:req.body.status,
        image:req.body.image,
        contactAddress:req.body.contactAddress
    })
    AvailableRooms.create(availableRooms,(err,data)=>{
        if(err) throw err;
        return res.json({success:true,data:data});
    })
})
router.get('/getAvailableRooms',(req,res)=>{
    AvailableRooms.find({}).sort({_id: 1}).exec((err,availableRooms)=>{
        if(err) throw err;
        return res.json({success:true,data:availableRooms});
    })
});
module.exports = router;