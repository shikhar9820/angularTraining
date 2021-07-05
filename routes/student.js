var express   = require("express");
var router    = express.Router();
var student = require("../models/student");

//Response to API call for finding all the student details
router.get("/studentDetails", async function (req, res) {
    try{
       const studentData= await student.find();
        res.send(studentData);
    }catch(err){
        res.send({message:err});
    }
});

//Response to API call for inserting student details
router.post("/studentDetails",async function (req, res) {
    if(req.body==undefined){
        res.send({message:"Enter a correct value"});
    }
    const newStudent =new student({
        fName  :req.body.fName,
        lName  :req.body.lName,
        rollNo :req.body.rollNo,
        phoneNo:req.body.phoneNo
    });
    console.log(newStudent);
    try{
     const savedStudent= await newStudent.save();
     res.send(savedStudent);
    }catch(err){
        console.log(err);
    res.send({message:err});
    }
});

//Response to API call for searching a specific student(s) 
router.get("/searchstudent", async function (req, res) {
    let search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
    search_el=search_el.split(",");
    try{
        const searchedStudent= await student.find({rollNo:{$in:search_el}});
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});
//response route to API call for deleting a student entry
router.delete("/deletestudent",async function (req, res) {
    var deleted=req.query.deletedata;
    if(deleted==undefined){
        res.send({message:"Enter a correct value"});
    }
    deleted=deleted.split(",");
    try{
        const deletedStudent= await student.remove({rollNo:deleted});
        res.json(deletedStudent);
    }catch(err){
        res.send({message:err});
        }
    });
//=============================================//////////////////////////==============================//
module.exports = router;
