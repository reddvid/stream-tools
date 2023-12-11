"use strict";
// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
var urlParams;
(function () {
  var match,
    pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);

  urlParams = {};
  while ((match = search.exec(query)))
    urlParams[decode(match[1])] = decode(match[2]);
})();

var output = document.getElementById("output");
var timeBox = document.getElementById("timebox");
var follower = document.getElementById("follower");
var countdown = document.getElementById("ctd");

if (urlParams["style"]) output.setAttribute("style", urlParams["style"]);
if (urlParams["bodyStyle"])
  document.body.setAttribute("style", urlParams["bodyStyle"]);

var updateTime;
var updateTimeHalf;
var readTextToFollower;
var updateCountdownText;

var openFile = function (event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function () {
    var text = reader.result;
    var node = document.getElementById("follower");
    node.textContent = text;
    console.log(reader.result.substring(0, 200));
  };
  reader.readAsText(input.files[0]);
};
// var openFile() {
//   var fileToLoad = document.getElementById("fileToLoad").files[0];
//   var fileReader = new FileReader();
//   fileReader.onload = function (fileLoadedEvent) {
//     document.getElementById("inputTextToSave").value = fileLoadedEvent.target.result;
//   };
//   fileReader.readAsText(fileToLoad, "UTF-8");
// }

setInterval(
  (updateTime = function () {
    output.innerText =
      moment().format(urlParams["format"] || "ddd MMM Do YYYY, h:mm A") +
      " PHST";
    timeBox.innerText = moment().format("dddd, MMM D | HH:mm").toUpperCase();
  }),
  1000
);

setInterval(
  (updateTimeHalf = function () {
    output.innerText =
      moment().format(urlParams["format"] || "ddd MMM Do YYYY, h:mm A") +
      " PHST";
    timeBox.innerText = moment().format("dddd, MMM D | HH mm").toUpperCase();
  }),
  5000
);

setInterval(
  (readTextToFollower = function () {
    reader.onload = function () {
      var text = reader.result;
      var node = document.getElementById("follower");
      node.textContent = text;
      console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
  }),
  1000
);

const xmas = moment("25-12-2023", "DD-MM-YYYY");

setInterval(
  (updateCountdownText = function () {
    var days = moment.duration(moment(xmas).diff(moment())).days();
    var hours = moment.duration(moment(xmas).diff(moment())).hours();
    var minutes = moment.duration(moment(xmas).diff(moment())).minutes();
    var seconds = moment.duration(moment(xmas).diff(moment())).seconds();

    cdt.innerText = "";
    if (days == 1) {
      cdt.innerText += days + " day";
    } else if (days <= 0) {
      cdt.innerText == "";
    } else {
      cdt.innerText += days + " days";
    }

    if (hours == 1 || hours == 0) {
      cdt.innerText += " " + hours + " hour";
    } else if (days < 0 && hours < 0) {
      cdt.innerText = "";
    } else {
      cdt.innerText += " " + hours + " hours";
    }

    if (minutes == 1 || minutes == 0) {
      cdt.innerText += " " + minutes + " minute";
    } else if (days < 0 && hours < 0 && minutes < 0) {
      cdt.innerText = "";
    } else {
      cdt.innerText += " " + minutes + " minutes";
    }

    if (seconds == 1 || seconds == 0) {
      cdt.innerText += " " + seconds + " second until Christmas!";
    } else if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
      cdt.innerText = "It's past Christmas! Happy Holidays. 🥳🎉";
    } else {
      cdt.innerText += " " + seconds + " seconds until Christmas!";
    }
  }),
  1000
);

updateTime();
updateTimeHalf();
updateCountdownText();
