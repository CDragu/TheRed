/*global window, document, alert, Vector, House, Matrix, Tree,
Car, Weel, Node, Bezier, TheDeep, Ocean, JustSea, YellowCircle,
TheDeep, TiltedFence, Waves, Loop, setTimeout, update, draw,
requestAnimationFrame*/
var Ocean = (function () {
    function Ocean() {
    }

    Ocean.prototype.draw = function (pContext, pMatrix) {
        var matrix;
        matrix = pMatrix;

        //pContext.strokeStyle = '#ffffff';
        pContext.fillStyle = '#3994FF';
        pContext.lineWidth = 1;
        pContext.beginPath();
        pContext.moveTo(-2000, 0);
        pContext.lineTo(2000, 0);
        pContext.lineTo(2000, 2000);
        //pContext.lineTo(-2000, 2000);
        //pContext.lineTo(2000, 0);
        pContext.fill();
        pContext.stroke();
    };
    return Ocean;
}());

var JustSea = (function () {
    function JustSea() {
    }

    JustSea.prototype.draw = function (pContext, pMatrix) {
        var matrix;
        matrix = pMatrix;
        //pContext.strokeStyle = '#ffffff';
        pContext.fillStyle = '#3994FF';
        pContext.lineWidth = 1;
        pContext.beginPath();
        pContext.moveTo(-2000, 0);
        pContext.lineTo(2000, 0);
        pContext.lineTo(2000, 2000);
        //pContext.lineTo(-2000, 2000);
        //pContext.lineTo(2000, 0);
        pContext.fill();
        //pContext.stroke();
    };
    return JustSea;
}());

var Waves = (function () {
    function Waves() {
    }

    Waves.prototype.draw = function (pContext, pMatrix) {
        var matrix, PointArray, Curve, Curve2;
        matrix = pMatrix;
        pContext.strokeStyle = '#086AE8';
        pContext.fillStyle = '#3994FF';
        pContext.lineWidth = 1;
        pContext.beginPath();
        PointArray = [-40, -10, -20, 10, 40, -40, 80, -15];
        Curve = new Bezier(PointArray, 10);
        Curve.draw(pContext);

        PointArray = [0, -12, 30, -100, 100, -100, 70, -40];
        Curve2 = new Bezier(PointArray, 40);
        Curve2.draw(pContext);

        //pContext.fill();
        pContext.stroke();
    };
    return Waves;
}());

var YellowCircle = (function () {
    function YellowCircle() {
    }

    YellowCircle.prototype.draw = function (pContext, pMatrix) {
        var matrix;
        matrix = pMatrix;
        pContext.strokeStyle = '#E8A300';
        pContext.fillStyle = '#FFFC03';
        pContext.lineWidth = 1;
        pContext.beginPath();
        pContext.arc(0, 0, 100, 0, 2 * Math.PI, false);
        pContext.fill();
        pContext.stroke();
    };
    return YellowCircle;
}());

