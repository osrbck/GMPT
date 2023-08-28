console.log('GMPT init');

chrome.runtime.onMessage.addListener(
    (emailContent, sender, sendResponse) => {
        const textArea = document.querySelector('textarea');
        textArea.value = 'Respond to the most recent email in a professional tone: \n';
        const button = textArea.nextElementSibling;
        button.click();

        const callback = function(mutationList, observer){
            for(const mutation of mutationList){
                if(mutation.attributeName ==='disabled'){
                    if(button.disabled ===false) console.log('GPT response finished');
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(button, {attributes: true});
    }
)