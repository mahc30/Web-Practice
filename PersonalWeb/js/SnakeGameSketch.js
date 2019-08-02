
    var unit;
    var canvas_width;
    var canvas_height;

    unit = document.getElementById("snake-sketch");
    let props = window.getComputedStyle(unit, null);
    canvas_width = parseInt(props.width);
    console.log(canvas_width);
    canvas_height = parseInt(props.height);
    console.log(canvas_height);


    /*Game Logic Here ----------------------------



    ---------------------------------------------*/
    var sketch = function (p) {
        p.setup = function () {
            p.canvas = p.createCanvas(canvas_width, canvas_height);
            p.canvas.parent('snake-sketch');            
        }

        p.draw = function() {
            p.background(0);
            p.stroke(255, 0, 0);
        }
    };


    let snake_game = new p5(sketch, document.getElementById('snake-sketch'));