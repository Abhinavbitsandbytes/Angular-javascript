const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const perTicketPrice = document.getElementById('movies');
const price = document.getElementById('price');
const noOfSeats = document.getElementById('noOfSeats');

let ticketPrice = +perTicketPrice.value;

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    // only required for local storage
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    price.innerHTML = selectedSeats.length * ticketPrice;
    noOfSeats.innerHTML = selectedSeats.length;
}


movies.addEventListener('change', e=>{
    ticketPrice = e.target.value;
    updateSelectedCount();

})
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

    }
    updateSelectedCount()

})
updateSelectedCount()