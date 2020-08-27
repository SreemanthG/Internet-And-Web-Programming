var form = document.getElementById("form");
// Name: 
var name= document.getElementById("name");

// Age: 
var age= document.getElementById("age");


// Gender: 
var gender= document.getElementById("gender");


// No. of Visits: 
var nov= document.getElementById("nov");


// Date: 
var date= document.getElementById("date");


// Dep: 
var dep= document.getElementById("dep");


form.addEventListener("submit",function(event){
    event.preventDefault();
    var flag = false;
    try{
        if(!age.checkValidity()){
            throw("Age must be a number");
        }
    }
    catch(e){
        // alert(e);
        document.getElementById("ageerrors").innerHTML = "<p>"+e+"</p>";
        flag=true;
    }
    try{
        if(age.value<0){
            throw("Enter Positive Age Value");
        }

    }
    catch(e){
        // alert(e);
        document.getElementById("ageerrors").innerHTML = "<p>"+e+"</p>";
        flag=true;
    }
    try{
        if(!nov.checkValidity()){
            throw("No. of visits must be a number");
        }
    }
    catch(e){
        // alert(e);
        document.getElementById("noverrors").innerHTML = "<p>"+e+"</p>";
        flag=true;

    }
    try{
        if(nov.value<0){
            throw("Enter Positive No. of Visits");
        }
    }
    catch(e){
        // alert(e);
        document.getElementById("noverrors").innerHTML = "<p>"+e+"</p>";
        flag=true;

    }
    try{
        if(Date.parse(date.value)<Date.parse("2020-05-01") || Date.parse(date.value)>Date.parse("2020-05-31")){
            throw("Enter Date Between from 1/5/2020 to 31/5/2020.");
        }
    }
    catch(e){
        // alert(e);
        document.getElementById("dateerrors").innerHTML = "<p>"+e+"</p>";
        flag=true;
    }
      
//         Throw an exception for Department not specified as Paediatrician,
// Ophthalmology, Cardiac, and Dental.
        try{
            if(dep.value!="Paediatrician" && dep.value!="Ophthalmology" && dep.value!="Cardiac" && dep.value!="Dental" ){
                throw("Enter the department from these Paediatrician, Ophthalmology, Cardiac, Dental");
            }
        }       
        catch(e){
            // alert(e);
        document.getElementById("deperrors").innerHTML = "<p>"+e+"</p>";
        flag=true;
        }
        if(flag){
            return false;
        }
})