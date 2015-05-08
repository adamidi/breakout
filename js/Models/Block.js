(function(){

    "use strict";

    Breakout.models.Block = function (x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = Breakout.Config.block_width;
        this.height = Breakout.Config.block_height;
        this.display = true;
    };

    Breakout.models.Block.prototype.draw = function () {
        Breakout.Config.canvas.fillStyle = this.color;
        Breakout.Config.canvas.strokeStyle = "black";
        Breakout.Config.canvas.fillRect(this.x, this.y, this.width, this.height);
        Breakout.Config.canvas.strokeRect(this.x, this.y, this.width, this.height);
    };

})();