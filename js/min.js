







function convertDollar(){

   var dollar = document.getElementById("dollar").value;

   var result = document.getElementById("result");

if(dollar==""){
   
        result.innerHTML="Enter Data"
        return false;
    }else if(isNaN(dollar)){
        result.innerHTML="Enter Number Not Text"
        return false;
    }else if (dollar<0){
         result.innerHTML="Enter postive Number"
         return false;
    }else if (dollar==0){
         result.innerHTML="Enter Number Rather Than Zero"
         return false;
    }else {
         result.innerHTML= dollar*48.17 +" Egyption Pound"
         return false;
    }

}