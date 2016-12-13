/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../js/matrix.js"/>
var Tree = (function () {
    function Tree(pMatrix, pScale, protation) {
        this.setMatrix(pMatrix);
        this.setScale(pScale);
        this.setRotation(protation);

    }
    Tree.prototype.getPosition = function () {
        return this.mPosition;
    };
    Tree.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };
    Tree.prototype.getMatrix = function () {
        return this.mMatirx;
    };
    Tree.prototype.setMatrix = function (pMatrix) {
        this.mMatirx = pMatrix;
    };
    Tree.prototype.getScale = function () {
        return this.mScale;
    };
    Tree.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    Tree.prototype.getRotation = function () {
        return this.mRotation;
    };
    Tree.prototype.setRotation = function (pRotation) {
        this.mRotation = pRotation;
    };

    Tree.prototype.DrawCircle = function (pMatrix, pContext) {
        var matrix;
        matrix = pMatrix;
        pContext.beginPath();
        pContext.arc(0, 0, 100, 0, 2 * Math.PI, false);
        pContext.fillStyle = 'green';
        pContext.fill();
        pContext.lineWidth = 5;
        pContext.strokeStyle = '#0000ff';
        pContext.stroke();
    };

    Tree.prototype.DrawRectangle = function (pMatrix, pContext) {
        var matrix;
        matrix = pMatrix;
        pContext.beginPath();

        pContext.lineWidth = 5;
        pContext.fillStyle = '#00ffff';

        pContext.moveTo(10, 0);
        pContext.lineTo(10, +200);
        pContext.lineTo(-10, +200);
        pContext.lineTo(-10, 0);
        pContext.fill();
        pContext.stroke();
    };

    Tree.prototype.draw = function (pContext) {
        var transform;
        pContext.save();

        transform = this.getMatrix().multiply(this.getRotation());
        transform.setTransform(pContext);
        this.setMatrix(transform);

        transform = this.getMatrix().multiply(this.getScale());
        transform.setTransform(pContext);
        this.setMatrix(transform);

        this.DrawRectangle(this.getMatrix(), pContext);

        this.DrawCircle(this.getMatrix(), pContext);

        pContext.restore();
    };

    return Tree;
}());