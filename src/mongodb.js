const mongoose=require('mongoose');
const {Schema} = mongoose;

mongoose.connect("mongodb://0.0.0.0:27017/loginn")
.then(()=>{
    console.log("DataBase is Connected");
})
.catch((e)=>{
    console.log("Failed to Connect");
});

const logINSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model('login1',logINSchema);


module.exports=collection;

