const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const PIN = urlParams.get('PIN');


const dis = urlParams.get('dis')


document.getElementById("demo1").innerHTML= "Your Pin Code is:"   +PIN ;
document.getElementById("demo2").innerHTML= "Your District Code is:"   +dis ;
 
 

  