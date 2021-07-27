var express   = require("express");
var router    = express.Router();
var student = require("../models/student");
var subject = require("../models/subject");

//Response to API call for finding all the student details
router.get("/studentDetails", async function (req, res) {
    try{
       const studentData= await student.find();
       console.log(studentData); 
       res.send(studentData);
        
    }catch(err){
        res.send({message:err});
    }
});

//Response to API call for inserting student details
router.post("/studentDetails",async function (req, res) {
    if(req.body == undefined){
        res.send({message:"Enter a correct value"});
    }
    console.log(req.body);
    const newStudent =new student({
        fName  :req.body.fName,
        lName  :req.body.lName,
        rollNo :req.body.rollNo,
        phoneNo:req.body.phoneNo,
        area   :req.body.area,
        school :req.body.school,
        class  :req.body.std,
        subject:req.body.subject
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
//Response to API call for Analytics on the basis of area

router.get("/areaTopSchool", async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: {area:search_el}
                },
                {
                $group: 
                    { 
                      _id: "$school",
                      count: { $sum: 1 }
                    }
                },
               {
                $sort: { count: -1 } 
               },
               { $limit : 3 }
            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});
router.get("/areaTopSubject", async function (req, res) {
    var search_el= req.query.searchdata;
   // search_el=search_el.toString();
    console.log(search_el);
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { area: search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: "$subject.name",
                      count: { $sum: "$subject.marks" }
                    }
                },
               {
                $sort: { count: -1 } 
               },
               { $limit : 3 }
            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});
router.get("/areaTopStudent", async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { area: search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: {rollNo:"$rollNo",username:"$fName"},
                      average: { $avg : "$subject.marks" }
                    }
                },
            
                {
                    $sort: { average: -1 }
                },
                { $limit : 3 }

            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});
//Response to API call for Analytics on the basis of school
router.get("/schoolTopStudent", async function (req, res) {
    var search_el=req.query.searchdata;
    //search_el=search_el.toString();
    console.log(search_el);
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { school:search_el}
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: {rollNo:"$rollNo",username:"$fName"},
                      average: { $avg : "$subject.marks" }
                    }
                },
            
                {
                    $sort: { average: -1 }
                },
                { $limit : 3 }

            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});
router.get("/schoolTopSubject", async function (req, res) {
    var search_el= req.query.searchdata;
   // search_el=search_el.toString();
    console.log(search_el);
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { school:search_el}
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: "$subject.name",
                      count: { $sum: "$subject.marks" }
                    }
                },
               {
                $sort: { count: -1 } 
               },
               { $limit : 3 }
            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});

//Response to API call for Analytics on the basis of class
router.get("/classTopStudent", async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { class: search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: {rollNo:"$rollNo",username:"$fName"},
                      average: { $avg : "$subject.marks" }
                    }
                },
            
                {
                    $sort: { average: -1 }
                },
                { $limit : 3 }

            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});

router.get("/classTopSubject", async function (req, res) {
    var search_el= req.query.searchdata;
    search_el=search_el.toString();
    console.log(search_el);
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { class :search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: "$subject.name",
                      count: { $sum: "$subject.marks" }
                    }
                },
               {
                $sort: { count: -1 } 
               },
               { $limit : 3 }
            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
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

//bulk insertion API

router.post("/bulkInsertion", function (req, res) {
    cursor = subject.collection.find().limit(10000).batchSize(500000);
    cursor.on("data", data => console.log(data)); 
    bulk = subject.collection.initializeOrderedBulkOp();
    var area        = ["Delhi","Mumbai","Kolkata","Jammu","Chennai"];
    var school      = ["Kv","Pv","Dav","Hes","Gd"];
    var std         = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    var count=500001+500001+500001;
    var phoneNo=9873798628+500001+500001+500001;
    for(var counter=500000+500001;counter<1000000+500001;counter++){
        const random2 = Math.floor((Math.random() * area.length));
        const random3 = Math.floor((Math.random() * school.length));
        const random4 = Math.floor((Math.random() * std.length));
        var fname= "shikhar"+counter.toString();
        var lname= "Kataruka"+counter.toString();
        var rollNo=count;
        count++;
        var mobNo =phoneNo;
        phoneNo++;
        var newStudent = { fName: fname, lName: lname,rollNo: rollNo.toString(), phoneNo: mobNo ,area: area[random2],school:school[random3],class:std[random4],
        subject:[{name:"English",marks:Math.floor((Math.random() * 100) + 1)},{name:"Maths",marks:Math.floor((Math.random() * 100) + 1)}
        ,{name:"Science",marks:Math.floor((Math.random() * 100) + 1)},{name:"SocialScience",marks:Math.floor((Math.random() * 100) + 1)},{name:"Hindi",marks:Math.floor((Math.random() * 100) + 1)}]};
        bulk.insert(newStudent);
        if (counter == 1000)
        {
            bulk.execute();
        }
    }
    bulk.execute();
    res.send("Ok");
});

router.get("/bulkInsertion", function (req, res) {
    cursor = subject.collection.find().batchSize(10000);
    try{
    cursor.on("data", data => console.log(data)); 
    //cursor.on("error",data )  
    }catch(error){
        console.log(error);
    }
});


//=============================================//////////////////////////==============================//
module.exports = router;
