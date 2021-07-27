var mongoose = require("mongoose");//Getting the mongoose dependency

var subjectSchema = new mongoose.Schema({
    fName  :String,
    lName  :String,
    rollNo :String,
    class  :String,
    area   :String,
    school :String,
    subject:[{
              name:String,
              marks:Number
            }],
    phoneNo: Number           
});

module.exports = mongoose.model("subject",subjectSchema);