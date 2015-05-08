Breakout.utils.MathUtil = (function(){

    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    var toRadians = function (angle) {
        return angle * (Math.PI / 180);
    };

    var detectCollision = function (obj1, obj2) {
        return (obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.height + obj1.y > obj2.y) ;
    };

    return {
        getRandomInt:getRandomInt,
        toRadians:toRadians,
        detectCollision:detectCollision
    }
})();