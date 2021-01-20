window.snakeBoard = document.getElementById("snake-board");

let i;
let j;
for (i = 0; i < 2500; i++) {
    const row = document.createElement("div");
    for (j = 0; j < 50; j++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        row.appendChild(square);
    }
    window.snakeBoard.appendChild(row);
}

window.snake = [[10,10]];
window.currDirection = "right"
this.generateApple();
this.drawCurrentPosition();
this.moveSnake();

document.onkeydown = (e) => {
    switch (e.key) {
        case 'ArrowUp':
            window.currDirection = "up";
            break;
        case 'ArrowRight':
            window.currDirection = "right";
            break;
        case 'ArrowDown':
            window.currDirection = "down";
            break;
        case 'ArrowLeft':
            window.currDirection = "left";
            break;
    }
}

function drawCurrentPosition() {
    window.snakeBoard.childNodes.forEach((row, i) => {
        row.childNodes.forEach((square, j) => {
            if (window.snake.some((s) => s[0] == i && s[1] == j)) {
                square.style.backgroundColor = "green";
            } else if (window.apple[0] == i && window.apple[1] == j) {
                square.style.backgroundColor = "red";
            } else {
                square.style.backgroundColor = "white";
            }
        });
    });
}

function moveSnake() {
    let nextPosition = [];
    switch (window.currDirection) {
        case 'up':
            nextPosition = [window.snake[0][0]-1, window.snake[0][1]];
            break;
        case 'down':
            nextPosition = [window.snake[0][0]+1, window.snake[0][1]];
            break;
        case 'left':
            nextPosition = [window.snake[0][0], window.snake[0][1]-1];
            break;
        case 'right':
            nextPosition = [window.snake[0][0], window.snake[0][1]+1];
            break;
    }
    if (nextPosition[0] < 0 || nextPosition[0] >= 50 || nextPosition[1] < 0 || nextPosition[1] >= 50) {
        // snake crashed into wall
    } else if (window.snake.some((s) => s[0] == nextPosition[0] && s[1] == nextPosition[1])) {
        // snake crashed into self
    } else {
        window.snake.unshift(nextPosition);
        if (nextPosition[0] == window.apple[0] && nextPosition[1] == window.apple[1]) {
            this.generateApple();
        } else {
            window.snake.pop();
        }
        this.drawCurrentPosition();
        setTimeout(() => this.moveSnake(), 100 - window.snake.length * 5);
    }
}

function generateApple() {
    j = Math.floor(Math.random() * 50);
    i = Math.floor(Math.random() * 50);
    window.apple = [i,j];
    console
}