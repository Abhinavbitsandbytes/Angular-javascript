const addBookmarkEl = document.querySelector('#add-bookmark');
const bookmarkListEl = document.querySelector('#bookmark-list')

let items = [];
function AddBookmarkToUi(){
    bookmarkListEl.innerHTML=''
    items.forEach((item)=>{
        let div = document.createElement('div');
        div.classList.add('list-item')
        let span = document.createElement('span');
        span.setAttribute('onClick', `removeItem(${item.id})`)
        span.innerText = "X";

        let a = document.createElement('a');
        a.setAttribute('href', item.url);
        a.setAttribute('target', '_blank');
        a.innerText = item.name
        div.appendChild(span);
        div.appendChild(a);
        bookmarkListEl.appendChild(div);
    })
}

function removeItem(id){
    items = items.filter((item)=>{
        return item.id!==id
    })
    console.log(items)
    AddBookmarkToUi()
}

addBookmarkEl.addEventListener('click', (e)=>{
    const obj={
        name : `Title-${Math.random()*1000%100}`,
        url: "https://jacinto.design/",
        id: Math.random()
    }
    items.push(obj);
    AddBookmarkToUi();
})