/*global window, document, alert, Vector, House, Matrix, Tree,
Car, Weel, Node, Bezier, TheDeep, Ocean, JustSea, YellowCircle,
TheDeep, TiltedFence, Waves, Loop, setTimeout, update, draw,
requestAnimationFrame, TheRed*/
// the window load event handler

var mainCanvas, mainContext,
    SceneCount, SceneBackgroundColor,
    origin, WorldMatrix, scale, rotation,
    pWorldMatrix, worldNode, JustSeaNode,
    SunNode, buildingNode, FenceNode, WaveNode,
    WaveNode2, MonsterNode, theRed, WaveNodeUnder;

function onLoad() {
    var onloop, i, j;
    // this function will initialise our variables
    function initialiseCanvasContext() {
        SceneCount = 0;
        SceneBackgroundColor = "#19CCFF";
        // Find the canvas element using its id attribute.
        mainCanvas = document.getElementById('mainCanvas');
        // if it couldn't be found
        if (!mainCanvas) {
            // make a message box pop up with the error.
            alert('Error: I cannot find the canvas element!');
            return;
        }
        // Get the 2D canvas context.
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }
        origin = new Vector(mainCanvas.width * 0.5, mainCanvas.height * 0.5);
        mainContext.fillStyle = SceneBackgroundColor;

        WorldMatrix = Matrix.createTranslation(origin);
        scale = new Matrix.createScale(new Vector(1, 1));
        rotation = new Matrix.createRotation(0);
        pWorldMatrix = Matrix.createTranslation(origin);
        ///First Scene
        WorldMatrix = Matrix.createTranslation(new Vector(-mainCanvas.width / 2, -50, 1))
            .multiply(new Matrix
                .createScale(new Vector(2.5, 2.5)));
        worldNode = new Node(WorldMatrix);

        WorldMatrix = Matrix.createTranslation(new Vector(0, 40, 0));
        JustSeaNode = new Node(WorldMatrix);
        JustSeaNode.AddChild(new JustSea());

        WorldMatrix = Matrix.createTranslation(new Vector(-350, -250, 0));
        SunNode = new Node(WorldMatrix);
        SunNode.AddChild(new YellowCircle());
        worldNode.AddChild(SunNode);

        WorldMatrix = Matrix.createTranslation(new Vector(-mainCanvas.width / 2, -50, 1))
            .multiply(new Matrix
                .createScale(new Vector(2.5, 2.5)));
        buildingNode = new Node(WorldMatrix);
        buildingNode.AddChild(new TheDeep());

        WorldMatrix = Matrix.createTranslation(new Vector(-0, 150, 0));
        FenceNode = new Node(WorldMatrix);
        FenceNode.AddChild(new TiltedFence());
        buildingNode.AddChild(FenceNode);

        WorldMatrix = Matrix.createTranslation(new Vector(0, 0, 0));
        WaveNode = new Node(WorldMatrix);

        WorldMatrix = Matrix.createTranslation(new Vector(0, 0, 0));
        WaveNodeUnder = new Node(WorldMatrix);

        for (j = 100; j < 400; j = j + 50) {
            for (i = -800; i < 800; i = i + 80) {

                WorldMatrix = Matrix.createTranslation(new Vector(i, j, 0));
                WaveNode2 = new Node(WorldMatrix);
                WaveNode2.AddChild(new Waves());
                WaveNode.AddChild(WaveNode2);

            }
        }
        for (i = -800; i < 800; i = i + 80) {

            WorldMatrix = Matrix.createTranslation(new Vector(i, 0, 0));
            WaveNode2 = new Node(WorldMatrix);
            WaveNode2.AddChild(new Waves());
            WaveNodeUnder.AddChild(WaveNode2);

        }
        for (i = -800; i < 800; i = i + 80) {

            WorldMatrix = Matrix.createTranslation(new Vector(i, 50, 0));
            WaveNode2 = new Node(WorldMatrix);
            WaveNode2.AddChild(new Waves());
            WaveNodeUnder.AddChild(WaveNode2);

        }

        WorldMatrix = Matrix.createTranslation(new Vector(0, 160, 1))
             .multiply(new Matrix
                 .createScale(new Vector(2.5, 2.5)));
        MonsterNode = new Node(WorldMatrix);

        theRed = new TheRed(
            new Vector(50, -20, 1),
            new Vector(50, 110, 1),
            new Vector(-50, -20, 1),
            new Vector(-50, 110, 1)
        );

        MonsterNode.AddChild(theRed);
        worldNode.AddChild(MonsterNode);
        worldNode.AddChild(new Ocean());
    }
    initialiseCanvasContext();
    onloop = new Loop();
}

