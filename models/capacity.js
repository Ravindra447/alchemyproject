const mongoose=require('mongoose');

const capacitySchema=new mongoose.Schema({
	capacity:String
});
const capacity = module.exports=mongoose.model('capacity',capacitySchema);