var TiltedFence = (function () {
    function TiltedFence() {
    }

    TiltedFence.prototype.draw = function (pContext, pMatrix) {
        var matrix;
        matrix = pMatrix;
        pContext.strokeStyle = '#E88C15';
        pContext.fillStyle = '#E85D15';
        pContext.lineWidth = 1;
        pContext.beginPath();
        pContext.lineTo(30, -40);
        pContext.lineTo(500, -40);
        pContext.lineTo(500, -45);
        pContext.lineTo(30, -45);
        pContext.lineTo(0, -10);
        pContext.lineTo(0, 0);

        pContext.moveTo(10, 0);
        pContext.lineTo(10, -14);
        pContext.lineTo(14, -20);
        pContext.lineTo(14, 0);
        pContext.lineTo(10, 0);

        pContext.moveTo(20, 0);
        pContext.lineTo(20, -25);
        pContext.lineTo(24, -31);
        pContext.lineTo(24, 0);
        pContext.lineTo(20, 0);

        pContext.moveTo(30, 0);
        pContext.lineTo(30, -40);
        pContext.lineTo(34, -40);
        pContext.lineTo(34, 0);
        pContext.lineTo(30, 0);

        pContext.moveTo(40, 0);
        pContext.lineTo(40, -40);
        pContext.lineTo(44, -40);
        pContext.lineTo(44, 0);
        pContext.lineTo(40, 0);

        pContext.moveTo(50, 0);
        pContext.lineTo(50, -40);
        pContext.lineTo(54, -40);
        pContext.lineTo(54, 0);
        pContext.lineTo(50, 0);

        pContext.moveTo(60, 0);
        pContext.lineTo(60, -40);
        pContext.lineTo(64, -40);
        pContext.lineTo(64, 0);
        pContext.lineTo(60, 0);

        pContext.moveTo(70, 0);
        pContext.lineTo(70, -40);
        pContext.lineTo(74, -40);
        pContext.lineTo(74, 0);
        pContext.lineTo(70, 0);

        pContext.moveTo(80, 0);
        pContext.lineTo(80, -40);
        pContext.lineTo(84, -40);
        pContext.lineTo(84, 0);
        pContext.lineTo(80, 0);

        pContext.moveTo(90, 0);
        pContext.lineTo(90, -40);
        pContext.lineTo(94, -40);
        pContext.lineTo(94, 0);
        pContext.lineTo(90, 0);

        pContext.moveTo(100, 0);
        pContext.lineTo(100, -40);
        pContext.lineTo(104, -40);
        pContext.lineTo(104, 0);
        pContext.lineTo(100, 0);

        pContext.moveTo(110, 0);
        pContext.lineTo(110, -40);
        pContext.lineTo(114, -40);
        pContext.lineTo(114, 0);
        pContext.lineTo(110, 0);

        pContext.moveTo(120, 0);
        pContext.lineTo(120, -40);
        pContext.lineTo(124, -40);
        pContext.lineTo(124, 0);
        pContext.lineTo(120, 0);

        pContext.moveTo(130, 0);
        pContext.lineTo(130, -40);
        pContext.lineTo(134, -40);
        pContext.lineTo(134, 0);
        pContext.lineTo(130, 0);

        pContext.moveTo(140, 0);
        pContext.lineTo(140, -40);
        pContext.lineTo(144, -40);
        pContext.lineTo(144, 0);
        pContext.lineTo(140, 0);

        pContext.moveTo(150, 0);
        pContext.lineTo(150, -40);
        pContext.lineTo(154, -40);
        pContext.lineTo(154, 0);
        pContext.lineTo(150, 0);

        pContext.moveTo(160, 0);
        pContext.lineTo(160, -40);
        pContext.lineTo(164, -40);
        pContext.lineTo(164, 0);
        pContext.lineTo(160, 0);

        pContext.moveTo(170, 0);
        pContext.lineTo(170, -40);
        pContext.lineTo(174, -40);
        pContext.lineTo(174, 0);
        pContext.lineTo(170, 0);

        pContext.moveTo(180, 0);
        pContext.lineTo(180, -40);
        pContext.lineTo(184, -40);
        pContext.lineTo(184, 0);
        pContext.lineTo(180, 0);

        pContext.moveTo(190, 0);
        pContext.lineTo(190, -40);
        pContext.lineTo(194, -40);
        pContext.lineTo(194, 0);
        pContext.lineTo(190, 0);

        pContext.moveTo(200, 0);
        pContext.lineTo(200, -40);
        pContext.lineTo(204, -40);
        pContext.lineTo(204, 0);
        pContext.lineTo(200, 0);

        pContext.moveTo(210, 0);
        pContext.lineTo(210, -40);
        pContext.lineTo(214, -40);
        pContext.lineTo(214, 0);
        pContext.lineTo(210, 0);

        pContext.moveTo(220, 0);
        pContext.lineTo(220, -40);
        pContext.lineTo(224, -40);
        pContext.lineTo(224, 0);
        pContext.lineTo(220, 0);

        pContext.moveTo(230, 0);
        pContext.lineTo(230, -40);
        pContext.lineTo(234, -40);
        pContext.lineTo(234, 0);
        pContext.lineTo(230, 0);

        pContext.moveTo(240, 0);
        pContext.lineTo(240, -40);
        pContext.lineTo(244, -40);
        pContext.lineTo(244, 0);
        pContext.lineTo(240, 0);

        pContext.moveTo(250, 0);
        pContext.lineTo(250, -40);
        pContext.lineTo(254, -40);
        pContext.lineTo(254, 0);
        pContext.lineTo(250, 0);

        pContext.moveTo(260, 0);
        pContext.lineTo(260, -40);
        pContext.lineTo(264, -40);
        pContext.lineTo(264, 0);
        pContext.lineTo(260, 0);

        pContext.moveTo(270, 0);
        pContext.lineTo(270, -40);
        pContext.lineTo(274, -40);
        pContext.lineTo(274, 0);
        pContext.lineTo(270, 0);

        pContext.moveTo(280, 0);
        pContext.lineTo(280, -40);
        pContext.lineTo(284, -40);
        pContext.lineTo(284, 0);
        pContext.lineTo(280, 0);

        pContext.moveTo(290, 0);
        pContext.lineTo(290, -40);
        pContext.lineTo(294, -40);
        pContext.lineTo(294, 0);
        pContext.lineTo(290, 0);

        pContext.moveTo(300, 0);
        pContext.lineTo(300, -40);
        pContext.lineTo(304, -40);
        pContext.lineTo(304, 0);
        pContext.lineTo(300, 0);

        pContext.moveTo(310, 0);
        pContext.lineTo(310, -40);
        pContext.lineTo(314, -40);
        pContext.lineTo(314, 0);
        pContext.lineTo(310, 0);

        pContext.moveTo(320, 0);
        pContext.lineTo(320, -40);
        pContext.lineTo(324, -40);
        pContext.lineTo(324, 0);
        pContext.lineTo(320, 0);

        pContext.moveTo(330, 0);
        pContext.lineTo(330, -40);
        pContext.lineTo(334, -40);
        pContext.lineTo(334, 0);
        pContext.lineTo(330, 0);

        pContext.moveTo(340, 0);
        pContext.lineTo(340, -40);
        pContext.lineTo(344, -40);
        pContext.lineTo(344, 0);
        pContext.lineTo(340, 0);

        pContext.fill();
        pContext.stroke();
    };
    return TiltedFence;
}());