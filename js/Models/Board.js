(function(){

    Breakout.models.Board= function(){
        this.width = Breakout.Config.board_width;
        this.height = Breakout.Config.board_height;
        this.x = (Breakout.Config.canvas_width + this.width)/2 - this.width;
        this.y = Breakout.Config.canvas_height - this.height;
        this.moving = 0;
        this.speed= 4;
    };

    Breakout.models.Board.prototype.draw=function(){
        Breakout.Config.canvas.fillStyle = "white";
        Breakout.Config.canvas.strokeStyle = "black";
        Breakout.Config.canvas.fillRect(this.x, this.y, this.width, this.height);
        Breakout.Config.canvas.strokeRect(this.x, this.y, this.width, this.height);
    };

    Breakout.models.Board.prototype.setX=function(x){
        if (x < 0) this.x = 0;
        else if (x + this.width > Breakout.Config.canvas_width) this.x = Breakout.Config.canvas_width - this.width;
        else this.x = x;
    };

    Breakout.models.Board.prototype.update = function(){
        switch (this.moving) {
            case 1:
                this.setX(this.x - this.speed);
                break;
            case 2:
                this.setX(this.x + this.speed);
                break;
        }
    };

})();
