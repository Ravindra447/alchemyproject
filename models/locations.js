const mongoose=require('mongoose');

const locationSchema=new mongoose.Schema({
	location:String
});
const location = module.exports=mongoose.model('location',locationSchema);

