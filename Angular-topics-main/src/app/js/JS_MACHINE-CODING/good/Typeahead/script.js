// import { getSuggestions } from './utils.js';

const FRUITS = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Lemon"
]
const getSuggestions = (keyword) => {
    const result = FRUITS.filter((i) => {
        return i.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    })
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(result);
        })
    }, 1000)
}



// ------------------------------------------------------------- 








const inputBox = document.getElementById('search-input');
const suggestedBox = document.getElementById('suggestions-wrapper');

const resetState = () => {
    suggestedBox.classList.remove("suggestions-visible")
}

const renderDropItems = (list) =>{
    const suggestionFragment = document.createDocumentFragment();

    list.forEach((item) => {
        const el = document.createElement('div');
        el.innerHTML = item;
        el.classList.add('dropdown-item')
        el.setAttribute('data-key', item)
        suggestionFragment.appendChild(el);
    })
    suggestedBox.innerHTML=''; 
    suggestedBox.appendChild(suggestionFragment)

}


const handleSearch = async (keyword) => {
    const result = await getSuggestions(keyword)
    console.log(result)
    if(result.length>0){
        suggestedBox.classList.add('suggestions-visible');
        renderDropItems(result)
    }
    else{
        resetState()
    }
}

const handleInputChange = (event) => {
    const value = event.target.value;
    if(value){
    handleSearch(value)
    }
    else{
        resetState();
    }
}


const handleSelect =(event) =>{
    if(event.target.dataset){
        inputBox.value = event.target.dataset.key;
        resetState();
    }
}

  inputBox.addEventListener('input', (e) => {
      handleInputChange(e)
  })

  suggestedBox.addEventListener('click', (e)=>{
    handleSelect(e)
  })