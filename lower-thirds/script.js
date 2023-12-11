var timeBox = document.getElementById("datetimebox");
var updateTime;
var updateTimeHalf;
setInterval(
  (updateTime = function () {
    timeBox.innerText = moment().format("hh:mm A").toUpperCase();
  }),
  10000
);
setInterval(
  (updateTimeHalf = function () {
    timeBox.innerText = moment().format("MMM DD, YYYY").toUpperCase();
  }),
  100000
);
updateTime();
updateTimeHalf();
