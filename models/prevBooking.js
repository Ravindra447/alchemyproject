const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
	rmResourceId:String,
	userId:String,
	roomId:String,
	roomName:String,
	capacity:Number,
	city:String,
	image:[],
	configuration:String,
	state:String,
	zipcode:Number,
	startDate:String,
	endDate:String,
	status:String,
	location:String

});
const preBooking = module.exports=mongoose.model('previousBooking',userSchema);

