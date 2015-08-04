document.body.style.backgroundColor = "red";

console.log("Content script");

var port = chrome.runtime.connect();
port.postMessage("first message");
port.onMessage.addListener(function(msg) {
  console.log("got port message", msg);
  port.postMessage("another content msg");
});

port.onDisconnect.addListener(function() {
  console.log("port disconnected in child");
});
