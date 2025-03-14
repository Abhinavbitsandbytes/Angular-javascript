const dropdown = document.getElementById('dropdown');
const container = document.getElementById('seattt');


let moviePrice = 5;



function update(){
    const seats = container.querySelectorAll('.seat.selected')

    console.log(seats.length);
}

dropdown.addEventListener('change', (e)=>{
})

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }

    update();
})