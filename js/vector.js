var Vector = (function () {
    function Vector(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    Vector.prototype.getX = function () {
        return this.mX;
    };
    Vector.prototype.getY = function () {
        return this.mY;
    };
    Vector.prototype.getZ = function () {
        return this.mZ;
    };
    Vector.prototype.setX = function (pX) {
        this.mX = pX;
    };
    Vector.prototype.setY = function (pY) {
        this.mY = pY;
    };
    Vector.prototype.setZ = function (pZ) {
        this.mZ = pZ;
    };

    Vector.prototype.add = function (pV) {
        return new Vector(this.mX + pV.getX(), this.mY + pV.getY());
    };

    Vector.prototype.subtract = function (dV) {
        return new Vector(this.mX - dV.getX(), this.mY - dV.getY());
    };

    Vector.prototype.multiply = function (scal) {
        return new Vector(this.mX * scal, this.mY * scal);
    };

    Vector.prototype.divide = function (scal) {
        return new Vector(this.mX / scal, this.mY / scal);
    };

    Vector.prototype.magnitude = function () {
        return Math.abs(Math.sqrt(Math.pow(this.mX, 2) + Math.pow(this.mY, 2)));
    };

    Vector.prototype.normalise = function () {
        var m;
        m = this.magnitude();
        return new Vector(this.mX / m, this.mY / m);
    };

    Vector.prototype.limitTo = function (scal) {
        var m, v;
        m = this.magnitude();
        v = new Vector(this.mX, this.mY);
        if (m > scal) {
            v = v.normalise();
            v = v.multiply(scal);
        }
        return v;
    };

    Vector.prototype.dotProduct = function (vP) {
        return this.mX * vP.getX() + this.mY * vP.getY();
    };

    Vector.prototype.interpolate = function (vP, scal) {
        var X, Y;
        X = (this.mX + vP.getX()) * scal;
        Y = (this.mY + vP.getY()) * scal;
        return new Vector(X, Y);
    };

    Vector.prototype.rotate = function (scal) {
        var X, Y;
        X = (Math.cos(scal) * this.mX - Math.sin(scal) * this.mY);
        Y = (Math.sin(scal) * this.mX + Math.cos(scal) * this.mY);
        return new Vector(X, Y);
    };

    Vector.prototype.angleBetween = function (pV) {
        var mag1, mag2, a;
        mag1 = this.magnitude();
        mag2 = pV.magnitude();
        a = (this.dotProduct(pV) / (mag1 * mag2));

        return Math.acos(a);
    };

    return Vector;
}());