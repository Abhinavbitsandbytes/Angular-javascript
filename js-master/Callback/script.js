
let posts = ['post1', 'post2'];

function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 1000);
}

function getPost() {
    setTimeout(() => {
        console.log(posts);
    }, 500);
}

createPost('post3', getPost);



