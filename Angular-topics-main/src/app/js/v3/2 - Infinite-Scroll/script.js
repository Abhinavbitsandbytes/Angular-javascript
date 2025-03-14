
const imageContainerEl = document.querySelector('#img-container');
const url = 'https://api.unsplash.com/photos/random/?client_id=EZi_2u8IjotptEiK_eJxNxydXXRiFzEu3zmVVAHzpj8&count=5';

// Using async await
async function fetchImg() {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((item) =>{
        const srcEl = document.createElement('img');
        srcEl.setAttribute('src', item.urls.regular)
        srcEl.setAttribute('alt', item.id)
        imageContainerEl.appendChild(srcEl);
    });
}
fetchImg();
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchImg();
    }
})

