var timeBox = document.getElementById("datetimebox");
var updateTime;
var updateTimeHalf;
setInterval(
  (updateTime = function () {
    timeBox.innerText = moment().format("MMM d, 'YY | h:mm A").toUpperCase();
  }),
  10000
);
updateTime();


function changeTitleText(i) {
 
  document.getElementById("maintext").innerHTML = i;
}

function changeSubText(i) {
  document.getElementById("subtext").innerHTML = i;
}

function changeScrollText(i) {
  document.getElementById("scrollingtext").innerHTML = i;
}