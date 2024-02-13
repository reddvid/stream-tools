var timeBox = document.getElementById("datetimebox");

var updateTime;
var updateTimeHalf;

setInterval(
   updateTime = function () {
      timeBox!.innerText = moment().format('HH:mm').toUpperCase();
   }, 1000);

setInterval(
   updateTimeHalf = function () {
      timeBox!.innerText = moment().format('MMM DD, YYYY').toUpperCase();
   }, 5000);

updateTime();
updateTimeHalf();

