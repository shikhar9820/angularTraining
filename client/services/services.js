//API call for searching a student
app.service('searchSvc',function($http){
    this.searchStudent=function(searchData){

        return $http.get("http://localhost:9000/searchstudent/?searchdata="+searchData); 
    }
})

//API call for inserting a student entry
app.service('insertSvc',function($http){
    this.insertStudent=function(obj)
    {
        return $http.post("http://localhost:9000/studentDetails",obj); 
    }
})

//API call for deleting a student
app.service('deleteSvc',function($http){
    this.deleteStudent=function(deleteParam)
    {
        return $http.delete("http://localhost:9000/deletestudent/?deletedata="+deleteParam); 
    }
})

//API call for analytics
app.service('ananlyticSvc',function($http){

    this.searchStudent=function(param1,param2,param3)
    {
        return $http.get("http://localhost:9000/"+param1+param2+"/?searchdata="+param3);
    }
})

//API call for fetching student details
app.service('getSvc',function($http){
    this.showStudent=function()
    {
        return $http.get("http://localhost:9000/studentDetails");
    }
})