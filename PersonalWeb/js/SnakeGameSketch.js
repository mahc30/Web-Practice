var unit;
var canvas_width;
var canvas_height;

unit = document.getElementById("snake-sketch");
let props = window.getComputedStyle(unit, null);
canvas_width = parseInt(props.width);
console.log(canvas_width);
canvas_height = parseInt(props.height);
console.log(canvas_height);


//Game Logic Here ----------------------------
var sketch = function (p) {
    p.snake;
    p.food = [];
    p.scale = 21;
    p.cols = Math.floor(canvas_width / p.scale) - 1;
    p.rows = Math.floor(canvas_height / p.scale) - 1;

    p.setup = function () {
        p.canvas = p.createCanvas(canvas_width, canvas_height);
        p.canvas.parent('snake-sketch');
        p.snake = new Snake(p, 7 * p.scale, 5 * p.scale, p.scale);
        p.frameRate(10);
    }

    p.draw = function () {
        p.background(0);
        p.snake.show();
        if(p.snake.death() || p.food.length >= 20){
            p.food = [];
        }
        p.snake.update();

        //console.log("x:" + p.snake.x + " y:" + p.snake.y);

        //Handle out of borders
        if (p.snake.x > canvas_width) {
            p.snake.x = 0;
        }

        else if (p.snake.x < 0) {
            p.snake.x = p.cols*p.scale;
        }

        if (p.snake.y >= canvas_height) {
            p.snake.y = 0;
        }

        else if (p.snake.y < 0) {
            p.snake.y = p.rows * p.scale;
        }

        //Handle food drawing and snake eating food
        for (let i = 0; i < p.food.length; i++) {
            p.food[i].show();

            if(p.dist(p.snake.x, p.snake.y, p.food[i].x, p.food[i].y) === 0){
                p.food.splice(i,1);
                //if eats food, snake grows by 1
                p.snake.size += 1;
            }
        }
    }

    //Handle user input to change direction
    p.keyPressed = function () {
        if (p.keyCode === 38 && p.snake.y_vel != 1) {
            p.snake.dir(0, -1);
            // console.log("key up pressed");
        }
        else if (p.keyCode === 39 && p.snake.x_vel != -1) {
            p.snake.dir(1, 0);
            //console.log("key right pressed");
        }
        if (p.keyCode === 40 && p.snake.y_vel != -1) {
            p.snake.dir(0, 1);
            //console.log("key down pressed");
        }
        else if (p.keyCode === 37 && p.snake.x_vel != 1) {
            p.snake.dir(-1, 0);
            //console.log("key left pressed");
        }
    }

    //Handle create Food
    p.createFood = function () {
        p.food.push(new SnakeFood(p, Math.floor(p.random(0, p.cols)) * p.scale,
            Math.floor(p.random(0, p.rows)) * p.scale, p.scale));
    }

    setInterval(() => {
        p.createFood();
    }, 2000);

};

let snake_game = new p5(sketch, document.getElementById('snake-sketch'));