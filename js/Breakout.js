
var Breakout = (function(){

    var blocklist = [];
    var board,ball;

    var init = function () {
        //blocks
        var z = 0;
        for (var i = 0; i < Breakout.Config.canvas_width; i += Breakout.Config.block_width) {
            for (var j = 0; j < Breakout.Config.canvas_height / 2; j +=  Breakout.Config.block_height) {
                blocklist[z] = new Breakout.models.Block(i, j, Breakout.Config.colors[Breakout.utils.MathUtil.getRandomInt(0, 10)]);
                z++;
            }
        }
        //board
        board = new Breakout.models.Board();
        //ball
        ball = new Breakout.models.Ball(Breakout.Config.canvas_width / 2 - Breakout.Config.ball_radius, Breakout.Config.canvas_height - board.height - 2 * Breakout.Config.ball_radius);

        //key controls
        var KeyDown = function (ev) {
            var key = ev.keyCode;
            if (key == 37) { //left
                board.moving = 1;
            }
            else if (key == 39) { //right
                board.moving = 2;
            }
        };

        var KeyUp = function () {
            board.moving = 0;
        };

        document.onkeyup = KeyUp;
        document.onkeydown = KeyDown;
    };

    var drawAll = function () {
        //background
        Breakout.Config.canvas.fillStyle = "lavender";
        Breakout.Config.canvas.fillRect(0, 0, Breakout.Config.canvas_width, Breakout.Config.canvas_height);
        //blocks
        for (var z = 0; z < blocklist.length; z++) {
            if (blocklist[z].display == true) {
                blocklist[z].draw();
            }
        }
        //board
        board.draw();
        //ball
        ball.draw();
    };

    var update = function () {
        // update the position of the ball
        ball.update();

        // update the position of the board
        board.update();

        // check for collision between ball and blocks
        // update ball velocity
        // make the block disappear
        for (var i = 0; i < blocklist.length; i++) {
            if (blocklist[i].display) {
                if (Breakout.utils.MathUtil.detectCollision(blocklist[i], ball)) {
                    blocklist[i].display = false;
                    ball.angle = 360 - ball.angle;
                }
            }
        }

        // check for collision between ball and board
        // update the ball velocity based on where it hit the board
        var extra_angle = 30;
        if (Breakout.utils.MathUtil.detectCollision(ball, board)) {
            var dx = ball.x - board.x;
            var formula = (2 * extra_angle * dx) / board.width;

            ball.angle = (360 - ball.angle) - (formula - extra_angle);

        }
        drawAll();
    };

    var gameLoop = function () {
        update();
        requestAnimationFrame(gameLoop);
    };


    return {
        utils : {},
        models : {},
        init:init,
        gameLoop:gameLoop
    }

})();
