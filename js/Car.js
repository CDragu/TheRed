/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../js/matrix.js"/>
/// <reference path="../js/Weel.js"/>
var Car = (function () {
    function Car() {
    }
    Car.prototype.getMatrix = function () {
        return this.mMatirx;
    };
    Car.prototype.setMatrix = function (pMatrix) {
        this.mMatirx = pMatrix;
    };
    Car.prototype.getScale = function () {
        return this.mScale;
    };
    Car.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    Car.prototype.getRotation = function () {
        return this.mRotation;
    };
    Car.prototype.setRotation = function (pRotation) {
        this.mRotation = pRotation;
    };
    Car.prototype.AddChild = function (obj) {
        this.mChildren.push(obj);
    };
    Car.prototype.GetNumberOfChildrens = function () {
        return this.mChildren.length;
    };
    Car.prototype.GetChaild = function (n) {
        return this.mChildren[n];
    };

    Car.prototype.DrawRectangle = function (pContext) {

        pContext.lineWidth = 5;
        pContext.fillStyle = '#00ffff';

        pContext.beginPath();
        pContext.moveTo(0, 10);
        pContext.lineTo(40, 10);
        pContext.lineTo(40, -10);
        pContext.lineTo(0, -10);
        pContext.lineTo(0, 10);
        pContext.fill();
        pContext.stroke();
    };

    Car.prototype.draw = function (pContext, MasterMatrix) {
        var matrix;
        pContext.save();
        matrix = MasterMatrix;
        this.DrawRectangle(pContext);

        pContext.restore();
    };

    return Car;
}());