Breakout.Config = (function(){
    var a = document.getElementById("canvas");
    var canvas = a.getContext("2d");
    var canvas_width = a.getAttribute("width");
    var canvas_height = a.getAttribute("height");

    return {
        canvas:canvas,
        canvas_width : canvas_width*1,
        canvas_height : canvas_height*1,

        block_width : 30,
        block_height : 10,

        ball_radius:5,

        board_width:70,
        board_height:10,

        colors : ["deeppink", "dodgerblue", "greenyellow", "gold", "orangered", "seegreen", "slategray", "purple", "peru", "lightcoral"]

    };
})();