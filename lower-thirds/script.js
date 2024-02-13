var timeBox = document.getElementById("datetimebox");
var updateTime;
var updateTimeHalf;
setInterval(
  (updateTime = function () {
    timeBox.innerText = moment().format("MMM d | h:mm A").toUpperCase();
  }),
  10000
);
updateTime();
