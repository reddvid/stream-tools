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
if (urlParams["style"])
  output === null || output === void 0
    ? void 0
    : output.setAttribute("style", urlParams["style"]);
if (urlParams["bodyStyle"])
  document.body.setAttribute("style", urlParams["bodyStyle"]);
var updateTime;
var updateTimeHalf;
var readTextToFollower;
var openFile = function (event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function () {
    var text = reader.result;
    var node = document.getElementById("follower");
    node.textContent = text.toString();
    console.log(reader.result.toString().substring(0, 200));
  };
  reader.readAsText(input.files[0]);
};
setInterval(
  (updateTime = function () {
    output.innerText =
      moment().format(urlParams["format"] || "ddd MMM Do YYYY, h:mm A") +
      " PHST";
    timeBox.innerText = moment().format("DD-MMM HH:mm").toUpperCase();
  }),
  1000
);
setInterval(
  (updateTimeHalf = function () {
    output.innerText =
      moment().format(urlParams["format"] || "ddd MMM Do YYYY, h:mm A") +
      " PHST";
    timeBox.innerText = moment().format("DD-MMM HH mm").toUpperCase();
  }),
  5000
);
updateTime();
updateTimeHalf();
