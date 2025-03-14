// -> Way to append in list
postEl.innerHTML = `
        <div class="number">${post.id}<div/>
        <div class="title">${post.title}<div/>
        <div class="body">${post.body}<div/>
        `
postsContainer.appendChild(postEl)

// -> way to get inner text
const title = post.querySelector('.title').innerText.toLowerCase();

//-> way to add style in js
item.style.display