const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const PIN = urlParams.get('PIN');
alert(PIN);

const dis = urlParams.get('dis')
alert(dis);
 

  