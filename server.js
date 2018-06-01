const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cors = require('cors');

const users = require('./routes/api/users');

const app = express();

//Body Parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//public html

app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'uploads')))


//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo db
mongoose
    .connect(db)
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

//Passport middleware

app.use(passport.initialize());
app.use(passport.session());

//Passport config
require('./config/passport')(passport);

//Use Routes
app.use('/api/users', users);


const port =5000;
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
});

app.listen(port, () => console.log(`server running on port ${port}`));