var fps = 144;
var lastTime = Date.now();
function Loop() {
    setTimeout(function () {
        var thisTime, deltaTime;
        thisTime = Date.now(); // the current time
        deltaTime = thisTime - lastTime; // the difference
        update(deltaTime);
        draw();
        lastTime = thisTime;
        requestAnimationFrame(Loop);
    }, 1000 / fps);
}
var stage = 1;
var speed = 0.1;
var walkingspeed = 1;
var innerstage = 0;
var x = 0, y = 0, direction = 1;
function update(deltaTime) {
    var time;
    time = deltaTime;
    x += speed * direction;
    y += speed * direction;
    if (x > 1 || x < -1) {
        direction = direction * -1;
    }

    WaveNode.setMatrix(WaveNode.getMatrix()
        .multiply(new Matrix
            .createTranslation(new Vector(x, y, 0))));

    WaveNodeUnder.setMatrix(WaveNode.getMatrix()
        .multiply(new Matrix
            .createTranslation(new Vector(x, y, 0))));
    if (stage === 1) {
        if (MonsterNode.getMatrix().getElement(1, 2) > -151) {

            MonsterNode.setMatrix(MonsterNode.getMatrix()
                .multiply(new Matrix
                    .createTranslation(new Vector(0, -speed, 0))));
        }
        if (MonsterNode.getMatrix().getElement(1, 2) === 0) {
            stage = 2;
        }
    }
    if (stage === 2) {
        if (MonsterNode.getMatrix().getElement(1, 2) > -151) {

            MonsterNode.setMatrix(MonsterNode.getMatrix()
                .multiply(new Matrix
                    .createTranslation(new Vector(0, -speed, 0))));
        }
        if (theRed.getLMJ().getY() < 50) {
            theRed.setLMJ(new Vector(theRed.getLMJ().getX(),
                theRed.getLMJ().getY() + speed, 1));

            theRed.setRMJ(new Vector(theRed.getRMJ().getX(),
                theRed.getRMJ().getY() + speed, 1));

        }
        if (MonsterNode.getMatrix().getElement(1, 2) === -150) {
            stage = 3;
        }
    }
    if (stage === 3) {
        MonsterNode.setMatrix(MonsterNode.getMatrix()
                .multiply(new Matrix
                    .createTranslation(new Vector(speed, 0, 0))));
        if (innerstage === 0) {
            if (theRed.getLMJ().getY() >= 1) {
                theRed.setLMJ(new Vector(theRed.getLMJ().getX(),
                    theRed.getLMJ().getY() - walkingspeed, 1));
                theRed.setLLJ(new Vector(theRed.getLLJ().getX(),
                    theRed.getLLJ().getY() - walkingspeed, 1));
                theRed.setRLJ(new Vector(theRed.getRLJ().getX() - (speed + 0.2),
                    theRed.getRLJ().getY(), 1));
                theRed.setLLJ(new Vector(theRed.getLLJ().getX() + (speed + 0.2),
                    theRed.getLLJ().getY(), 1));
            }
            if (theRed.getLMJ().getY() > 0 && theRed.getLMJ().getY() < 5) {
                innerstage = 1;
            }
        }
        if (innerstage === 1) {
            if (theRed.getLMJ().getY() < 50) {
                theRed.setLMJ(new Vector(theRed.getLMJ().getX(),
                    theRed.getLMJ().getY() + walkingspeed, 1));
                theRed.setLLJ(new Vector(theRed.getLLJ().getX(),
                    theRed.getLLJ().getY() + walkingspeed, 1));
                theRed.setRLJ(new Vector(theRed.getRLJ().getX() - (speed + 0.2),
                    theRed.getRLJ().getY(), 1));
                theRed.setLLJ(new Vector(theRed.getLLJ().getX() + (speed + 0.2),
                    theRed.getLLJ().getY(), 1));
            }
            if (theRed.getLMJ().getY() > 50 && theRed.getLMJ().getY() < 53) {
                innerstage = 2;
            }
        }
        if (innerstage === 2) {
            if (theRed.getRMJ().getY() >= 1) {
                theRed.setRMJ(new Vector(theRed.getRMJ().getX(),
                    theRed.getRMJ().getY() - walkingspeed, 1));
                theRed.setRLJ(new Vector(theRed.getRLJ().getX(),
                    theRed.getRLJ().getY() - walkingspeed, 1));
                theRed.setRLJ(new Vector(theRed.getRLJ().getX() + (speed + 0.2),
                    theRed.getRLJ().getY(), 1));
                theRed.setLLJ(new Vector(theRed.getLLJ().getX() - (speed + 0.2),
                    theRed.getLLJ().getY(), 1));
            }
            if (theRed.getRMJ().getY() > 0 && theRed.getRMJ().getY() < 5) {
                innerstage = 3;
            }
        }
        if (innerstage === 3) {
            if (theRed.getRMJ().getY() < 50) {
                theRed.setRMJ(new Vector(theRed.getRMJ().getX(),
                    theRed.getRMJ().getY() + walkingspeed, 1));
                theRed.setRLJ(new Vector(theRed.getRLJ().getX(),
                    theRed.getRLJ().getY() + walkingspeed, 1));
                theRed.setRLJ(new Vector(theRed.getRLJ().getX() + (speed + 0.2),
                    theRed.getRLJ().getY(), 1));
                theRed.setLLJ(new Vector(theRed.getLLJ().getX() - (speed + 0.2),
                    theRed.getLLJ().getY(), 1));
            }
            if (theRed.getRMJ().getY() > 50 && theRed.getRMJ().getY() < 53) {
                innerstage = 0;
            }
        }
        if (MonsterNode.getMatrix().getElement(0, 2) > 600) {
            stage = 4;
        }
    }
    if (stage === 4) {
        SceneCount = 1;
    }

}
//-160
function draw() {
    mainContext.fillStyle = SceneBackgroundColor;
    mainContext.fillRect(-mainCanvas.width, -mainCanvas.height,
        mainCanvas.width * 2, mainCanvas.height * 2);
    if (SceneCount === 0) {
        SceneBackgroundColor = "#3BEEFF";
        SunNode.draw(mainContext, pWorldMatrix);
        worldNode.draw(mainContext, pWorldMatrix);
        WaveNodeUnder.draw(mainContext, pWorldMatrix);
        MonsterNode.draw(mainContext, pWorldMatrix);
        JustSeaNode.draw(mainContext, pWorldMatrix);
        WaveNode.draw(mainContext, pWorldMatrix);
        buildingNode.draw(mainContext, pWorldMatrix);
    }
    if (SceneCount === 1) {
        SceneBackgroundColor = "#000000";
        mainContext.textAlign = "center";
        mainContext.fillStyle = "#FFFFFF";
        mainContext.font = "60px serif";
        mainContext.fillText("The End", mainCanvas.width / 2, mainCanvas.height / 2);
    }
}

window.addEventListener('load', onLoad, false);
