function loadScript(src) {
  let script = document.createElement('script');
  const useSSL = 'https:' == document.location.protocol;
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;
  script.src = (useSSL ? 'https://' : 'http://') + src;
  document.head.append(script);
}

function loadSDK(sdkName) {
  const sdk = {
    "instagram": "www.instagram.com/embed.js",
    "twitter": "platform.twitter.com/widgets.js"
  }

  switch(sdkName) {
    case "instagram":
      !('instgrm' in window) && loadScript(sdk.instagram);
      break;
    case "twitter":
      !('__twttr' in window) && loadScript(sdk.twitter);
      break;
  }
}

module.exports = loadSDK