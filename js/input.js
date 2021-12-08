
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

const btnUpOne = document.getElementById('btn-up-one') 
const btnUpTwo = document.getElementById('btn-up-two')

const btnLeftOne = document.getElementById('btn-left-one') 
const btnLeftTwo = document.getElementById('btn-left-two') 

const btnRightOne = document.getElementById('btn-right-one') 
const btnRightTwo = document.getElementById('btn-right-two') 

const btnDownOne = document.getElementById('btn-down-one')
const btnDownTwo = document.getElementById('btn-down-two')

btnUpOne.addEventListener('click', goingUp)
btnUpTwo.addEventListener('click', goingUp)

btnRightOne.addEventListener('click', goingRight)
btnRightTwo.addEventListener('click', goingRight)

btnLeftOne.addEventListener('click', goingLeft)
btnLeftTwo.addEventListener('click', goingLeft)

btnDownOne.addEventListener('click', goingDown)
btnDownTwo.addEventListener('click', goingDown)

//BUTTON MOVEMENTS
//UP
function goingUp(e){
    
  if(lastInputDirection.y !== 0)
  return;

  inputDirection = { x: 0, y: -1 }
  console.log('up');
}

//DOWN
function goingDown(e){

  if(lastInputDirection.y !== 0)
  return;

  inputDirection = { x: 0, y: 1 }
  console.log('down');
  
}

//RIGHT
function goingRight(e){

  if(lastInputDirection.x !== 0)
  return;

  inputDirection = { x: 1, y: 0 }
  console.log('right');   
}

//left
function goingLeft(e){

  if(lastInputDirection.x !== 0)
  return;

  inputDirection = { x: -1, y: 0 }
  console.log('left');
}
  

window.addEventListener('keydown', e => {

  switch (e.key) {

    case 'ArrowUp':
    // case btnUp:  
      console.log('hi');
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break

    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break

    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break

    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
      
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}