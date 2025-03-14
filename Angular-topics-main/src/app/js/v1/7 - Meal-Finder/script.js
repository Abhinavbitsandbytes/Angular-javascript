const searchTermEl = document.querySelector('#search-term')
const searchBtnEl = document.querySelector('#search-btn')
const randomBtnEl = document.querySelector('#random-btn')
const searchResultForEl = document.querySelector('#search-result-for')
const searchResultItemsEl = document.querySelector('#search-result-items')
const singleSearchItem = document.querySelector('#single-search-item')

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

function fetchMeals(){
    const searchTerm = searchTermEl.value;
    fetch(`${baseUrl}/search.php?s=${searchTerm}`)
    .then(res=>res.json())
    .then((data)=>{
        populateSearchResult(data);
    })
}
function getMealById(id){
    fetch(`${baseUrl}lookup.php?i=${id}`)
        .then(res => res.json())
        .then((data) => {
            populateSingleSearch(data.meals[0]);
        })

} 

function getRandomMeal() {
    fetch(`${baseUrl}random.php`)
        .then(res => res.json())
        .then((data) => {
            populateSingleSearch(data.meals[0]);
        })

}

function populateSingleSearch(item){
    console.log(item);
    singleSearchItem.innerHTML=`
    <div class="single-card">
       <img src=${item.strMealThumb} class="meal-img"  alt=${item.strMeal}>
       <p>${item.strInstructions}</p>
       </div>
    `
}

function populateSearchResult(data){
    searchResultItemsEl.innerHTML='';
    searchResultForEl.innerHTML = `Search results for ${searchTermEl.value}` 
    
    searchResultItemsEl.innerHTML = data.meals.map((item)=>{
       return `
       <div class="card">
       <img src=${item.strMealThumb} class="meal-img"  alt=${item.strMeal}>
       <div class="meal-name" data-mealId=${item.idMeal}> ${item.strMeal}</div>
       </div>
       `
    }).join('')
}

// Event listeners start

searchBtnEl.addEventListener('click', e =>{
    fetchMeals();
})
searchResultItemsEl.addEventListener('click', e=>{

    let mealInfo = '';
     e.composedPath.forEach(item => {
         if (item.classList && item.classList.contains('meal-name') ) {
            mealInfo=item
        }})
    
    const mealID = mealInfo.getAttribute('data-mealId');
    getMealById(mealID);
})

randomBtnEl.addEventListener('click', e =>{
    searchResultItemsEl.innerHTML = '';
    searchResultForEl.innerHTML='';
    getRandomMeal();

})

// Event listeners end