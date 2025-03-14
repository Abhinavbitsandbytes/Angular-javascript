const movieListEl = document.querySelector('#movie-list');
const seatsContainerEl = document.querySelector('#seats-container');
const priceSeatInfoEl = document.querySelector('#price-seat-info');

let ticketPrice = +movieListEl.value;
let selectedSeats = 0;

function updateSeatCount(){
     selectedSeats = document.querySelectorAll('.row .seat.selected').length
    updatePrice();
}

function updatePrice(){
    priceSeatInfoEl.innerHTML = `You have selected ${selectedSeats} seats for a price of ${ticketPrice*selectedSeats}` 
}

movieListEl.addEventListener('change', (e)=>{
    ticketPrice = +e.target.value
    updatePrice();
})

seatsContainerEl.addEventListener('click', (e) =>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected')
  }
  updateSeatCount()
})