const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
	configuration:String,
});
const available = module.exports=mongoose.model('available',userSchema);

