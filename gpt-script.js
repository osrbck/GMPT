console.log('hi im the gpt script');

chrome.runtime.onMessage.addListener(
    function(emailContent, sender, sendResponse) {
        const textArea = document.querySelector('textarea');
		
		let n = 1;
        const callback = function(mutationList, observer) {
			if (n === 3) {
				const responses = document.querySelector('#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div > div.flex-1.overflow-hidden > div > div > div').childNodes;
				const lastResponse = responses[responses.length - 2];
				const lastResponseText = lastResponse.innerText.slice(9);
			    sendResponse(lastResponseText);
			}
			n++;
        };
        const button = textArea.nextElementSibling;
        const observer = new MutationObserver(callback);
        observer.observe(button, {attributes: true});
		
		const inputEvent = new Event('input', {
			'bubbles': true,
			'cancelable': true
		});
        textArea.value = 'Respond to the most recent email in a professional tone and sign off with my name (Herman) at the end:\n' + emailContent;
		textArea.dispatchEvent(inputEvent);
		button.click()
        return true;
    }
)