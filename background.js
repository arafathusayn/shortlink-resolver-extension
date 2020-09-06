/**
 * @param {chrome.webRequest.WebRequestBodyDetails} details
 */
function callback(details) {
  return {
    redirectUrl: `${resolverUrl}?url=${details.url}`,
  };
}

// @ts-ignore
// {chrome} in chromium or {browser} in firefox
const webRequest = chrome.webRequest || browser.webRequest;

webRequest.onBeforeRequest.addListener(callback, { urls: services }, [
  "blocking",
]);
