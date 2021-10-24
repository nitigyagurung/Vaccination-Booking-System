const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const PIN = urlParams.get('PIN');
const dis = urlParams.get('dis')
document.getElementById("pin").innerHTML= "Your Pin Code is:"   +PIN ;
document.getElementById("district").innerHTML= "Your District Code is:"   +dis ;
 
//Spinner
function spinner() {
    const load ='<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
    document.getElementById(searchbtn);
}


  