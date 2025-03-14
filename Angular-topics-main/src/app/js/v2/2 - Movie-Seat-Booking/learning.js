// 1-> if target has class seat and does not has class occupied, 
// toggle (add and remove) selected class on click

seatsContainerEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }
    updateSeatCount()
})

// 2-> get all nodes which are under class row with class seat and selected simultaneously
selectedSeats = document.querySelectorAll('.row .seat.selected').length