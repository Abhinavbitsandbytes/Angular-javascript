const movieList = document.getElementById('movielist');
const seatsContainer = document.getElementById('seats-container');
const totalSeats = document.getElementById('totalSeats');
const price = document.getElementById('price');






function handleDropdownChange(e){
    console.log(e.target.value)
}

function handleSeatsContainerClick(e){
    if(!e.target.classList.contains('occupied'))
e.target.classList.toggle('booked');

const count = seatsContainer.querySelectorAll('.booked');
console.log(count.length)
}

movieList.addEventListener('change', (e) => {
    handleDropdownChange(e);
})

seatsContainer.addEventListener('click', (e)=>{
    handleSeatsContainerClick(e);
})
