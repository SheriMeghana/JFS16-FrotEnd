//setTimeout
function saybye(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
setTimeout(saybye, 5000, "Hello", "sunny")

//setInterval
let timerId = setInterval(() => alert('setInterval'), 1000);