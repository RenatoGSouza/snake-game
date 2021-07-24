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

document.addEventListener('keydown', update);

function update ({keyCode}) {
  console.log(keyCode);
  if(keyCode === 37 && direction !== 'right') direction = 'left';
  if(keyCode === 38 && direction !== 'down') direction = 'up';
  if(keyCode === 39 && direction !== 'left') direction = 'right';
  if(keyCode === 40 && direction !== 'up') direction = 'down';
}

function iniciarJogo() {

  if(snake[0].x > 15 * box && direction === 'right') snake[0].x = 0;
  if(snake[0].x < 0 && direction === 'left') snake[0].x = 16 * box;
  if(snake[0].y > 15 * box && direction === 'right') snake[0].y = 0;
  if(snake[0].y < 0 && direction === 'left') snake[0].y = 16 * box;


  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(direction === 'right') snakeX += box;
  if(direction === 'left') snakeX -= box;
  if(direction === 'up') snakeY -= box;
  if(direction === 'down') snakeY += box;

  snake.pop();

  const newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

const jogo = setInterval(iniciarJogo, 100);