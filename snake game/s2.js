//board
var blocksize=25;
var rows=20;
var cols=20;
var board;
var context;

//snake head
var snakex = blocksize * 5;
var snakeY = blocksize * 5;

//food
var foodX;
var foodY;

window.onload = function(){
    board = document.getElementById('board');
    board.height = rows*blocksize;
    board.width = cols*blocksize;
    context = board.getContext('2d') //for drawing on the board
    
    placeFood();
    update();

}
function update(){
    context.fillStyle = 'block';
    context.fillRect(0,0,board.width, board.height);

    context.fillStyle='lime';
    context.fillRect(snakex,snakeY,blocksize,blocksize);

    context.fillStyle='red';
    context.fillRect(foodX,foodY,blocksize,blocksize);
}

function placeFood(){
    foodX= Math.floor(Math.random() * cols) * blocksize;
    foodY= Math.floor(Math.random() * rows) * blocksize;

}