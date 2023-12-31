window.onload = function () {
    window.onhashchange = () => {
        if (window.location.hash.startsWith('#inbox/')) {
            const spans = document.querySelectorAll('span');
    
            for (const span of spans) {
              if (span.innerText === 'Reply') {
                span.addEventListener('click', function() {
                    const email = document.querySelector('.adn.ads');
                    (async function() {
						console.log(email.textContent);
                        const gptResponse = await chrome.runtime.sendMessage(email.textContent);
						console.log(gptResponse);
                        const gmailTextbox = document.querySelector('[role=textbox]');
                        gmailTextbox.innerText = gptResponse;
                    })();
                });
              }
            }
        }
    };
}