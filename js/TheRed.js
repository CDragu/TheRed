/*global window, document, alert, Vector, House, Matrix, Tree,
Car, Weel, Node, Bezier, TheDeep, Ocean, JustSea, YellowCircle,
TheDeep, TiltedFence, Waves, Loop, setTimeout, update, draw,
requestAnimationFrame*/

// Variable Definition: 
//LMJ = LEFT + MIDDLE + JOINT
//LLJ = LEFT + LOWER + JOINT
//RMJ = RIGHT + MIDDLE + JOINT
//RMJ = RIGHT + LOWER + JOINT
var TheRed = (function () {
    function TheRed(LMJ, LLJ, RMJ, RLJ) {
        this.setLMJ(LMJ);
        this.setLLJ(LLJ);
        this.setRMJ(RMJ);
        this.setRLJ(RLJ);
    }
    TheRed.prototype.getLMJ = function () {
        return this.LMJ;
    };

    TheRed.prototype.getLLJ = function () {
        return this.LLJ;
    };

    TheRed.prototype.getRMJ = function () {
        return this.RMJ;
    };

    TheRed.prototype.getRLJ = function () {
        return this.RLJ;
    };

    TheRed.prototype.setLMJ = function (pV) {
        this.LMJ = pV;
    };

    TheRed.prototype.setLLJ = function (pV) {
        this.LLJ = pV;
    };

    TheRed.prototype.setRMJ = function (pV) {
        this.RMJ = pV;
    };

    TheRed.prototype.setRLJ = function (pV) {
        this.RLJ = pV;
    };

    TheRed.prototype.draw = function (pContext, pMatrix) {
        var context, matrix, Curve, Curve2, Curve3,
            Curve4, PointArray, Curve5, i, Curve6;
        context = pContext;
        matrix = pMatrix;
        //body
        context.strokeStyle = '#FF3B00';
        context.fillStyle = '#E81F0C';
        context.lineWidth = 1;
        context.beginPath();

        PointArray = [0, -30, 20, -30, 50, -30, 50, 0];
        Curve = new Bezier(PointArray, 10);
        Curve.draw(context);
        context.fill();
        PointArray = [50, 0, 40, 30, 10, 30, 0, 30];
        Curve2 = new Bezier(PointArray, 10);
        Curve2.draw(context);
        context.fill();
        PointArray = [0, 30, -30, 30, -50, 30, -50, 0];
        Curve3 = new Bezier(PointArray, 10);
        Curve3.draw(context);
        context.fill();
        PointArray = [-50, 0, -50, -30, -50, -30, 0, -30];
        Curve4 = new Bezier(PointArray, 40);
        Curve4.draw(context);

        context.moveTo(0, -30.5);
        context.lineTo(50.5, 0);
        context.lineTo(0, 30.5);
        context.lineTo(-50.5, 0);
        context.fill();
        //context.stroke();

        //right eye
        context.strokeStyle = '#FF3B00';
        context.fillStyle = '#FF0D3E';
        context.lineWidth = 1;
        context.beginPath();

        context.moveTo(10, -10);
        context.lineTo(25, -20);
        context.lineTo(23, -22);
        context.lineTo(8, -12);
        context.lineTo(10, -10);

        context.fill();
        context.stroke();

        PointArray = [23, -18, 23, -0, 15, -0, 13, -12];
        Curve5 = new Bezier(PointArray, 40);
        Curve5.draw(context);
        context.fillStyle = '#ffffff';
        context.fill();
        context.stroke();

        context.strokeStyle = '#000000';
        context.fillStyle = '#000000';
        context.beginPath();
        context.moveTo(19, -15);
        context.lineTo(17, -13);
        context.stroke();

        //left eye
        context.strokeStyle = '#FF3B00';
        context.fillStyle = '#FF0D3E';
        context.lineWidth = 1;
        context.beginPath();

        context.moveTo(-10, -10);
        context.lineTo(-25, -20);
        context.lineTo(-23, -22);
        context.lineTo(-8, -12);
        context.lineTo(-10, -10);

        context.fill();
        context.stroke();

        PointArray = [-23, -18, -23, -0, -15, -0, -13, -12];
        Curve5 = new Bezier(PointArray, 40);
        Curve5.draw(context);
        context.fillStyle = '#ffffff';
        context.fill();
        context.stroke();

        context.strokeStyle = '#000000';
        context.fillStyle = '#000000';
        context.beginPath();
        context.moveTo(-19, -15);
        context.lineTo(-17, -13);
        context.stroke();

        //Month
        context.strokeStyle = '#FF3B00';
        context.fillStyle = '#4A0804';
        context.lineWidth = 1;
        context.beginPath();

        context.moveTo(-30, 10);
        context.lineTo(30, 10);
        context.lineTo(30, 15.5);
        context.stroke();
        context.fill();
        PointArray = [30, 15, 0, 30, 0, 30, -30, 15];
        Curve6 = new Bezier(PointArray, 40);
        Curve6.draw(context);

        context.lineTo(-30, 10);

        context.stroke();
        context.fill();

        context.strokeStyle = '#FFFFFF';
        context.fillStyle = '#FFFFFF';
        context.lineWidth = 0.1;
        context.beginPath();

        context.moveTo(-30, 10);
        context.lineTo(30, 10);

        for (i = 30; i > -30; i = i - 2) {
            context.moveTo(i, 10);
            context.lineTo(i - 1, 13);
            context.lineTo(i - 2, 10);
        }
        context.stroke();
        context.fill();

        //Left Leg
        context.strokeStyle = '#FF3B00';
        context.fillStyle = '#E81F0C';
        context.lineWidth = 1;
        context.beginPath();

        context.moveTo(30, 20);
        context.lineTo(40, 15);
        context.lineTo(this.LMJ.getX(), this.LMJ.getY());   // 50, 60
        context.lineTo(30, 20);

        context.moveTo(this.LMJ.getX() - 5, this.LMJ.getY());
        context.lineTo(this.LMJ.getX() + 5, this.LMJ.getY());
        context.lineTo(this.LLJ.getX(), this.LLJ.getY());//50, 110
        context.lineTo(this.LMJ.getX() - 5, this.LMJ.getY());

        context.stroke();
        context.fill();

        //Rifht Leg
        context.strokeStyle = '#FF3B00';
        context.fillStyle = '#E81F0C';
        context.lineWidth = 1;
        context.beginPath();

        context.moveTo(-30, 25);
        context.lineTo(-40, 20);
        context.lineTo(this.RMJ.getX(), this.RMJ.getY());   // 50, 60
        context.lineTo(-30, 25);

        context.moveTo(this.RMJ.getX() + 5, this.RMJ.getY());
        context.lineTo(this.RMJ.getX() - 5, this.RMJ.getY());
        context.lineTo(this.RLJ.getX(), this.RLJ.getY());//50, 110
        context.lineTo(this.RMJ.getX() + 5, this.RMJ.getY());

        context.stroke();
        context.fill();
    };

    return TheRed;
}());