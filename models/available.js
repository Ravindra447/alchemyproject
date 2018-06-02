const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
	location:String,
	capacity:Number,
	configuration:String,
	roomId:String,
	contactAddress:String,
	status:String,
	image:String
});
const available = module.exports=mongoose.model('availableRoom',userSchema);

