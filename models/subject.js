var mongoose = require("mongoose");//Getting the mongoose dependency
var passportLocalMongoose = require("passport-local-mongoose");

var subjectSchema = new mongoose.Schema({
    name           :  String,//name of the subject
    subjectTeacher :  String,//name of the subject teacher
    maxMarks       :  Number,//Maximum marks that can be obtained in the subject
    dificultiLevel :  Number //Difficulty level of the subject
});

mongoose.plugin(passportLocalMongoose);//plugging in mongoose to subjectSchema

module.exports = mongoose.model("subject",subjectSchema);