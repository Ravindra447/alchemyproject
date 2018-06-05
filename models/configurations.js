const mongoose=require('mongoose');

const configSchema=new mongoose.Schema({
	location:String,
	configuration:String
});
const configuration = module.exports=mongoose.model('configuration',configSchema);

