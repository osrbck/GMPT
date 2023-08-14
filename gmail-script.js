window.onload = function()
{
    window.onhashchange = () => {
        if (window.location.hash.startsWith('#inbox/')) {
            const spans = document.querySelectorAll('span');

            for(const span of spans){
                    if (span.innerText === 'Reply') {
                        //do something on click
                        span.addEventListener('click' ,function(){
                            const email = document.querySelector('.adn.ads');
                            console.log(email.textContent);
                        });
                    }
            }
        }
    };
}
