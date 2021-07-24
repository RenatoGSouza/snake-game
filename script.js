const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
let box = 32;
const snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

function criarBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    snake.forEach((snake) => {
        context.fillStyle = 'green'
        context.fillRect(snake.x, snake.y, box, box);
    });
}

criarBG();
criarCobrinha();