/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../js/matrix.js"/>
var Node = (function () {
    function Node(pMatrix) {

        this.mChildren = [];
        this.setMatrix(pMatrix);

    }
    Node.prototype.getMatrix = function () {
        return this.mMatirx;
    };
    Node.prototype.setMatrix = function (pMatrix) {
        this.mMatirx = pMatrix;
    };
    Node.prototype.getScale = function () {
        return this.mScale;
    };
    Node.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    Node.prototype.getRotation = function () {
        return this.mRotation;
    };
    Node.prototype.setRotation = function (pRotation) {
        this.mRotation = pRotation;
    };
    Node.prototype.AddChild = function (obj) {
        this.mChildren.push(obj);
    };
    Node.prototype.GetNumberOfChildrens = function () {
        return this.mChildren.length;
    };
    Node.prototype.GetChaild = function (n) {
        return this.mChildren[n];
    };

    Node.prototype.draw = function (pContext, pMatrix) {
        var currentTransform, i;
        pContext.save();

        currentTransform = Matrix.createIdentity();
        currentTransform = pMatrix.multiply(this.getMatrix());

        currentTransform.setTransform(pContext);

        for (i = 0; i < this.GetNumberOfChildrens(); i += 1) {
            pContext.save();
            this.GetChaild(i).draw(pContext, currentTransform);
            pContext.restore();
        }
        pContext.restore();
    };

    return Node;
}());