var TheDeep = (function () {
    function TheDeep() {
    }

    TheDeep.prototype.draw = function (pContext, pMatrix) {
        var matrix;
        matrix = pMatrix;
        //Color
        pContext.fillStyle = '#FFAF36'; //Ground
        pContext.beginPath();
        pContext.moveTo(30, 40);
        pContext.lineTo(80, 40);
        pContext.lineTo(110, 80);
        pContext.lineTo(0, 80);
        pContext.lineTo(0, 40);
        pContext.fill();

        pContext.fillStyle = '#D7D7FF'; //Lower Section 1
        pContext.beginPath();
        pContext.moveTo(0, 20);
        pContext.lineTo(20, 30);
        pContext.lineTo(20, 40);
        pContext.lineTo(0, 40);
        pContext.fill();

        pContext.fillStyle = '#ABD3E8'; //Lower Section 2
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(30, 20);
        pContext.lineTo(30, 40);
        pContext.lineTo(20, 40);
        pContext.lineTo(20, 30);
        pContext.lineTo(0, 20);
        pContext.fill();

        pContext.fillStyle = '#ABB8E8'; //Upper Section 1
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(40, -30);
        pContext.lineTo(50, -20);
        pContext.lineTo(17, 10);
        pContext.fill();

        pContext.fillStyle = '#16FFF6'; //Upper Section 2
        pContext.beginPath();
        pContext.moveTo(40, -30);
        pContext.lineTo(70, -50);
        pContext.lineTo(90, -40);
        pContext.lineTo(60, 20);
        pContext.lineTo(30, 20);
        pContext.lineTo(17, 10);
        pContext.lineTo(50, -20);
        pContext.fill();


        // Lines
        pContext.lineWidth = 1;
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(110, -80);
        pContext.lineTo(60, 20);
        pContext.lineTo(30, 20);
        pContext.lineTo(30, 40);
        pContext.lineTo(80, 40);
        pContext.lineTo(110, 80);
        pContext.lineTo(0, 80);
        pContext.lineTo(0, 0);
        pContext.lineTo(30, 20);
        pContext.moveTo(0, 20);
        pContext.lineTo(20, 30); // Thick
        pContext.lineTo(20, 40);
        pContext.moveTo(0, 40);
        pContext.lineTo(30, 40);
        pContext.moveTo(0, 0);
        pContext.lineTo(40, -30); // Thick
        pContext.lineTo(50, -20);
        pContext.lineTo(16, 10);
        pContext.lineTo(0, 0);
        pContext.moveTo(70, -50);
        pContext.lineTo(90, -40);
        pContext.lineTo(110, -80);
        pContext.lineTo(87, -42);
        pContext.moveTo(110, -80);
        pContext.lineTo(75, -48);
        pContext.moveTo(80, -45);
        pContext.lineTo(93.5, -45);
        pContext.moveTo(30, 35); // *Railing
        pContext.lineTo(80, 35);
        pContext.lineTo(80, 40);
        pContext.moveTo(40, 35);
        pContext.lineTo(40, 40);
        pContext.moveTo(50, 35);
        pContext.lineTo(50, 40);
        pContext.moveTo(50, 35);
        pContext.lineTo(50, 40);
        pContext.moveTo(60, 35);
        pContext.lineTo(60, 40);
        pContext.moveTo(70, 35);
        pContext.lineTo(70, 40); // Railing*

        pContext.moveTo(60, 20); // *Tiles Upper
        pContext.lineTo(17, 10);
        pContext.moveTo(60, 20);
        pContext.lineTo(30, -2);
        pContext.moveTo(60, 20);
        pContext.lineTo(40, -10);
        pContext.moveTo(60, 20);
        pContext.lineTo(50, -20);
        pContext.moveTo(60, 20);
        pContext.lineTo(60, -43);
        pContext.moveTo(60, 20);
        pContext.lineTo(70, -50);

        pContext.moveTo(90, -40);
        pContext.lineTo(50, 20);
        pContext.moveTo(90, -40);
        pContext.lineTo(40, 20);
        pContext.moveTo(90, -40);
        pContext.lineTo(30, 20);
        pContext.moveTo(90, -40);
        pContext.lineTo(27, 0);
        pContext.moveTo(90, -40);
        pContext.lineTo(17, 10);
        pContext.moveTo(90, -40);
        pContext.lineTo(39, -10);
        pContext.moveTo(90, -40);
        pContext.lineTo(50, -20);
        pContext.moveTo(90, -40);
        pContext.lineTo(60, -43);
        pContext.moveTo(90, -40);
        pContext.lineTo(40, -30);// Tiles Upper*

        pContext.moveTo(0, 10);// *Tiles Lower
        pContext.lineTo(6, 3);
        pContext.moveTo(0, 20);
        pContext.lineTo(12, 7);
        pContext.moveTo(12, 28);
        pContext.lineTo(24, 15);
        pContext.moveTo(20, 30);
        pContext.lineTo(30, 20);
        pContext.moveTo(20, 40);
        pContext.lineTo(30, 30);
        pContext.moveTo(5, 5);
        pContext.lineTo(0, 20);
        pContext.moveTo(20, 10);
        pContext.lineTo(20, 20);
        pContext.moveTo(15, 25);
        pContext.lineTo(25, 25);
        pContext.moveTo(25, 25);
        pContext.lineTo(25, 40);// Tiles Lower*

        pContext.stroke();

        //Thick Lines
        pContext.lineWidth = 5;
        pContext.beginPath();
        pContext.moveTo(0, 20);
        pContext.lineTo(20, 30);
        pContext.moveTo(0, 0);
        pContext.lineTo(40, -30);
        pContext.stroke();

        //Dirt Lines
        pContext.lineWidth = 7;
        pContext.strokeStyle = '#E88A00';
        pContext.beginPath();
        pContext.moveTo(10, 50);
        pContext.lineTo(20, 50);
        pContext.moveTo(70, 50);
        pContext.lineTo(80, 50);
        pContext.moveTo(30, 60);
        pContext.lineTo(50, 60);
        pContext.moveTo(70, 70);
        pContext.lineTo(80, 70);
        pContext.stroke();
    };
    return TheDeep;
}());
