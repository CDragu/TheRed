/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../js/matrix.js"/>
var Weel = (function () {
    function Weel() {
    }
    Weel.prototype.getMatrix = function () {
        return this.mMatirx;
    };
    Weel.prototype.setMatrix = function (pMatrix) {
        this.mMatirx = pMatrix;
    };
    Weel.prototype.getScale = function () {
        return this.mScale;
    };
    Weel.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    Weel.prototype.getRotation = function () {
        return this.mRotation;
    };
    Weel.prototype.setRotation = function (pRotation) {
        this.mRotation = pRotation;
    };
    Weel.prototype.AddChild = function (obj) {
        this.mChildren.push(obj);
    };
    Weel.prototype.GetNumberOfChildrens = function () {
        return this.mChildren.length;
    };
    Weel.prototype.GetChaild = function (n) {
        return this.mChildren[n];
    };

    Weel.prototype.DrawCircle = function (pContext) {
        pContext.beginPath();
        pContext.arc(-0, -0, 10, 0, 2 * Math.PI, false);
        pContext.fillStyle = 'green';
        pContext.fill();
        pContext.lineWidth = 5;
        pContext.strokeStyle = '#0000ff';
        pContext.stroke();
    };

    Weel.prototype.draw = function (pContext, MasterMatrix) {
        var matrix;
        matrix = MasterMatrix;
        pContext.save();

        this.DrawCircle(pContext);

        pContext.restore();
    };

    return Weel;
}());