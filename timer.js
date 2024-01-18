// // Get the current year
// var currentYear = new Date().getFullYear();

// // Set the countdown date with the current year
// var countDownDate = new Date("Jun 5, " + currentYear + " 00:00:00").getTime();
 

// Get the current date
var currentDate = new Date();

// Calculate the target month (current month + 2)
var targetMonth = currentDate.getMonth() + 2;

// If the calculated month exceeds December (12), adjust the year and month accordingly
if (targetMonth > 11) {
    targetMonth -= 12;
    currentDate.setFullYear(currentDate.getFullYear() + 1);
}

// Set the countdown date with the calculated month and current year
var countDownDate = new Date(currentDate.getFullYear(), targetMonth, 5, 15, 37, 25).getTime();

var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 