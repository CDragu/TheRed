/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../js/matrix.js"/>
var Bezier = (function () {
    function Bezier(pPoints, numberOfTimesToIterate) {
        this.setPoints(pPoints);
        this.createVectorArray();
        while (numberOfTimesToIterate > 0) {
            this.Interpolate();
            numberOfTimesToIterate -= 1;
        }

    }

    Bezier.prototype.setPoints = function (points) {
        this.mPoints = points;
    };
    Bezier.prototype.getPoints = function () {
        return this.mPoints;
    };
    Bezier.prototype.getPoint = function (n, m) {
        return new Vector(this.mPoints[n], this.mPoints[m], 1);
    };
    Bezier.prototype.createVectorArray = function () {
        var vectorArray = [], i = 0;
        for (i = 0; i < this.mPoints.length; i += 2) {
            vectorArray.push(this.getPoint(i, i + 1));
        }
        this.vPoints = vectorArray;
    };

    Bezier.prototype.getVectorArray = function () {
        return this.vPoints;
    };

    Bezier.prototype.Interpolate = function () {
        var i = 0, newPoints = [];
        newPoints.push(this.vPoints[0]);
        while (i < this.vPoints.length - 1) {
            newPoints.push(this.vPoints[i].interpolate(this.vPoints[i + 1], 0.5));
            i += 1;
        }
        newPoints.push(this.vPoints[this.vPoints.length - 1]);
        this.vPoints = newPoints;
        //i = newPoints.length-1;
        //while (i > 0) {
        //    this.vPoints.push(newPoints[i])
        //    i-=1;
        //}
    };
    Bezier.prototype.Update = function (deltaTime) {
        var time;
        time = deltaTime;
    };
    Bezier.prototype.draw = function (pContext) {
        var i = this.vPoints.length - 1;
        pContext.beginPath();
        for (i = 0; i < this.vPoints.length; i += 1) {
            pContext.lineTo(this.vPoints[i].getX(), this.vPoints[i].getY());
        }
        //while (i >= 0) {
        //    pContext.lineTo(this.vPoints[i].getX(), this.vPoints[i].getY());
        //    i -= 1;
        //}
        //pContext.closePath();
        pContext.stroke();
        //pContext.restore();
    };
    return Bezier;
}());