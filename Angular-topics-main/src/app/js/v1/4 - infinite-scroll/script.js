
const postsContainer = document.querySelector('#posts-container')
const filter = document.querySelector('#filter')

let limit = 15;
let page = 1;


// Fetch posts from API
async function getPosts() {
    console.log(postsContainer)
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const data = await res.json();

    return data;
}

async function showPosts() {
    const posts = await getPosts();

    posts.forEach((post) =>{
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class="number">${post.id}<div/>
        <div class="title">${post.title}<div/>
        <div class="body">${post.body}<div/>
        `
        postsContainer.appendChild(postEl)
    })

}

function filterPosts(e) {
    const search = e.target.value;
    const posts = document.querySelectorAll('.post');
    posts.forEach((post)=>{
        const title = post.querySelector('.title').innerText.toLowerCase();
        const body = post.querySelector('.body').innerText.toLowerCase();
        if(title.indexOf(search)>-1 || body.indexOf(search)>-1){
post.style.display = 'flex';
        }
        else{
            post.style.display='none'
        }
    })
}

window.addEventListener('scroll', ()=>{
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight-5) {
        page++;
        showPosts();
    }
})

filter.addEventListener('input', filterPosts)
showPosts();