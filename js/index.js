function searchValidation() {
    var pin = document.getElementById('PIN').value;
    var district =document.getElementById('dis').value;
    if((pin || district)){
        document.getElementById('pin_code').innerHTML="";
        document.getElementById('District').innerHTML="";
        return true;
    }
        
        document.getElementById('pin_code').innerHTML="**Required";
        document.getElementById('District').innerHTML="**Required";
        return false;
        
}