// 1-> way to add click handler in js
<button class="remove-btn" onClick="deleteTrans(${obj.id})">X</button>

// 2-> way to append node
const list = document.createElement('li');
TransList.appendChild(list);

// 3-> way to set and get items in local storage
localStorage.setItem('trans', JSON.stringify(trans))
JSON.parse(localStorage.getItem('trans'))