console.log('GMPT init');

chrome.runtime.onMessage.addListener(
    (emailContent, sender, sendResponse) => {
        console.log(emailContent);
    }
)