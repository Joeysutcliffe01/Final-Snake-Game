
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

const btnUp = document.getElementById('btn-up') 
const btnLeft = document.getElementById('btn-left') 
const btnRight = document.getElementById('btn-right') 
const btnDown = document.getElementById('btn-down')

btnUp.addEventListener('click', goingUp)
btnDown.addEventListener('click', goingDown)
btnRight.addEventListener('click', goingRight)
btnLeft.addEventListener('click', goingLeft)

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