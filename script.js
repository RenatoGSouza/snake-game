const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
let box = 32;

const snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
}

const direction = 'right';

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

function iniciarJogo() {
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  switch (direction) {
    case 'right':
      snakeX += box;
    case 'left':
      snakeX -= box;
    case 'up':
      snakeY += box;
    case 'down':
      snakeY -= box;    
    default:
      snake;
  }
}

const jogo = setInterval(iniciarJogo, 100);