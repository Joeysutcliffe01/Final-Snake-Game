import { onSnake, expandSnake } from '../js/snake.js'
import { randomGridPosition } from '../js/grid.js'

let food = getRandomPosition()
const EXPANSION_RATE = 1;

const scoreDisplay = document.getElementById('score')
export let score = 0

export function update(){
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomPosition()

        score++
        scoreDisplay.textContent = score
    }
        
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}
//    console.log('draw snake');

function getRandomPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition;

}
