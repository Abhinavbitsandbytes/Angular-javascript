const searchTerm = document.getElementById('search-item');
const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const searchResult = document.getElementById('search-result');
const singleResult = document.getElementById('single-result');

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
let searchText='';

async function getTextSearchResult(){
    let res = await fetch(`${baseUrl}/search.php?s=${searchText}`)
  let data = await res.json();
 showSearchedMeals(data)
}
async function getSelectedMeal(id) {
    let res = await fetch(`${baseUrl}lookup.php?i=${id}`) 
    let data = await res.json();
    showSelectedMeal(data.meals[0])
}
async function getRandomMeal() {
    let res = await fetch(`${baseUrl}random.php`)
    let data = await res.json();
    showSelectedMeal(data.meals[0])
}
function showSearchedMeals(data){
    searchResult.innerHTML = ''
    singleResult.innerHTML = ''
    let div = document.createElement('div')
    let para = document.createElement('p')
    para.innerHTML = `Search result for '${searchText}'`
    data.meals.forEach((meal) => {
        let img = document.createElement('img');
        img.setAttribute('src', meal.strMealThumb)
        img.setAttribute('class', 'meal-img')
        img.setAttribute('data-mealId', meal.idMeal)
      //  img.setAttribute('onClick', `selectedItem(${meal.idMeal})`)
// we can also add onClick handler on each src and that will be easy but 
//that will be too many handlers hanging around.

// so we have attached 'click' eventListener on parent ie 'searchResult' and found the click item
// using e.path.forEach
        div.appendChild(img)
    })
    searchResult.appendChild(para)
    searchResult.appendChild(div)
}
function showSelectedMeal(meal){
    singleResult.innerHTML=''
    let img = document.createElement('img');
    img.setAttribute('src', meal.strMealThumb)
    img.setAttribute('class', 'meal-img')
    const div = document.createElement('div');
    div.innerHTML = meal.strInstructions;
    singleResult.appendChild(img);
    singleResult.appendChild(div)

}




searchBtn.addEventListener('click', (e) => {
    searchText = searchTerm.value;
    getTextSearchResult();
})

searchResult.addEventListener('click', (e) => {
   let selectedMeal = '';
    e.path.forEach((item) => {
        if (item.className && item.className === 'meal-img'){
selectedMeal = item;
        }
    })
  const mealId = selectedMeal.getAttribute('data-mealId')
    getSelectedMeal(mealId)
})
randomBtn.addEventListener('click', (e) =>{
    getRandomMeal()
})