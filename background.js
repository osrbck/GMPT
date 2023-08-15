console.log('Hello service worker');

chrome.runtime.onMessage.addListener(
    (emailContent, sender, sendResponse) => {
        console.log(emailContent);
    }
)