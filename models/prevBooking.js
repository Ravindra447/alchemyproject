const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
	rmResourceId:String,
	userId:String,
	roomId:String,
	roomName:String,
	capacity:String,
	city:String,
	image:[],
	configuration:String,
	startDate:String,
	endDate:String,
	status:String,
	location:String,
	poNumber:String

});
const preBooking = module.exports=mongoose.model('previousBooking',userSchema);

