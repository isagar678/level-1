const mongoose=require('mongoose');
const { name } = require('pug');
mongoose.connect("mongodb+srv://isagar678:vRH$bFn7sTPsBBW@cluster0.snbtigq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const businessSchema=mongoose.Schema({
    name:String,
    experience:String,
    interests:Array    
});
const businessData=mongoose.model('businessCardDb',businessSchema);
module.exports=(businessData);
