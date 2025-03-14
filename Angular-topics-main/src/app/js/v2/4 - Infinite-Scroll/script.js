const listItemsEl = document.querySelector('#list-items');
const filterEl = document.querySelector('#filter')
let dataa = [];
let page=1;
const baseUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=';
function getData(){
    fetch(`${baseUrl}${page}`)
    .then(res=>res.json())
    .then((data) => {
       updateList(data)
    })
}
function updateList(data){
    let content = '';
    content =   data.map((item)=>{
return `
<div class="content">
<div>${item.id}</div>
<div class="title">${item.title}</div>
<div class="body">${item.body}</div>
</div>`
}).join('');
    listItemsEl.innerHTML += content
}

function handleFilter(term){
const contentList = listItemsEl.querySelectorAll('.content')
    contentList.forEach((item)=>{
        const title = item.querySelector('.title').innerText.toLowerCase();
        const body = item.querySelector('.body').innerText.toLowerCase();
        if((title.indexOf(term)>-1) || body.indexOf(term)>-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}


window.addEventListener('scroll', function (event) {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        page++;
        getData();
    }
});
filterEl.addEventListener('keyup', (e) => {
    handleFilter(e.target.value);
})
getData();