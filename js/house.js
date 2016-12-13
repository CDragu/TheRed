/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../js/matrix.js"/>

var House = (function () {
    function House(pMatrix, pDoorColour, pScale, protation) {
        this.setMatrix(pMatrix);
        this.setDoorColour(pDoorColour);
        this.setScale(pScale);
        this.setRotation(protation);

    }

    House.prototype.getPosition = function () {
        return this.mPosition;
    };
    House.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };
    House.prototype.getDoorColour = function () {
        return this.mDoorColour;
    };
    House.prototype.setDoorColour = function (pDoorColour) {
        this.mDoorColour = pDoorColour;
    };
    House.prototype.getMatrix = function () {
        return this.mMatirx;
    };
    House.prototype.setMatrix = function (pMatrix) {
        this.mMatirx = pMatrix;
    };
    House.prototype.getScale = function () {
        return this.mScale;
    };
    House.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    House.prototype.getRotation = function () {
        return this.mRotation;
    };
    House.prototype.setRotation = function (pRotation) {
        this.mRotation = pRotation;
    };



    House.prototype.drawGlass = function (pMatrix, pContext) {
        var matrix;
        matrix = pMatrix;
        pContext.beginPath();
        pContext.fillStyle = '#062FE8';

        pContext.lineTo(-10, 0);
        pContext.lineTo(-10, -10);
        pContext.lineTo(0, -10);
        pContext.closePath();

        pContext.fill();
        pContext.lineWidth = 0.2;
        pContext.moveTo((-10 / 2), 0);
        pContext.lineTo((-10 / 2), -10);
        pContext.moveTo(0, (-10 / 2));
        pContext.lineTo(-10, (-10 / 2));

        pContext.stroke();
    };

    House.prototype.drawOutline = function (pMatrix, pContext) {
        var matrix;
        matrix = pMatrix;
        //outline
        pContext.beginPath();

        pContext.lineWidth = 5;
        pContext.fillStyle = '#ffffff';

        pContext.moveTo(0, 0);
        pContext.lineTo(+100, +100);
        pContext.lineTo(+100, +200);
        pContext.lineTo(-100, +200);
        pContext.lineTo(-100, +100);
        pContext.lineTo(0, 0);
        pContext.fill();
        pContext.stroke();
    };

    House.prototype.drawRoof = function (pMatrix, pContext) {
        var matrix;
        matrix = pMatrix;
        //roof
        pContext.beginPath();

        pContext.fillStyle = "#ff0000";

        pContext.moveTo(-100, +100);
        pContext.lineTo(+100, +100);
        pContext.lineTo(0, 0);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };

    House.prototype.drawDoor = function (pMatrix, color, pContext) {
        var matrix;
        matrix = pMatrix;
        //door
        pContext.beginPath();

        pContext.fillStyle = color;

        pContext.moveTo(+70, +200);
        pContext.lineTo(+70, +120);
        pContext.lineTo(+30, +120);
        pContext.lineTo(+30, +200);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };



    House.prototype.draw = function (pContext) {
        var translate, scale, transform;
        pContext.save();

        transform = this.getMatrix().multiply(this.getRotation());
        transform.setTransform(pContext);
        this.setMatrix(transform);

        transform = this.getMatrix().multiply(this.getScale());
        transform.setTransform(pContext);
        this.setMatrix(transform);

        this.drawOutline(this.getMatrix(), pContext);

        this.drawRoof(this.getMatrix(), pContext);

        this.drawDoor(this.getMatrix(), this.getDoorColour(), pContext);

        translate = Matrix.createTranslation(new Vector(20, 170, 1));
        scale = Matrix.createScale(new Vector(4.5, 4.5, 1));
        transform = this.getMatrix().multiply(translate).multiply(scale);
        transform.setTransform(pContext);
        this.drawGlass(this.getMatrix(), pContext);

        translate = Matrix.createTranslation(new Vector(-40, 170, 1));
        scale = Matrix.createScale(new Vector(4.5, 4.5, 1));
        transform = this.getMatrix().multiply(translate).multiply(scale);
        transform.setTransform(pContext);
        this.drawGlass(this.getMatrix(), pContext);
        pContext.restore();
    };


    return House;
}());
