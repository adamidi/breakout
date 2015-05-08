(function(){

    Breakout.models.Ball = function (x, y) {
        this.x = x;
        this.y = y;
        this.radius = Breakout.Config.ball_radius;
        this.width = this.height = 2 * this.radius;
        this.speed = 5;
        this.angle = 45;
    };

    Breakout.models.Ball.prototype.draw = function () {
        Breakout.Config.canvas.fillStyle = "red";
        Breakout.Config.canvas.beginPath();
        Breakout.Config.canvas.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
        Breakout.Config.canvas.fill();
    };

    Breakout.models.Ball.prototype.update = function(){
        //update position
        var move_x = this.speed * Math.cos(Breakout.utils.MathUtil.toRadians(this.angle));
        var move_y = this.speed * Math.sin(Breakout.utils.MathUtil.toRadians(this.angle));
        this.x += move_x;
        this.y -= move_y;

        //make sure the ball stays inside canvas
        if (this.x < 0 || this.x + this.radius > Breakout.Config.canvas_width) {
            this.angle = 180 - this.angle;
        }
        else if (this.y + this.radius < 0) {
            this.angle = 360 - this.angle;
        }
        else if (this.y + this.radius > Breakout.Config.canvas_height) {
            alert("you lose")
        }
    }

})();
