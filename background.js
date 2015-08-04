chrome.runtime.onConnect.addListener(function(port) {
  console.log("onConnect", JSON.stringify(port.sender));

  port.onMessage.addListener(function(msg) {
    console.log("parent got msg", msg);
  });

  port.onDisconnect.addListener(function() {
    console.log("port disconnected in parent");
  });
});
