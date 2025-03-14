const container = document.querySelector('.container');
const winnerText = document.getElementById('winner-text')
let currentTurn = "X"
function toggleTurn(){
    currentTurn = currentTurn=="X"? "0": "X"
}
function checkWinner(){
    const winMatrix = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    // we will get all the 9 html nodes of boxes. Then we will loop through checkwinner matrix
    // and check for each permutation mention in winMatrix in html nodes that the inner text is same or not  
    let boxes = document.querySelectorAll('.box');
    winMatrix.forEach((item)=>{
        if (boxes[item[0]].innerText === boxes[item[1]].innerText &&
             boxes[item[1]].innerText === boxes[item[2]].innerText
            && boxes[item[0]].innerText !== ''
             )         
             {
                console.log(`winner is ${currentTurn}`)
            winnerText.innerText = `winner is ${currentTurn}`
        }
    }
    )
}


container.addEventListener('click', (e)=>{
    e.target.innerText= currentTurn;
    checkWinner()
    toggleTurn()
    
})