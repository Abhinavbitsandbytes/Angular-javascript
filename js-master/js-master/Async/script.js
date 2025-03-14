async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}
fetchData().then((res)=>{
    console.log(res)
})
// --------------callback start-------------
const posts = [
    { title: 'post 1', body: 'this is post 1' },
    { title: 'post 2', body: 'this is post 2' }
]
function getPost() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output = output + `<li>${post.title} </li>`
        })
        document.body.innerHTML = output
    }, 1000)
}
function addPost(post, cb) {
    setTimeout(() => {
        posts.push(post)
        cb()
    }, 1500)
}
addPost({ title: 'post 3', body: 'this is post 3' }, getPost);
// ----------------callback end ---------------------------

// ------------------Promise start--------------------------
function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            resolve();
        }, 1500)
    })
}
addPost({ title: 'post 3', body: 'this is post 3' }).then((res) => {
    getPost()
})
//------------------Promise end-------------------------------

// ------------------------async await start ---------------------
 function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1500);
    });
}
async function createPost() {
    await addPost({ title: 'post 3', body: 'this is post 3' });
    getPost();
}
createPost();
