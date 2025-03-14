
let posts = ['post1', 'post2'];

function createPost(post) {
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push(post);
        resolve(posts)
    }, 1000);
})
}

function getPost() {
    setTimeout(() => {
        console.log(posts);
    }, 500);
}

createPost('post3').then((data)=>{
    getPost()
});



