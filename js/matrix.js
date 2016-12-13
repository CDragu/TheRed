/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../Scripts/jasmine.js"/>
var Matrix = (function () {
    function Matrix(p1X, p2X, p3X, p1Y, p2Y, p3Y, p1Z, p2Z, p3Z) {
        this.items = [[p1X, p2X, p3X], [p1Y, p2Y, p3Y], [p1Z, p2Z, p3Z]];
    }
    Matrix.prototype.items = [[], [], []];

    Matrix.prototype.getElement = function (i, j) {
        return this.items[i][j];
    };
    Matrix.createIdentity = function () {
        return new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
    };
    Matrix.createTranslation = function (pV) {
        return new Matrix(1, 0, pV.getX(), 0, 1, pV.getY(), 0, 0, 1);
    };
    Matrix.createScale = function (pV) {
        return new Matrix(pV.getX(), 0, 0, 0, pV.getY(), 0, 0, 0, 1);
    };
    Matrix.createRotation = function (p) {
        return new Matrix(Math.cos(p), -(Math.sin(p)), 0, Math.sin(p),
            Math.cos(p), 0, 0, 0, 1);
    };
    Matrix.prototype.multiply = function (pM) {
        var aM = Matrix.createIdentity();
        aM.items[0][0] = this.items[0][0] * pM.items[0][0] +
            this.items[0][1] * pM.items[1][0] +
            this.items[0][2] * pM.items[2][0];
        aM.items[0][1] = this.items[0][0] * pM.items[0][1] +
            this.items[0][1] * pM.items[1][1] +
            this.items[0][2] * pM.items[2][1];
        aM.items[0][2] = this.items[0][0] * pM.items[0][2] +
            this.items[0][1] * pM.items[1][2] +
            this.items[0][2] * pM.items[2][2];

        aM.items[1][0] = this.items[1][0] * pM.items[0][0] +
            this.items[1][1] * pM.items[1][0] +
            this.items[1][2] * pM.items[2][0];
        aM.items[1][1] = this.items[1][0] * pM.items[0][1] +
            this.items[1][1] * pM.items[1][1] +
            this.items[1][2] * pM.items[2][1];
        aM.items[1][2] = this.items[1][0] * pM.items[0][2] +
            this.items[1][1] * pM.items[1][2] +
            this.items[1][2] * pM.items[2][2];

        aM.items[2][0] = this.items[2][0] * pM.items[0][0] +
            this.items[2][1] * pM.items[1][0] +
            this.items[2][2] * pM.items[2][0];
        aM.items[2][1] = this.items[2][0] * pM.items[0][1] +
            this.items[2][1] * pM.items[1][1] +
            this.items[2][2] * pM.items[2][1];
        aM.items[2][2] = this.items[2][0] * pM.items[0][2] +
            this.items[2][1] * pM.items[1][2] +
            this.items[2][2] * pM.items[2][2];
        return aM;
    };

    Matrix.prototype.multiplyVector = function (pV) {
        var X, Y, Z;
        X = this.items[0][0] * pV.getX() +
            this.items[0][1] * pV.getY() +
            this.items[0][2] * pV.getZ();

        Y = this.items[1][0] * pV.getX() +
            this.items[1][1] * pV.getY() +
            this.items[1][2] * pV.getZ();

        Z = this.items[2][0] * pV.getX() +
            this.items[2][1] * pV.getY() +
            this.items[2][2] * pV.getZ();

        return new Vector(X, Y, Z);
    };

    Matrix.prototype.setTransform = function (pContext) {
        pContext.setTransform(this.items[0][0], this.items[1][0],
            this.items[0][1], this.items[1][1],
            this.items[0][2], this.items[1][2]);
    };

    Matrix.prototype.transform = function (pContext) {
        pContext.transform(this.items[0][0], this.items[0][1],
            this.items[0][2], this.items[1][0],
            this.items[1][1], this.items[1][2]);
    };

    return Matrix;
}());