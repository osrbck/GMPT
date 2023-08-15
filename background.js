console.log('Hello service worker');

chrome.runtime.onMessage.addListener(
    (emailContent, sender, sendResponse) => {
        console.log(emailContent);
        (async function() {
            const tabs = await chrome.tabs.query({url: "https://chat.openai.com/*"});
            const tab = tabs[0];
            chrome.tabs.sendMessage(tab.id, emailContent);
        })();
    }
)