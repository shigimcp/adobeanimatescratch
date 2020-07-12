(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [];


    (lib.AnMovieClip = function () {

        console.log('PING!!! BSPS 1: lib.AnMovieClip');

        this.actionFrames = [];
        this.gotoAndPlay = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        }
        this.play = function () {
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        }
        this.stop = function () {
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();


    //#region ========================= symbols: =========================

    (lib.BSPS_bg01 = function () {
        this.initialize(img.BSPS_bg01);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);


    (lib.BSPS_bottle = function () {
        this.initialize(img.BSPS_bottle);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 165, 320);


    (lib.BSPS_image = function () {
        this.initialize(img.BSPS_image);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 475, 250);

    //#endregion ========================= symbols: =========================


    //#region ========================= helper functions: =========================

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;

        console.log('PING!!! BSPS 2a: mc_symbol_clone');

        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;

        console.log('PING!!! BSPS 2b: getMCSymbolPrototype');

        return prototype;
    }

    //#endregion ========================= helper functions: =========================


    //#region ========================= movieclips: =========================

    (lib.mc_BSPS_image = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.BSPS_image();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_BSPS_image, new cjs.Rectangle(0, 0, 475, 250), null);


    (lib.mc_BSPS_empty = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#00FF00").beginStroke().moveTo(-50, 50).lineTo(-50, -50).lineTo(50, -50).lineTo(50, 50).closePath();
        this.shape.setTransform(50, 50);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_BSPS_empty, new cjs.Rectangle(0, 0, 100, 100), null);


    (lib.mc_BSPS_bottle = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // bottle
        this.instance = new lib.BSPS_bottle();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_BSPS_bottle, new cjs.Rectangle(0, 0, 165, 320), null);


    (lib.mc_BSPS_border = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill().beginStroke("#EE70BC").setStrokeStyle(1, 1, 1).moveTo(-150, -125).lineTo(150, -125).lineTo(150, 125).lineTo(-150, 125).closePath();
        this.shape.setTransform(150, 125);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("rgba(0,255,0,0)").beginStroke().moveTo(-150, 125).lineTo(-150, -125).lineTo(150, -125).lineTo(150, 125).closePath();
        this.shape_1.setTransform(150, 125);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_BSPS_border, new cjs.Rectangle(-1, -1, 302, 252), null);


    (lib.mc_BSPS_bg01 = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.BSPS_bg01();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_BSPS_bg01, new cjs.Rectangle(0, 0, 300, 250), null);


    (lib.mc_LOGO_BSPS_spears = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(1.8, 0.9).lineTo(1.8, -0.6).lineTo(1.1, 0.9).lineTo(0.9, 0.9).lineTo(0.2, -0.6).lineTo(0.2, 0.9).lineTo(-0.1, 0.9).lineTo(-0.1, -0.9).lineTo(0.4, -0.9).lineTo(1, 0.3).lineTo(1.6, -0.9).lineTo(2.1, -0.9).lineTo(2.1, 0.9).closePath().moveTo(-1.4, 0.9).lineTo(-1.4, -0.6).lineTo(-2.1, -0.6).lineTo(-2.1, -0.9).lineTo(-0.5, -0.9).lineTo(-0.5, -0.6).lineTo(-1.1, -0.6).lineTo(-1.1, 0.9).closePath();
        this.shape.setTransform(41.525, 1.275);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-1.3, 3.8).curveTo(-1.9, 3.4, -2.4, 2.6).lineTo(-1.7, 2.1).curveTo(-1, 3.5, -0, 3.5).curveTo(0.3, 3.5, 0.7, 3.3).curveTo(1.2, 3.1, 1.3, 2.8).curveTo(1.5, 2.5, 1.5, 2.1).curveTo(1.5, 1.7, 1.2, 1.3).curveTo(0.7, 0.7, -0.2, -0).curveTo(-1.2, -0.7, -1.4, -1.1).curveTo(-1.9, -1.7, -1.9, -2.4).curveTo(-1.9, -2.8, -1.6, -3.3).curveTo(-1.4, -3.8, -0.9, -4).curveTo(-0.4, -4.2, 0.1, -4.3).curveTo(0.7, -4.3, 1.2, -4).curveTo(1.6, -3.8, 2.2, -2.9).lineTo(1.6, -2.4).curveTo(1.1, -3.1, 0.8, -3.2).curveTo(0.5, -3.4, 0.1, -3.4).curveTo(-0.4, -3.4, -0.7, -3.1).curveTo(-1, -2.8, -1, -2.4).lineTo(-0.9, -1.8).lineTo(-0.5, -1.3).lineTo(0.5, -0.5).curveTo(1.5, 0.1, 2, 0.9).curveTo(2.4, 1.5, 2.4, 2.1).curveTo(2.4, 3, 1.7, 3.6).curveTo(1, 4.3, 0.1, 4.2).curveTo(-0.7, 4.2, -1.3, 3.8).closePath();
        this.shape_1.setTransform(36.575, 4.25);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(1.6, 4.1).lineTo(-1.3, 0.3).lineTo(-1.8, 0.3).lineTo(-1.8, 4.1).lineTo(-2.6, 4.1).lineTo(-2.6, -4.1).lineTo(-0.9, -4.1).lineTo(0.8, -4).curveTo(1.7, -3.7, 2, -3.3).curveTo(2.5, -2.7, 2.5, -1.9).curveTo(2.5, -1.2, 2.2, -0.7).curveTo(1.9, -0.3, 1.3, 0).curveTo(0.7, 0.3, -0.3, 0.3).lineTo(2.6, 4.1).closePath().moveTo(-1.8, -0.5).lineTo(-0.3, -0.5).curveTo(0.5, -0.5, 0.8, -0.7).curveTo(1.3, -0.8, 1.5, -1.2).curveTo(1.7, -1.4, 1.7, -1.9).curveTo(1.7, -2.3, 1.5, -2.7).curveTo(1.3, -3, 0.8, -3.1).curveTo(0.5, -3.3, -0.3, -3.3).lineTo(-1.8, -3.3).closePath();
        this.shape_2.setTransform(30.4, 4.275);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(3.1, 4).lineTo(1.8, 1.4).lineTo(-1.7, 1.4).lineTo(-2.9, 4).lineTo(-3.9, 4).lineTo(-0.1, -4.1).lineTo(0.1, -4.1).lineTo(3.9, 4).closePath().moveTo(1.5, 0.6).lineTo(0, -2.4).lineTo(-1.3, 0.6).lineTo(1.5, 0.6).closePath();
        this.shape_3.setTransform(22.4, 4.25);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-2.3, 4).lineTo(-2.3, -4.1).lineTo(2.3, -4.1).lineTo(2.3, -3.3).lineTo(-1.5, -3.3).lineTo(-1.5, -0.7).lineTo(2.3, -0.7).lineTo(2.3, 0.1).lineTo(-1.5, 0.1).lineTo(-1.5, 3.3).lineTo(2.3, 3.3).lineTo(2.3, 4).closePath();
        this.shape_4.setTransform(15.375, 4.25);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-2.5, 4).lineTo(-2.5, -4.1).lineTo(-0.9, -4.1).curveTo(0.5, -4, 0.9, -3.9).curveTo(1.6, -3.8, 2.1, -3.2).curveTo(2.5, -2.6, 2.5, -1.9).curveTo(2.5, -1, 2.1, -0.6).curveTo(1.6, 0, 0.9, 0.2).curveTo(0.3, 0.3, -1.2, 0.3).lineTo(-1.7, 0.3).lineTo(-1.7, 4).closePath().moveTo(-1.7, -0.5).lineTo(-0.4, -0.5).curveTo(0.4, -0.5, 0.9, -0.7).curveTo(1.3, -0.8, 1.5, -1.1).curveTo(1.7, -1.5, 1.7, -1.9).curveTo(1.7, -2.3, 1.5, -2.6).curveTo(1.3, -2.9, 0.9, -3.1).curveTo(0.5, -3.2, -0.3, -3.3).lineTo(-1.7, -3.3).closePath();
        this.shape_5.setTransform(9.175, 4.25);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-1.3, 3.8).curveTo(-1.8, 3.5, -2.4, 2.6).lineTo(-1.7, 2.1).curveTo(-0.9, 3.5, -0, 3.5).lineTo(0.8, 3.3).lineTo(1.3, 2.8).curveTo(1.5, 2.5, 1.5, 2.1).curveTo(1.5, 1.7, 1.2, 1.3).curveTo(0.8, 0.7, -0.2, -0).curveTo(-1.3, -0.8, -1.4, -1.1).curveTo(-1.9, -1.7, -1.9, -2.4).curveTo(-1.9, -2.8, -1.6, -3.3).curveTo(-1.3, -3.8, -0.9, -4).curveTo(-0.4, -4.2, 0.1, -4.3).curveTo(0.7, -4.3, 1.2, -4).curveTo(1.7, -3.6, 2.2, -2.9).lineTo(1.6, -2.4).curveTo(1.1, -3.1, 0.8, -3.2).curveTo(0.5, -3.4, 0.1, -3.4).curveTo(-0.4, -3.4, -0.7, -3.1).curveTo(-1, -2.8, -1, -2.4).lineTo(-0.9, -1.8).lineTo(-0.5, -1.3).lineTo(0.5, -0.5).curveTo(1.6, 0.3, 2, 0.9).curveTo(2.4, 1.5, 2.4, 2.1).curveTo(2.4, 3, 1.7, 3.6).curveTo(1, 4.3, 0.1, 4.2).curveTo(-0.7, 4.2, -1.3, 3.8).closePath();
        this.shape_6.setTransform(2.375, 4.25);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS_spears, new cjs.Rectangle(0, 0, 43.6, 8.5), null);


    (lib.mc_LOGO_BSPS_show = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(2, 3.7).lineTo(0.1, -1.4).lineTo(-0, -1.4).lineTo(-2.2, 3.8).curveTo(-2.4, 4.1, -2.7, 4.1).curveTo(-2.9, 4.1, -3.1, 3.7).lineTo(-5.7, -2.9).curveTo(-5.9, -3.4, -6.4, -3.4).lineTo(-6.7, -3.4).curveTo(-6.7, -3.4, -6.8, -3.4).curveTo(-6.8, -3.4, -6.8, -3.5).curveTo(-6.8, -3.5, -6.8, -3.5).curveTo(-6.8, -3.5, -6.8, -3.6).lineTo(-6.8, -4).curveTo(-6.8, -4, -6.8, -4).curveTo(-6.8, -4.1, -6.8, -4.1).curveTo(-6.8, -4.1, -6.7, -4.1).curveTo(-6.7, -4.1, -6.7, -4.1).lineTo(-3.1, -4.1).curveTo(-3, -4.1, -3, -4.1).curveTo(-3, -4.1, -3, -4.1).curveTo(-2.9, -4.1, -2.9, -4).curveTo(-2.9, -4, -2.9, -4).lineTo(-2.9, -3.6).curveTo(-2.9, -3.5, -2.9, -3.5).curveTo(-2.9, -3.5, -3, -3.5).curveTo(-3, -3.4, -3, -3.4).curveTo(-3, -3.4, -3.1, -3.4).lineTo(-3.3, -3.4).curveTo(-3.4, -3.4, -3.4, -3.4).curveTo(-3.5, -3.4, -3.5, -3.3).curveTo(-3.5, -3.3, -3.5, -3.2).curveTo(-3.5, -3.1, -3.5, -3).lineTo(-2.1, 1.5).lineTo(-2, 1.5).lineTo(-0.5, -2.3).curveTo(-0.3, -2.6, -0.6, -3.1).curveTo(-0.8, -3.3, -1.1, -3.3).lineTo(-1.3, -3.3).curveTo(-1.4, -3.3, -1.4, -3.3).curveTo(-1.4, -3.3, -1.4, -3.3).curveTo(-1.5, -3.4, -1.5, -3.4).curveTo(-1.5, -3.4, -1.5, -3.4).lineTo(-1.5, -3.9).curveTo(-1.5, -3.9, -1.5, -3.9).curveTo(-1.5, -4, -1.4, -4).curveTo(-1.4, -4, -1.4, -4).curveTo(-1.4, -4, -1.3, -4).lineTo(2.1, -4).curveTo(2.1, -4, 2.2, -4).curveTo(2.2, -4, 2.2, -4).curveTo(2.3, -4, 2.3, -3.9).curveTo(2.3, -3.9, 2.3, -3.9).lineTo(2.3, -3.5).curveTo(2.3, -3.4, 2.3, -3.4).curveTo(2.3, -3.4, 2.2, -3.4).curveTo(2.2, -3.3, 2.2, -3.3).curveTo(2.2, -3.3, 2.1, -3.3).lineTo(1.8, -3.3).curveTo(1.4, -3.3, 1.6, -2.9).lineTo(3, 1.2).lineTo(3, 1.2).lineTo(4.3, -2.2).curveTo(4.8, -3.4, 3.9, -3.4).lineTo(3.7, -3.4).curveTo(3.6, -3.4, 3.6, -3.4).curveTo(3.6, -3.4, 3.6, -3.5).curveTo(3.5, -3.5, 3.5, -3.5).curveTo(3.5, -3.5, 3.5, -3.6).lineTo(3.5, -4).curveTo(3.5, -4, 3.5, -4).curveTo(3.5, -4.1, 3.6, -4.1).curveTo(3.6, -4.1, 3.6, -4.1).curveTo(3.6, -4.1, 3.7, -4.1).lineTo(6.7, -4.1).curveTo(6.7, -4.1, 6.7, -4.1).curveTo(6.8, -4.1, 6.8, -4.1).curveTo(6.8, -4.1, 6.8, -4).curveTo(6.8, -4, 6.8, -4).lineTo(6.8, -3.6).curveTo(6.8, -3.5, 6.8, -3.5).curveTo(6.8, -3.5, 6.8, -3.5).curveTo(6.8, -3.4, 6.7, -3.4).curveTo(6.7, -3.4, 6.7, -3.4).lineTo(6.4, -3.4).curveTo(5.8, -3.4, 5.7, -3.1).lineTo(4.2, 0.3).lineTo(2.8, 3.9).curveTo(2.8, 3.9, 2.7, 4).curveTo(2.7, 4, 2.6, 4.1).curveTo(2.6, 4.1, 2.5, 4.1).curveTo(2.4, 4.1, 2.4, 4.1).curveTo(2.1, 4.1, 2, 3.7).closePath();
        this.shape.setTransform(34.925, 10.325);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-3.2, 2.9).curveTo(-4.2, 1.7, -4.2, -0.1).curveTo(-4.2, -2, -2.6, -3.3).curveTo(-1.6, -4.2, 0.1, -4.2).curveTo(1.8, -4.2, 2.9, -3.1).curveTo(4.2, -1.7, 4.2, -0).curveTo(4.2, 1.5, 3.1, 2.9).curveTo(1.8, 4.2, -0.1, 4.2).curveTo(-2.1, 4.2, -3.2, 2.9).closePath().moveTo(-1.3, -2.9).curveTo(-2.1, -2, -2.1, -0).curveTo(-2.1, 1.7, -1.5, 2.6).curveTo(-1, 3.4, 0, 3.4).curveTo(0.9, 3.4, 1.4, 2.4).curveTo(1.9, 1.4, 1.9, -0.1).curveTo(1.9, -1.5, 1.3, -2.5).curveTo(0.7, -3.4, -0.1, -3.4).curveTo(-0.8, -3.4, -1.3, -2.9).closePath();
        this.shape_1.setTransform(24.225, 10.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(0.9, 6.9).curveTo(0.8, 6.9, 0.8, 6.9).curveTo(0.8, 6.9, 0.8, 6.9).curveTo(0.7, 6.8, 0.7, 6.8).curveTo(0.7, 6.8, 0.7, 6.8).lineTo(0.7, 6.3).curveTo(0.7, 6.3, 0.7, 6.3).curveTo(0.7, 6.2, 0.8, 6.2).curveTo(0.8, 6.2, 0.8, 6.2).curveTo(0.8, 6.2, 0.9, 6.2).lineTo(1.2, 6.2).curveTo(1.7, 6.2, 1.7, 5.8).lineTo(1.8, 2.6).curveTo(1.8, 0.6, 1.3, 0.1).curveTo(0.8, -0.4, 0.2, -0.3).curveTo(-0.4, -0.4, -1.2, 0.4).curveTo(-1.6, 0.8, -1.6, 1.3).lineTo(-1.6, 5.4).curveTo(-1.6, 6.2, -1.2, 6.2).lineTo(-0.8, 6.2).curveTo(-0.7, 6.2, -0.7, 6.2).curveTo(-0.7, 6.2, -0.6, 6.2).curveTo(-0.6, 6.3, -0.6, 6.3).curveTo(-0.6, 6.3, -0.6, 6.3).lineTo(-0.6, 6.7).curveTo(-0.6, 6.7, -0.6, 6.8).curveTo(-0.6, 6.8, -0.6, 6.8).curveTo(-0.6, 6.9, -0.7, 6.9).curveTo(-0.7, 6.9, -0.7, 6.9).lineTo(-4.7, 6.9).curveTo(-4.8, 6.9, -4.8, 6.9).curveTo(-4.8, 6.9, -4.8, 6.9).curveTo(-4.9, 6.8, -4.9, 6.8).curveTo(-4.9, 6.8, -4.9, 6.8).lineTo(-4.9, 6.3).curveTo(-4.9, 6.3, -4.9, 6.3).curveTo(-4.9, 6.2, -4.8, 6.2).curveTo(-4.8, 6.2, -4.8, 6.2).curveTo(-4.8, 6.2, -4.7, 6.2).lineTo(-4.3, 6.2).curveTo(-3.7, 6.2, -3.6, 5.9).curveTo(-3.5, 5.5, -3.5, 3.5).lineTo(-3.6, -3.2).curveTo(-3.6, -4.1, -3.8, -4.4).curveTo(-3.9, -4.7, -4.4, -5).lineTo(-4.8, -5.1).lineTo(-4.9, -5.3).lineTo(-4.9, -5.5).lineTo(-4.7, -5.6).lineTo(-2.2, -6.7).lineTo(-1.7, -6.9).curveTo(-1.6, -6.9, -1.6, -6.9).curveTo(-1.5, -6.8, -1.5, -6.8).curveTo(-1.5, -6.7, -1.5, -6.6).curveTo(-1.5, -6.6, -1.5, -6.5).lineTo(-1.6, -0.2).lineTo(-1.4, -0.2).curveTo(-0.6, -1.3, 1, -1.3).curveTo(2, -1.3, 2.9, -0.5).curveTo(3.5, -0, 3.7, 0.7).lineTo(3.8, 2.3).lineTo(3.8, 5.9).curveTo(3.8, 6.2, 4.4, 6.2).lineTo(4.7, 6.2).curveTo(4.8, 6.2, 4.8, 6.2).curveTo(4.8, 6.2, 4.9, 6.2).curveTo(4.9, 6.2, 4.9, 6.3).curveTo(4.9, 6.3, 4.9, 6.3).lineTo(4.9, 6.8).curveTo(4.9, 6.8, 4.9, 6.8).curveTo(4.9, 6.8, 4.9, 6.9).curveTo(4.9, 6.9, 4.8, 6.9).curveTo(4.8, 6.9, 4.8, 6.9).closePath();
        this.shape_2.setTransform(14.475, 7.35);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-3, 6.1).curveTo(-3.1, 6.1, -3.1, 6).curveTo(-3.2, 6, -3.2, 5.9).curveTo(-3.3, 5.9, -3.3, 5.9).curveTo(-3.4, 5.9, -3.4, 5.9).lineTo(-3.8, 6.2).curveTo(-3.8, 6.3, -3.8, 6.3).curveTo(-3.8, 6.4, -3.9, 6.4).curveTo(-3.9, 6.4, -4, 6.4).curveTo(-4, 6.4, -4.1, 6.4).curveTo(-4.2, 6.4, -4.2, 6.4).curveTo(-4.2, 6.4, -4.3, 6.4).curveTo(-4.3, 6.3, -4.3, 6.3).curveTo(-4.3, 6.2, -4.3, 6.1).lineTo(-4, 2.6).curveTo(-4, 2.6, -3.9, 2.5).curveTo(-3.9, 2.5, -3.9, 2.5).curveTo(-3.9, 2.5, -3.9, 2.5).curveTo(-3.9, 2.5, -3.9, 2.4).lineTo(-3.4, 2.5).curveTo(-3.4, 2.5, -3.4, 2.5).curveTo(-3.4, 2.5, -3.3, 2.5).curveTo(-3.3, 2.6, -3.3, 2.6).curveTo(-3.3, 2.6, -3.3, 2.6).curveTo(-3.3, 3.7, -2.6, 4.8).curveTo(-1.7, 6.2, -0.1, 6.2).curveTo(0.9, 6.2, 1.5, 5.7).curveTo(2.4, 5, 2.4, 4).curveTo(2.4, 2.7, 1.7, 2.1).curveTo(1.2, 1.5, -0.5, 0.8).curveTo(-2, 0.3, -3.2, -0.7).curveTo(-4.1, -1.6, -4.1, -3.5).curveTo(-4.2, -5.1, -2.9, -6.1).curveTo(-1.8, -7, -0.2, -7).curveTo(1.2, -7, 2.2, -6.6).curveTo(2.3, -6.5, 2.4, -6.5).curveTo(2.4, -6.5, 2.5, -6.5).curveTo(2.5, -6.5, 2.6, -6.6).curveTo(2.6, -6.6, 2.6, -6.6).lineTo(2.9, -6.8).lineTo(3.2, -7).curveTo(3.2, -7, 3.3, -7).curveTo(3.3, -7, 3.3, -6.9).curveTo(3.3, -6.9, 3.3, -6.8).curveTo(3.3, -6.8, 3.3, -6.7).lineTo(3.7, -3.5).curveTo(3.7, -3.5, 3.6, -3.5).curveTo(3.6, -3.4, 3.6, -3.4).curveTo(3.6, -3.4, 3.6, -3.4).curveTo(3.5, -3.4, 3.5, -3.4).lineTo(3.2, -3.3).curveTo(3.2, -3.3, 3.1, -3.3).curveTo(3.1, -3.2, 3.1, -3.3).curveTo(3.1, -3.3, 3.1, -3.3).curveTo(3.1, -3.3, 3.1, -3.4).curveTo(2.6, -4.7, 1.9, -5.4).curveTo(1.1, -6.2, -0.2, -6.2).curveTo(-1.1, -6.2, -1.7, -5.5).curveTo(-2.3, -4.9, -2.3, -4.3).curveTo(-2.3, -3.2, -1.7, -2.6).curveTo(-1.1, -2, 0.6, -1.4).curveTo(2.5, -0.8, 3.3, 0.1).curveTo(4.3, 1.1, 4.3, 2.8).curveTo(4.3, 4.6, 3.2, 5.8).curveTo(2.1, 7, 0.3, 7).curveTo(-1.8, 7, -3, 6.1).closePath();
        this.shape_3.setTransform(4.8, 7.45);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 4.4, 0, -4.3).beginStroke().moveTo(5.6, 4).lineTo(4, -0.1).lineTo(2.3, 4.1).curveTo(2, 4.7, 1.4, 4.7).curveTo(0.8, 4.7, 0.5, 4).lineTo(-2.1, -2.7).curveTo(-2.1, -2.7, -2.1, -2.8).curveTo(-2.1, -2.8, -2.2, -2.8).curveTo(-2.2, -2.8, -2.2, -2.9).curveTo(-2.3, -2.9, -2.3, -2.9).lineTo(-2.7, -2.9).lineTo(-2.9, -2.9).curveTo(-1.9, -1.6, -1.9, -0.1).curveTo(-1.9, 1.7, -3.2, 3.1).curveTo(-4.6, 4.6, -6.8, 4.6).curveTo(-9, 4.6, -10.2, 3.1).curveTo(-11.4, 1.7, -11.4, -0.2).curveTo(-11.4, -2.3, -9.6, -3.7).curveTo(-8.4, -4.7, -6.6, -4.7).curveTo(-4.7, -4.7, -3.4, -3.4).lineTo(-3.2, -3.3).lineTo(-3.3, -3.5).lineTo(-3.3, -3.9).curveTo(-3.3, -4.5, -2.6, -4.5).lineTo(1, -4.5).curveTo(1.6, -4.5, 1.6, -3.9).lineTo(1.6, -3.5).curveTo(1.6, -3, 1.1, -2.9).lineTo(2.1, 0.2).lineTo(3.1, -2.4).lineTo(3, -2.7).lineTo(2.7, -2.7).curveTo(2.1, -2.7, 2.1, -3.4).lineTo(2.1, -3.8).curveTo(2.1, -4.4, 2.7, -4.4).lineTo(4.7, -4.4).lineTo(5.9, -4.4).lineTo(6.1, -4.4).curveTo(6.8, -4.4, 6.8, -3.8).lineTo(6.8, -3.4).curveTo(6.8, -2.7, 6.2, -2.7).lineTo(6.1, -2.7).lineTo(7.1, -0).lineTo(7.9, -2.3).lineTo(8, -2.9).lineTo(7.7, -2.9).curveTo(7.1, -2.9, 7.1, -3.5).lineTo(7.1, -3.9).curveTo(7.1, -4.5, 7.7, -4.5).lineTo(10.7, -4.5).curveTo(11.4, -4.5, 11.4, -3.9).lineTo(11.4, -3.5).curveTo(11.4, -2.9, 10.7, -2.9).lineTo(10.4, -2.9).lineTo(10.1, -2.8).lineTo(7.3, 4.2).curveTo(6.9, 4.7, 6.4, 4.7).curveTo(5.9, 4.7, 5.6, 4).closePath().moveTo(-7.5, -2.6).curveTo(-8.2, -1.9, -8.2, -0.1).curveTo(-8.2, 1.5, -7.7, 2.3).curveTo(-7.3, 2.9, -6.6, 2.9).curveTo(-6, 2.9, -5.6, 1.9).curveTo(-5.2, 1.1, -5.2, -0.2).curveTo(-5.2, -1.4, -5.8, -2.3).curveTo(-6.2, -3, -6.7, -3).curveTo(-7.2, -3, -7.5, -2.6).closePath();
        this.shape_4.setTransform(30.875, 10.325);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 6.9, 0, -6.8).beginStroke().moveTo(0.9, 7.4).curveTo(0.2, 7.4, 0.2, 6.8).lineTo(0.2, 6.4).curveTo(0.2, 5.7, 0.9, 5.7).lineTo(1.2, 5.7).lineTo(1.3, 2.7).curveTo(1.3, 0.9, 0.9, 0.5).curveTo(0.6, 0.2, 0.2, 0.2).curveTo(-0.4, 0.2, -0.8, 0.7).curveTo(-1.1, 1.1, -1.1, 1.3).lineTo(-1.1, 5.7).lineTo(-0.8, 5.7).curveTo(-0.1, 5.8, -0.1, 6.4).lineTo(-0.1, 6.7).curveTo(-0.1, 7.4, -0.7, 7.4).lineTo(-4.7, 7.4).curveTo(-5.4, 7.4, -5.4, 6.7).lineTo(-5.4, 6.4).curveTo(-5.4, 5.7, -4.7, 5.7).lineTo(-4.3, 5.7).lineTo(-4.1, 5.7).lineTo(-4.1, -3.3).lineTo(-4.2, -4.2).curveTo(-4.3, -4.4, -4.6, -4.5).lineTo(-4.9, -4.6).curveTo(-5.4, -4.7, -5.4, -5.2).lineTo(-5.4, -5.4).curveTo(-5.4, -5.8, -4.9, -6).lineTo(-4.8, -6.1).curveTo(-4.1, -6.3, -2.4, -7.1).lineTo(-2.3, -7.2).lineTo(-2.2, -7.2).lineTo(-1.7, -7.4).curveTo(-1.4, -7.4, -1.2, -7.1).curveTo(-0.9, -6.9, -1, -6.3).lineTo(-1.1, -1.2).curveTo(-0.1, -1.8, 1, -1.8).curveTo(2.2, -1.8, 3.2, -0.9).curveTo(3.9, -0.3, 4.1, 0.5).lineTo(4.2, 2.1).lineTo(4.2, 5.7).lineTo(4.7, 5.7).curveTo(5.4, 5.7, 5.4, 6.4).lineTo(5.4, 6.7).curveTo(5.4, 7.4, 4.8, 7.4).closePath();
        this.shape_5.setTransform(14.475, 7.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 7, 0, -6.9).beginStroke().moveTo(-3.2, 6.5).lineTo(-3.3, 6.5).curveTo(-3.5, 6.9, -4.1, 6.9).curveTo(-4.8, 6.9, -4.8, 6.1).lineTo(-4.8, 6.1).lineTo(-4.4, 2.5).curveTo(-4.3, 2, -3.8, 2).lineTo(-3.8, 2).lineTo(-3.4, 2).curveTo(-2.8, 2, -2.8, 2.6).curveTo(-2.7, 3.7, -2.2, 4.6).curveTo(-1.4, 5.7, -0.1, 5.7).curveTo(0.6, 5.7, 1.1, 5.4).curveTo(1.9, 4.9, 1.9, 4).curveTo(1.9, 2.9, 1.4, 2.4).curveTo(1, 1.9, -0.6, 1.3).curveTo(-2.4, 0.7, -3.5, -0.4).curveTo(-4.6, -1.4, -4.6, -3.4).curveTo(-4.6, -5.3, -3.1, -6.5).curveTo(-1.8, -7.5, -0.1, -7.5).curveTo(1.1, -7.5, 2.4, -7).lineTo(2.6, -7.2).curveTo(2.9, -7.5, 3.2, -7.5).curveTo(3.8, -7.5, 3.8, -6.7).lineTo(4.1, -3.5).curveTo(4.1, -3, 3.7, -2.9).lineTo(3.2, -2.8).curveTo(2.7, -2.8, 2.6, -3.3).curveTo(2.1, -4.5, 1.5, -5.1).curveTo(0.9, -5.7, -0.1, -5.7).curveTo(-0.9, -5.7, -1.4, -5.2).curveTo(-1.8, -4.7, -1.8, -4.3).curveTo(-1.8, -3.4, -1.3, -2.9).curveTo(-0.7, -2.3, 0.8, -1.9).curveTo(2.8, -1.2, 3.7, -0.3).curveTo(4.8, 0.8, 4.8, 2.8).curveTo(4.8, 4.9, 3.5, 6.2).curveTo(2.2, 7.5, 0.3, 7.5).curveTo(-2, 7.5, -3.2, 6.5).closePath();
        this.shape_6.setTransform(4.775, 7.525);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS_show, new cjs.Rectangle(0, 0, 42.3, 15.1), null);


    (lib.mc_LOGO_BSPS_private = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-2.6, 3.2).curveTo(-3.7, 2, -3.7, 0.1).curveTo(-3.7, -1.5, -2.7, -2.7).curveTo(-1.6, -4.2, 0.6, -4.2).curveTo(2, -4.2, 2.9, -2.9).curveTo(3.5, -2.1, 3.5, -1.1).curveTo(3.5, -0.8, 2.9, -0.8).lineTo(-1.7, -0.8).lineTo(-1.7, -0.2).curveTo(-1.7, 1.1, -0.8, 2).curveTo(-0.1, 2.9, 0.8, 2.9).curveTo(2.3, 2.9, 3.1, 1.8).curveTo(3.1, 1.7, 3.1, 1.7).curveTo(3.1, 1.7, 3.2, 1.7).curveTo(3.2, 1.6, 3.2, 1.6).curveTo(3.3, 1.6, 3.3, 1.7).lineTo(3.6, 1.8).curveTo(3.6, 1.8, 3.7, 1.8).curveTo(3.7, 1.9, 3.7, 1.9).curveTo(3.7, 2, 3.7, 2).curveTo(3.6, 2.1, 3.6, 2.2).curveTo(2.5, 4.2, 0.1, 4.2).curveTo(-1.7, 4.2, -2.6, 3.2).closePath().moveTo(-1.6, -1.5).lineTo(0.7, -1.5).curveTo(1.3, -1.5, 1.3, -1.8).curveTo(1.3, -3.4, 0.1, -3.4).curveTo(-1.2, -3.5, -1.6, -1.5).closePath();
        this.shape.setTransform(49.2375, 9.95);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-1.2, 4.6).curveTo(-1.7, 4, -1.8, 3.4).lineTo(-1.6, -2).lineTo(-2.8, -2).curveTo(-2.8, -2, -2.9, -2).curveTo(-2.9, -2, -3, -2).curveTo(-3, -2, -3, -2.1).curveTo(-3.1, -2.1, -3.1, -2.2).curveTo(-3, -2.5, -2.7, -2.6).curveTo(-2.3, -2.7, -1.3, -3.6).curveTo(-0.4, -4.4, -0.1, -5).curveTo(-0, -5, -0, -5.1).curveTo(0, -5.1, 0, -5.1).curveTo(0.1, -5.1, 0.1, -5.1).curveTo(0.2, -5.1, 0.3, -5.1).curveTo(0.3, -5.1, 0.3, -5.1).curveTo(0.4, -5.1, 0.4, -5.1).curveTo(0.4, -5.1, 0.4, -5).curveTo(0.5, -5, 0.5, -4.9).lineTo(0.4, -3).lineTo(2.9, -3).curveTo(2.9, -3, 3, -3).curveTo(3, -3, 3, -3).curveTo(3, -2.9, 3, -2.9).curveTo(3.1, -2.9, 3.1, -2.9).lineTo(2.9, -2.1).lineTo(2.6, -2).lineTo(0.4, -2).lineTo(0.3, 2.3).curveTo(0.3, 4.1, 1.3, 4.1).curveTo(2, 4.1, 2.4, 3.9).curveTo(2.5, 3.8, 2.5, 3.8).curveTo(2.5, 3.8, 2.6, 3.8).curveTo(2.6, 3.8, 2.6, 3.9).curveTo(2.6, 3.9, 2.6, 3.9).lineTo(2.7, 4.2).curveTo(2.8, 4.2, 2.8, 4.2).curveTo(2.8, 4.2, 2.7, 4.3).curveTo(2.7, 4.3, 2.7, 4.3).curveTo(2.7, 4.4, 2.6, 4.4).curveTo(1.7, 5.1, 0.3, 5.1).curveTo(-0.5, 5.1, -1.2, 4.6).closePath();
        this.shape_1.setTransform(42.2, 9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(0.5, 3).lineTo(0.5, 3).curveTo(-0.2, 3.8, -1.2, 4.1).lineTo(-2.4, 4.2).curveTo(-3.7, 4.2, -3.7, 2.6).curveTo(-3.7, 1.1, -2, 0.2).lineTo(0.3, -0.9).lineTo(0.3, -1.9).curveTo(0.3, -2.7, 0, -3).curveTo(-0.2, -3.3, -0.9, -3.3).curveTo(-1.5, -3.3, -2, -2.9).curveTo(-2.1, -2.9, -2.1, -2.9).curveTo(-2.1, -2.8, -2.1, -2.8).curveTo(-2.2, -2.7, -2.2, -2.7).curveTo(-2.2, -2.6, -2.1, -2.5).lineTo(-2.1, -2).curveTo(-2.1, -0.9, -3.2, -0.9).curveTo(-3.9, -0.9, -3.9, -1.6).curveTo(-3.9, -2.5, -3, -3.1).curveTo(-1.6, -4.2, 0.1, -4.2).curveTo(1.2, -4.2, 1.8, -3.6).curveTo(2.3, -3.3, 2.3, -2.2).lineTo(2.3, 1.7).curveTo(2.3, 3, 2.8, 3).curveTo(3.3, 3, 3.4, 2.8).curveTo(3.4, 2.7, 3.5, 2.7).curveTo(3.5, 2.7, 3.5, 2.7).curveTo(3.5, 2.6, 3.6, 2.6).curveTo(3.6, 2.6, 3.6, 2.7).lineTo(3.8, 2.8).curveTo(3.8, 2.8, 3.9, 2.9).curveTo(3.9, 2.9, 3.9, 2.9).curveTo(3.9, 3, 3.9, 3).curveTo(3.9, 3.1, 3.9, 3.1).curveTo(3.2, 4.2, 2.1, 4.2).curveTo(1, 4.2, 0.5, 3).closePath().moveTo(-1, 0.5).curveTo(-1.7, 1.1, -1.7, 2).curveTo(-1.7, 3.1, -0.9, 3.1).curveTo(-0.5, 3.1, -0.1, 2.9).curveTo(0.3, 2.5, 0.3, 2.2).lineTo(0.3, -0.2).lineTo(-1, 0.5).closePath();
        this.shape_2.setTransform(35.295, 9.95);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-0.8, 3.7).lineTo(-3.5, -2.7).curveTo(-3.9, -3.4, -4.3, -3.4).lineTo(-4.7, -3.4).curveTo(-4.7, -3.4, -4.7, -3.4).curveTo(-4.7, -3.4, -4.7, -3.5).curveTo(-4.7, -3.5, -4.7, -3.5).curveTo(-4.8, -3.5, -4.8, -3.6).lineTo(-4.8, -4).curveTo(-4.8, -4, -4.7, -4).curveTo(-4.7, -4.1, -4.7, -4.1).curveTo(-4.7, -4.1, -4.7, -4.1).curveTo(-4.6, -4.1, -4.6, -4.1).lineTo(-0.6, -4.1).curveTo(-0.6, -4.1, -0.5, -4.1).curveTo(-0.5, -4.1, -0.4, -4.1).curveTo(-0.4, -4.1, -0.4, -4).curveTo(-0.4, -4, -0.4, -4).lineTo(-0.4, -3.6).curveTo(-0.4, -3.6, -0.4, -3.5).curveTo(-0.4, -3.5, -0.4, -3.5).curveTo(-0.5, -3.4, -0.5, -3.4).curveTo(-0.5, -3.4, -0.6, -3.4).lineTo(-0.8, -3.4).curveTo(-1.3, -3.4, -1.3, -3.1).curveTo(-1.2, -2.4, -0.6, -0.9).lineTo(0.3, 1.6).lineTo(0.4, 1.6).lineTo(2.1, -2.6).curveTo(2.2, -2.9, 2.1, -3.2).curveTo(2, -3.2, 2, -3.3).curveTo(2, -3.3, 1.9, -3.4).curveTo(1.9, -3.4, 1.8, -3.4).curveTo(1.7, -3.4, 1.6, -3.4).lineTo(1.3, -3.4).curveTo(1.3, -3.4, 1.3, -3.4).curveTo(1.3, -3.4, 1.3, -3.5).curveTo(1.3, -3.5, 1.3, -3.5).curveTo(1.3, -3.5, 1.3, -3.6).lineTo(1.3, -4).curveTo(1.3, -4, 1.3, -4).curveTo(1.3, -4.1, 1.3, -4.1).curveTo(1.3, -4.1, 1.3, -4.1).curveTo(1.4, -4.1, 1.4, -4.1).lineTo(4.6, -4.1).curveTo(4.6, -4.1, 4.6, -4.1).curveTo(4.7, -4.1, 4.7, -4.1).curveTo(4.7, -4.1, 4.7, -4).curveTo(4.8, -4, 4.8, -4).lineTo(4.8, -3.6).curveTo(4.8, -3.5, 4.7, -3.5).curveTo(4.7, -3.5, 4.7, -3.5).curveTo(4.7, -3.4, 4.7, -3.4).curveTo(4.6, -3.4, 4.6, -3.4).lineTo(4.3, -3.4).curveTo(3.8, -3.4, 3.6, -3.2).curveTo(3.3, -3, 2, -0.2).lineTo(0.2, 3.7).curveTo(-0.1, 4.1, -0.3, 4.1).curveTo(-0.6, 4.1, -0.8, 3.7).closePath();
        this.shape_3.setTransform(27.1, 10.075);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-2.2, 6.5).curveTo(-2.2, 6.5, -2.2, 6.5).curveTo(-2.3, 6.5, -2.3, 6.5).curveTo(-2.3, 6.5, -2.3, 6.4).curveTo(-2.3, 6.4, -2.3, 6.3).lineTo(-2.3, 6).curveTo(-2.3, 6, -2.3, 5.9).curveTo(-2.3, 5.9, -2.3, 5.9).curveTo(-2.2, 5.9, -2.2, 5.9).curveTo(-2.2, 5.9, -2.1, 5.9).lineTo(-1.3, 5.9).curveTo(-1, 5.8, -1, 5.4).lineTo(-0.9, 1).curveTo(-0.9, 0.2, -1.9, -0.1).curveTo(-2, -0.1, -2, -0.1).curveTo(-2.1, -0.2, -2.1, -0.2).curveTo(-2.1, -0.2, -2.1, -0.2).curveTo(-2.1, -0.3, -2.1, -0.3).lineTo(-2.1, -0.5).lineTo(-2, -0.7).lineTo(0.9, -1.7).curveTo(1, -1.7, 1, -1.7).curveTo(1.1, -1.7, 1.1, -1.6).curveTo(1.1, -1.6, 1.1, -1.6).curveTo(1.1, -1.5, 1.1, -1.5).lineTo(1.1, 5.4).curveTo(1.1, 5.8, 1.4, 5.9).lineTo(2.2, 5.9).curveTo(2.2, 5.9, 2.2, 5.9).curveTo(2.3, 5.9, 2.3, 5.9).curveTo(2.3, 5.9, 2.3, 5.9).curveTo(2.3, 5.9, 2.3, 6).lineTo(2.3, 6.3).curveTo(2.3, 6.4, 2.3, 6.4).curveTo(2.3, 6.5, 2.3, 6.5).curveTo(2.3, 6.5, 2.2, 6.5).curveTo(2.2, 6.5, 2.2, 6.5).closePath().moveTo(-1.3, -4.5).curveTo(-1.7, -4.9, -1.7, -5.4).curveTo(-1.7, -5.8, -1.3, -6.2).curveTo(-0.9, -6.5, -0.3, -6.5).curveTo(0.3, -6.5, 0.6, -6.2).curveTo(0.9, -5.9, 0.9, -5.4).curveTo(0.9, -4.2, -0.4, -4.2).curveTo(-0.9, -4.2, -1.3, -4.5).closePath();
        this.shape_4.setTransform(20.225, 7.45);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-3.1, 4.2).curveTo(-3.2, 4.2, -3.2, 4.2).curveTo(-3.2, 4.2, -3.2, 4.1).curveTo(-3.3, 4.1, -3.3, 4.1).curveTo(-3.3, 4.1, -3.3, 4).lineTo(-3.3, 3.6).curveTo(-3.3, 3.6, -3.3, 3.6).curveTo(-3.3, 3.5, -3.2, 3.5).curveTo(-3.2, 3.5, -3.2, 3.5).curveTo(-3.2, 3.5, -3.1, 3.5).lineTo(-2.4, 3.5).curveTo(-1.9, 3.5, -1.9, 2.9).lineTo(-1.9, -0.8).curveTo(-1.9, -1.4, -2.1, -1.7).curveTo(-2.2, -2, -2.7, -2.3).lineTo(-3, -2.5).curveTo(-3.1, -2.5, -3.1, -2.5).curveTo(-3.1, -2.5, -3.1, -2.5).curveTo(-3.2, -2.5, -3.2, -2.6).curveTo(-3.2, -2.6, -3.2, -2.6).lineTo(-3.2, -2.7).lineTo(-3, -2.9).lineTo(-0.7, -4).lineTo(-0.4, -4.1).curveTo(-0.4, -4.1, -0.4, -4.1).curveTo(-0.3, -4, -0.3, -4).curveTo(-0.3, -4, -0.3, -3.9).curveTo(-0.3, -3.9, -0.2, -3.8).lineTo(-0.1, -2.5).lineTo(0, -2.5).curveTo(1.1, -4.2, 2.3, -4.2).curveTo(3.3, -4.2, 3.3, -3.2).curveTo(3.3, -2.8, 3, -2.5).curveTo(2.7, -2.2, 2.3, -2.2).lineTo(1.6, -2.3).curveTo(1.5, -2.5, 1.1, -2.5).curveTo(0.6, -2.5, 0.3, -1.9).curveTo(0.1, -1.6, 0.1, -1).lineTo(0.1, 2.7).curveTo(0.1, 3.5, 0.6, 3.5).lineTo(1.4, 3.5).curveTo(1.5, 3.5, 1.5, 3.5).curveTo(1.5, 3.5, 1.5, 3.5).curveTo(1.6, 3.5, 1.6, 3.5).curveTo(1.6, 3.6, 1.6, 3.6).lineTo(1.6, 4).curveTo(1.6, 4.1, 1.6, 4.1).curveTo(1.6, 4.1, 1.5, 4.1).curveTo(1.5, 4.2, 1.5, 4.2).curveTo(1.5, 4.2, 1.4, 4.2).closePath();
        this.shape_5.setTransform(14.275, 9.825);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-5.2, 6.8).curveTo(-5.2, 6.8, -5.2, 6.8).curveTo(-5.3, 6.8, -5.3, 6.8).curveTo(-5.3, 6.7, -5.3, 6.7).curveTo(-5.3, 6.7, -5.3, 6.7).lineTo(-5.3, 6.2).curveTo(-5.3, 6.2, -5.3, 6.1).curveTo(-5.3, 6.1, -5.3, 6.1).curveTo(-5.3, 6.1, -5.2, 6.1).curveTo(-5.2, 6.1, -5.2, 6).lineTo(-4.6, 6).curveTo(-4.1, 6, -3.9, 6).curveTo(-3.8, 5.9, -3.7, 5.4).lineTo(-3.7, -5.6).curveTo(-3.7, -6.1, -4.4, -6).lineTo(-5.4, -6).lineTo(-5.5, -6.2).lineTo(-5.5, -6.6).curveTo(-5.5, -6.7, -5.5, -6.7).curveTo(-5.5, -6.7, -5.5, -6.8).curveTo(-5.4, -6.8, -5.4, -6.8).curveTo(-5.4, -6.8, -5.4, -6.8).lineTo(-0.4, -6.8).curveTo(2.7, -6.8, 4, -5.8).curveTo(5.5, -4.8, 5.5, -3).curveTo(5.5, -1.2, 4.2, -0.1).curveTo(2.8, 0.9, 0.4, 0.9).lineTo(-1.3, 0.8).lineTo(-1.3, 5.4).curveTo(-1.2, 6, -0.7, 6).lineTo(0.4, 6).curveTo(0.4, 6, 0.4, 6.1).curveTo(0.5, 6.1, 0.5, 6.1).curveTo(0.5, 6.1, 0.5, 6.1).curveTo(0.5, 6.1, 0.5, 6.1).lineTo(0.5, 6.6).curveTo(0.5, 6.6, 0.5, 6.7).curveTo(0.5, 6.7, 0.5, 6.7).curveTo(0.5, 6.8, 0.4, 6.8).curveTo(0.4, 6.8, 0.4, 6.8).closePath().moveTo(-1.3, -6).lineTo(-1.3, 0.1).curveTo(-0.7, 0.3, 0.1, 0.3).curveTo(0.7, 0.3, 1.4, -0.1).curveTo(2, -0.5, 2.4, -1).curveTo(2.8, -1.6, 2.8, -3).curveTo(2.8, -4.7, 1.7, -5.5).curveTo(0.8, -6.2, -0.2, -6.2).curveTo(-1, -6.2, -1.3, -6).closePath();
        this.shape_6.setTransform(5.925, 7.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 4.4, 0, -4.3).beginStroke().moveTo(-3, 3.5).curveTo(-4.2, 2.1, -4.2, 0).curveTo(-4.2, -1.7, -3.2, -3.1).curveTo(-1.9, -4.7, 0.5, -4.7).curveTo(2.1, -4.7, 3.1, -3.4).curveTo(3.9, -2.3, 3.9, -1.1).curveTo(3.9, -0.4, 2.9, -0.3).lineTo(-1.2, -0.3).lineTo(-1.2, -0.2).curveTo(-1.2, 0.9, -0.5, 1.7).curveTo(0, 2.3, 0.7, 2.4).curveTo(2.1, 2.3, 2.6, 1.5).curveTo(2.9, 1.1, 3.2, 1.1).lineTo(3.5, 1.2).lineTo(3.5, 1.2).lineTo(3.8, 1.4).curveTo(4.4, 1.8, 4, 2.4).curveTo(2.8, 4.6, 0.1, 4.7).curveTo(-1.9, 4.7, -3, 3.5).closePath().moveTo(-1, -2).lineTo(0.6, -2).lineTo(0.8, -2).curveTo(0.6, -3, 0.1, -3).curveTo(-0.7, -3, -1, -2).closePath();
        this.shape_7.setTransform(49.2592, 10.05);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 5.3, 0, -5.2).beginStroke().moveTo(-1.5, 4.9).curveTo(-2.2, 4.3, -2.2, 3.5).lineTo(-2.2, -1.5).lineTo(-2.8, -1.5).curveTo(-3.5, -1.5, -3.5, -2.2).curveTo(-3.5, -2.8, -2.9, -3).curveTo(-2.5, -3.1, -1.7, -3.9).curveTo(-0.8, -4.7, -0.5, -5.2).curveTo(-0.3, -5.6, 0.2, -5.6).curveTo(0.9, -5.6, 0.9, -4.9).lineTo(0.9, -3.5).lineTo(2.9, -3.5).curveTo(3.2, -3.5, 3.4, -3.3).curveTo(3.5, -3, 3.5, -2.7).lineTo(3.3, -2).curveTo(3.2, -1.5, 2.6, -1.5).lineTo(0.8, -1.5).lineTo(0.7, 2.3).curveTo(0.7, 3.6, 1.3, 3.6).curveTo(1.8, 3.6, 2.2, 3.4).lineTo(2.5, 3.3).curveTo(2.9, 3.3, 3, 3.7).lineTo(3.2, 4).curveTo(3.3, 4.4, 3, 4.7).lineTo(2.9, 4.8).curveTo(1.9, 5.6, 0.2, 5.6).curveTo(-0.8, 5.6, -1.5, 4.9).closePath();
        this.shape_8.setTransform(42.2063, 9.075);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 4.4, 0, -4.3).beginStroke().moveTo(-4.9, 4).lineTo(-7.6, -2.4).curveTo(-7.8, -2.9, -8, -2.9).lineTo(-8.3, -2.9).curveTo(-8.9, -2.9, -8.9, -3.5).lineTo(-8.9, -3.9).curveTo(-8.9, -4.5, -8.3, -4.5).lineTo(-4.3, -4.5).curveTo(-3.6, -4.5, -3.6, -3.9).lineTo(-3.6, -3.5).curveTo(-3.6, -2.9, -4.2, -2.9).lineTo(-4.4, -2.9).lineTo(-3.3, 0.5).curveTo(-2.3, -1.8, -2.1, -2.6).lineTo(-2, -2.9).lineTo(-2.3, -2.9).curveTo(-2.9, -2.9, -2.9, -3.5).lineTo(-2.9, -3.9).curveTo(-2.9, -4.5, -2.3, -4.5).lineTo(0.9, -4.5).curveTo(1.5, -4.5, 1.5, -3.9).lineTo(1.5, -3.8).curveTo(3, -4.7, 4.6, -4.7).curveTo(5.9, -4.7, 6.7, -4.1).curveTo(7.3, -3.5, 7.3, -2.3).lineTo(7.4, 2.5).lineTo(7.5, 2.4).curveTo(7.8, 2.1, 8, 2.1).lineTo(8.3, 2.2).lineTo(8.4, 2.2).lineTo(8.6, 2.3).curveTo(9, 2.7, 8.8, 3.2).lineTo(8.8, 3.3).curveTo(8, 4.7, 6.6, 4.7).curveTo(5.5, 4.7, 4.9, 3.8).curveTo(4.2, 4.3, 3.5, 4.5).curveTo(2.9, 4.7, 2.1, 4.7).curveTo(1.4, 4.7, 0.9, 4.1).curveTo(0.3, 3.5, 0.3, 2.5).curveTo(0.3, 0.6, 2.3, -0.3).lineTo(4.4, -1.3).lineTo(4.4, -2).lineTo(4.2, -2.7).lineTo(3.6, -2.8).curveTo(3.2, -2.8, 2.8, -2.6).lineTo(2.9, -2.5).lineTo(2.9, -2.1).curveTo(2.9, -0.5, 1.3, -0.5).curveTo(0.8, -0.5, 0.5, -0.8).curveTo(0.1, -1.1, 0.1, -1.6).curveTo(0.1, -2.3, 0.6, -2.9).curveTo(0.5, -2.9, 0.4, -2.9).curveTo(0.4, -2.9, 0.3, -2.8).curveTo(0.3, -2.8, 0.3, -2.8).curveTo(0.2, -2.8, 0.2, -2.8).curveTo(-0.2, -2.3, -1.2, -0.1).lineTo(-1.3, 0.1).lineTo(-3, 4).curveTo(-3.4, 4.7, -4, 4.7).curveTo(-4.6, 4.7, -4.9, 4).closePath().moveTo(3.2, 2).curveTo(3.2, 2.6, 3.6, 2.6).curveTo(4.1, 2.6, 4.4, 2.2).lineTo(4.4, 0.5).curveTo(3.2, 1.2, 3.2, 2).closePath();
        this.shape_9.setTransform(30.7583, 10.075);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 1.6, 0, -1.5).beginStroke().moveTo(-1.3, 1.2).curveTo(-1.8, 0.7, -1.8, 0).curveTo(-1.8, -0.7, -1.3, -1.2).curveTo(-0.7, -1.7, 0.1, -1.7).curveTo(0.9, -1.7, 1.4, -1.2).curveTo(1.8, -0.7, 1.8, -0.1).curveTo(1.8, 0.6, 1.4, 1.1).curveTo(0.8, 1.7, -0, 1.7).curveTo(-0.7, 1.7, -1.3, 1.2).closePath();
        this.shape_10.setTransform(19.825, 2.175);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 2.5, 0, -0.6).beginStroke().moveTo(-0.9, -0.8).curveTo(-0.1, -0.8, 0.4, -0.3).curveTo(0.9, 0.2, 0.9, 0.8).closePath();
        this.shape_11.setTransform(20.775, 1.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 0.8, 0, -2.2).beginStroke().moveTo(0.9, -0.9).curveTo(0.9, -0.2, 0.5, 0.3).curveTo(-0.1, 0.9, -0.9, 0.9).closePath();
        this.shape_12.setTransform(20.725, 2.975);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 0.8, 0, -2.3).beginStroke().moveTo(-0.4, 0.4).curveTo(-0.9, -0.1, -0.9, -0.8).lineTo(0.9, 0.8).curveTo(0.2, 0.8, -0.4, 0.4).closePath();
        this.shape_13.setTransform(18.9, 3.025);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 2.4, 0, -0.6).beginStroke().moveTo(-0.4, -0.3).curveTo(0.2, -0.8, 0.9, -0.9).lineTo(-0.9, 0.8).curveTo(-0.9, 0.2, -0.4, -0.3).closePath();
        this.shape_14.setTransform(18.95, 1.35);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginLinearGradientFill(["#DFD09D", "#DFD09D", "#8B774D", "#8F7C51", "#AC9A6E", "#C3B385", "#D2C395", "#D8CA9B"], [0, 0, 0.518, 0.537, 0.678, 0.804, 0.918, 1], 0, 6.8, 0, -6.7).beginStroke().moveTo(6.5, 7.3).curveTo(5.9, 7.3, 5.9, 6.6).lineTo(5.9, 6.2).curveTo(5.9, 5.6, 6.6, 5.6).lineTo(7.2, 5.6).lineTo(7.3, 1.3).curveTo(7.3, 1.2, 7.3, 1.2).curveTo(7.3, 1.1, 7.3, 1).curveTo(7.2, 1, 7.2, 0.9).curveTo(7.2, 0.9, 7.2, 0.9).curveTo(7.1, 0.7, 6.6, 0.6).lineTo(6.2, 0.3).curveTo(5.7, 0.9, 5, 0.9).lineTo(4.1, 0.7).lineTo(4.1, 0.7).lineTo(3.8, 0.6).curveTo(3.6, 0.6, 3.4, 0.9).lineTo(3.3, 1.6).lineTo(3.3, 5.3).lineTo(3.3, 5.6).lineTo(4.2, 5.6).curveTo(4.8, 5.6, 4.8, 6.2).lineTo(4.8, 6.7).curveTo(4.8, 7.3, 4.2, 7.3).lineTo(-0.4, 7.3).curveTo(-1, 7.3, -1, 6.7).lineTo(-1, 6.2).curveTo(-1, 5.6, -0.4, 5.6).lineTo(0.3, 5.6).lineTo(0.3, 1.8).lineTo(0.2, 1.1).curveTo(0.2, 1, 0.2, 1).curveTo(0.2, 1, 0.1, 0.9).curveTo(0.1, 0.9, 0, 0.8).curveTo(-0, 0.8, -0.1, 0.8).lineTo(-0.5, 0.6).curveTo(-0.9, 0.5, -0.9, 0).curveTo(-2.4, 1.4, -5.2, 1.4).lineTo(-6.4, 1.4).lineTo(-6.4, 5.4).lineTo(-6.3, 5.5).lineTo(-5.2, 5.5).curveTo(-4.6, 5.5, -4.6, 6.2).lineTo(-4.6, 6.6).curveTo(-4.6, 7.3, -5.2, 7.3).lineTo(-10.8, 7.3).curveTo(-11.4, 7.3, -11.4, 6.7).lineTo(-11.4, 6.2).curveTo(-11.4, 5.5, -10.8, 5.5).lineTo(-9.8, 5.5).lineTo(-9.8, -5.5).lineTo(-11, -5.5).curveTo(-11.5, -5.5, -11.5, -6.2).lineTo(-11.5, -6.6).curveTo(-11.5, -7.3, -11, -7.3).lineTo(-6, -7.3).curveTo(-4.2, -7.3, -3.2, -7).curveTo(-2.1, -6.8, -1.3, -6.2).curveTo(0.4, -5, 0.4, -2.9).curveTo(0.4, -1.8, -0.2, -0.8).lineTo(1.9, -1.8).lineTo(2.3, -1.9).curveTo(2.9, -1.9, 3, -1.3).lineTo(3, -1).curveTo(3.9, -2, 5, -2).curveTo(6.3, -2, 6.5, -0.8).lineTo(6.5, -0.8).lineTo(9, -1.8).curveTo(9.8, -2.1, 10.1, -1.7).curveTo(10.3, -1.5, 10.3, -1.1).lineTo(10.3, 5.6).lineTo(10.9, 5.6).curveTo(11.5, 5.6, 11.5, 6.2).lineTo(11.5, 6.6).curveTo(11.5, 7.3, 10.9, 7.3).closePath().moveTo(-6.4, -5.6).lineTo(-6.4, -0.2).lineTo(-5.5, -0.2).curveTo(-5, -0.2, -4.4, -0.5).curveTo(-3.9, -0.8, -3.6, -1.3).curveTo(-3.3, -1.8, -3.3, -3).curveTo(-3.3, -4.6, -4.5, -5.3).lineTo(-5.8, -5.7).lineTo(-6, -5.7).closePath();
        this.shape_15.setTransform(11.525, 7.275);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS_private, new cjs.Rectangle(0, 0, 53.4, 14.8), null);


    (lib.mc_LOGO_BSPS_new = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-1.3, 1.4).curveTo(-2, 0.8, -1.9, 0).curveTo(-2, -0.8, -1.3, -1.3).curveTo(-0.8, -2, 0, -2).curveTo(0.4, -2, 0.8, -1.8).curveTo(1.3, -1.4, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0.1, 1.9).curveTo(-0.9, 2, -1.3, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.2, -0.8).curveTo(-1.4, -0.4, -1.5, 0).curveTo(-1.4, 0.5, -1.2, 0.7).curveTo(-1, 1.2, -0.7, 1.3).curveTo(-0.5, 1.5, 0, 1.5).curveTo(0.5, 1.5, 0.8, 1.4).curveTo(1.1, 1.1, 1.3, 0.8).curveTo(1.5, 0.4, 1.5, 0).curveTo(1.5, -0.6, 1, -1.1).curveTo(0.7, -1.5, 0, -1.5).curveTo(-0.3, -1.5, -0.7, -1.3).closePath();
        this.shape.setTransform(64.9, 3.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-0.2, 2.6).lineTo(-0.2, -1.1).lineTo(0.2, -1.1).lineTo(0.2, 2.6).closePath().moveTo(-0.3, -1.9).lineTo(-0.4, -2.2).lineTo(-0.3, -2.5).lineTo(0, -2.6).lineTo(0.3, -2.5).lineTo(0.4, -2.2).lineTo(0.3, -1.9).lineTo(0, -1.8).closePath();
        this.shape_1.setTransform(61.85, 2.625);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-1.3, 1.4).curveTo(-1.9, 0.9, -1.9, 0).curveTo(-1.9, -0.5, -1.6, -1).curveTo(-1.3, -1.4, -0.9, -1.7).curveTo(-0.4, -1.9, 0.2, -2).lineTo(0.9, -1.9).lineTo(1.5, -1.5).lineTo(1.9, -1.1).lineTo(1.5, -0.9).curveTo(1, -1.5, 0.2, -1.5).curveTo(-0.5, -1.5, -1, -1.1).curveTo(-1.4, -0.6, -1.4, 0).curveTo(-1.4, 0.4, -1.2, 0.7).curveTo(-1, 1.1, -0.6, 1.4).lineTo(0.2, 1.5).curveTo(1, 1.5, 1.5, 0.8).lineTo(1.9, 1.1).curveTo(1.7, 1.5, 1.2, 1.7).curveTo(0.8, 1.9, 0.2, 1.9).curveTo(-0.8, 2, -1.3, 1.4).closePath();
        this.shape_2.setTransform(58.825, 3.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(1.1, 1.9).lineTo(1.1, -0.7).curveTo(1, -1.1, 0.8, -1.3).curveTo(0.6, -1.5, 0.1, -1.5).curveTo(-0.3, -1.5, -0.6, -1.2).curveTo(-1, -0.9, -1.1, -0.5).lineTo(-1.2, 0.5).lineTo(-1.2, 1.9).lineTo(-1.6, 1.9).lineTo(-1.6, -1.8).lineTo(-1.2, -1.8).lineTo(-1.2, -1.2).curveTo(-0.8, -1.6, -0.5, -1.7).curveTo(-0.2, -1.9, 0.2, -1.9).curveTo(0.6, -1.9, 1, -1.7).curveTo(1.3, -1.4, 1.5, -1.1).curveTo(1.6, -0.7, 1.6, -0).lineTo(1.6, 1.9).closePath();
        this.shape_3.setTransform(54.425, 3.35);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.7, -1.9, 0).curveTo(-1.9, -0.8, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.2, -1.5, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0, 1.9).curveTo(-0.9, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.3, -0.8).lineTo(-1.4, 0).curveTo(-1.4, 0.5, -1.2, 0.7).curveTo(-1.1, 1.1, -0.7, 1.3).curveTo(-0.4, 1.5, 0, 1.5).lineTo(0.8, 1.4).lineTo(1.3, 0.8).lineTo(1.5, 0).curveTo(1.5, -0.7, 1.1, -1.1).curveTo(0.6, -1.5, 0, -1.5).lineTo(-0.7, -1.3).closePath();
        this.shape_4.setTransform(49.725, 3.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-0.9, 2.5).lineTo(-1.4, 2.2).lineTo(-1.9, 1.5).lineTo(-1.3, 1.5).curveTo(-1.2, 1.9, -0.9, 2).curveTo(-0.3, 2.2, 0, 2.2).curveTo(0.3, 2.2, 0.8, 2).curveTo(1.2, 1.9, 1.3, 1.6).curveTo(1.4, 1.3, 1.5, 0.7).lineTo(1.5, 0.5).curveTo(1.3, 0.7, 0.8, 1).curveTo(0.5, 1.2, -0.1, 1.2).curveTo(-0.6, 1.2, -1, 0.9).curveTo(-1.5, 0.7, -1.7, 0.3).curveTo(-1.9, -0.2, -2, -0.7).curveTo(-1.9, -1.2, -1.7, -1.7).curveTo(-1.4, -2.1, -1, -2.4).curveTo(-0.4, -2.6, 0, -2.6).curveTo(0.4, -2.6, 0.7, -2.4).curveTo(1.2, -2.3, 1.5, -1.9).lineTo(1.5, -2.5).lineTo(2, -2.5).lineTo(2, 0.4).curveTo(2, 1.2, 1.8, 1.6).curveTo(1.6, 2.1, 1.2, 2.4).curveTo(0.8, 2.6, 0, 2.6).lineTo(-0.9, 2.5).closePath().moveTo(-0.7, -2).curveTo(-1.1, -1.7, -1.3, -1.4).curveTo(-1.4, -1.1, -1.4, -0.7).curveTo(-1.4, -0.1, -1.1, 0.3).curveTo(-0.6, 0.7, 0, 0.7).curveTo(0.7, 0.7, 1.1, 0.3).curveTo(1.5, -0.1, 1.5, -0.7).curveTo(1.5, -1, 1.3, -1.4).curveTo(1.1, -1.8, 0.7, -2).curveTo(0.4, -2.2, 0, -2.2).curveTo(-0.3, -2.2, -0.7, -2).closePath();
        this.shape_5.setTransform(44.95, 4.075);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.7, -1.9, 0).curveTo(-1.9, -0.8, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.2, -1.5, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.5, 1.9, -0, 1.9).curveTo(-0.8, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).curveTo(-1.1, -1, -1.2, -0.8).curveTo(-1.4, -0.4, -1.4, 0).curveTo(-1.4, 0.5, -1.2, 0.7).curveTo(-1.1, 1.1, -0.7, 1.3).curveTo(-0.4, 1.5, 0, 1.5).lineTo(0.8, 1.4).lineTo(1.3, 0.8).lineTo(1.5, 0).curveTo(1.5, -0.6, 1.1, -1.1).curveTo(0.6, -1.5, 0, -1.5).lineTo(-0.7, -1.3).closePath();
        this.shape_6.setTransform(40.125, 3.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-0.9, 1.9).lineTo(-0.9, -1.8).lineTo(-0.5, -1.8).lineTo(-0.5, -1.3).lineTo(0, -1.7).lineTo(0.5, -1.9).lineTo(0.9, -1.7).lineTo(0.7, -1.4).lineTo(0.4, -1.5).lineTo(-0, -1.3).curveTo(-0.2, -1.1, -0.4, -0.6).lineTo(-0.5, 0.6).lineTo(-0.5, 1.9).closePath();
        this.shape_7.setTransform(36.975, 3.35);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-0.4, 2.6).lineTo(-0.4, -0.7).lineTo(-0.9, -0.7).lineTo(-0.9, -1.1).lineTo(-0.4, -1.1).lineTo(-0.4, -2.2).lineTo(-0.1, -2.5).lineTo(0.4, -2.6).lineTo(0.9, -2.5).lineTo(0.9, -2).lineTo(0.5, -2.2).lineTo(0.2, -2.1).lineTo(0.1, -2).lineTo(0.1, -1.1).lineTo(0.8, -1.1).lineTo(0.8, -0.7).lineTo(0, -0.7).lineTo(0, 2.6).closePath();
        this.shape_8.setTransform(34.6, 2.625);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.8, -1.9, 0).curveTo(-1.9, -0.9, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.2, -1.5, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0, 1.9).curveTo(-0.9, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.3, -0.8).lineTo(-1.5, 0).curveTo(-1.5, 0.4, -1.3, 0.7).curveTo(-1, 1.1, -0.7, 1.3).curveTo(-0.4, 1.5, 0, 1.5).lineTo(0.8, 1.4).curveTo(1.1, 1.1, 1.3, 0.8).curveTo(1.5, 0.4, 1.5, 0).curveTo(1.5, -0.6, 1.1, -1.1).curveTo(0.6, -1.5, 0, -1.5).lineTo(-0.7, -1.3).closePath();
        this.shape_9.setTransform(28.925, 3.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(0, 1.8).lineTo(-1.8, -1.9).lineTo(-1.2, -1.9).lineTo(0, 0.8).lineTo(1.3, -1.9).lineTo(1.7, -1.9).lineTo(0, 1.8).closePath();
        this.shape_10.setTransform(24.6, 3.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.8, -1.9, 0).curveTo(-1.9, -0.7, -1.5, -1.2).curveTo(-0.9, -2, -0, -2).curveTo(1, -1.9, 1.5, -1.2).curveTo(1.9, -0.7, 1.9, 0).lineTo(-1.4, 0).curveTo(-1.4, 0.7, -1, 1.1).curveTo(-0.7, 1.5, -0, 1.5).lineTo(0.5, 1.4).lineTo(1, 1.2).lineTo(1.4, 0.6).lineTo(1.8, 0.8).lineTo(1.3, 1.5).lineTo(0.7, 1.8).lineTo(0, 1.9).curveTo(-0.9, 1.9, -1.4, 1.4).closePath().moveTo(-1, -1.2).curveTo(-1.2, -0.9, -1.4, -0.3).lineTo(1.4, -0.3).curveTo(1.3, -0.8, 1.1, -1).curveTo(1, -1.2, 0.6, -1.3).curveTo(0.3, -1.5, -0, -1.5).curveTo(-0.4, -1.5, -1, -1.2).closePath();
        this.shape_11.setTransform(20.375, 3.4);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(-0.9, 1.7).curveTo(-1.3, 1.5, -1.4, 1.1).curveTo(-1.6, 0.7, -1.6, -0.1).lineTo(-1.6, -1.9).lineTo(-1.1, -1.9).lineTo(-1.1, 0.7).curveTo(-1, 1, -0.7, 1.2).curveTo(-0.4, 1.4, 0, 1.4).curveTo(0.5, 1.4, 0.7, 1.2).curveTo(1, 1.1, 1.1, 0.8).lineTo(1.1, -1.9).lineTo(1.6, -1.9).lineTo(1.6, -0).curveTo(1.6, 0.6, 1.5, 1.1).curveTo(1.2, 1.5, 0.9, 1.7).curveTo(0.6, 1.9, 0, 1.9).curveTo(-0.6, 1.9, -0.9, 1.7).closePath();
        this.shape_12.setTransform(15.875, 3.45);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(1.1, 1.9).lineTo(1.1, -0.7).curveTo(1, -1.1, 0.8, -1.3).curveTo(0.6, -1.5, 0.2, -1.5).curveTo(-0.2, -1.5, -0.6, -1.2).curveTo(-1, -0.9, -1.1, -0.5).lineTo(-1.1, 1.9).lineTo(-1.6, 1.9).lineTo(-1.6, -1.8).lineTo(-1.1, -1.8).lineTo(-1.1, -1.2).curveTo(-0.9, -1.5, -0.5, -1.7).curveTo(-0.2, -1.9, 0.2, -1.9).curveTo(0.6, -1.9, 1, -1.7).curveTo(1.3, -1.5, 1.5, -1.1).curveTo(1.6, -0.7, 1.6, -0).lineTo(1.6, 1.9).closePath();
        this.shape_13.setTransform(11.625, 3.35);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-1.4, 1.4).curveTo(-2, 0.7, -1.9, 0).curveTo(-1.9, -0.8, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.3, -1.4, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0, 1.9).curveTo(-0.9, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.2, -0.8).curveTo(-1.5, -0.4, -1.5, 0).curveTo(-1.5, 0.5, -1.2, 0.7).curveTo(-1, 1.2, -0.7, 1.3).curveTo(-0.4, 1.5, -0, 1.5).curveTo(0.5, 1.5, 0.8, 1.4).curveTo(1.2, 1.1, 1.3, 0.8).curveTo(1.5, 0.4, 1.5, 0).curveTo(1.5, -0.6, 1, -1.1).curveTo(0.7, -1.5, 0.1, -1.5).curveTo(-0.3, -1.5, -0.7, -1.3).closePath();
        this.shape_14.setTransform(4.95, 3.4);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill("#000000").beginStroke().moveTo(-1.2, 2.5).lineTo(-1.2, -2.5).lineTo(-0.7, -2.5).lineTo(-0.7, 2).lineTo(1.2, 2).lineTo(1.2, 2.5).closePath();
        this.shape_15.setTransform(1.2, 2.75);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS_new, new cjs.Rectangle(0, 0, 66.9, 6.7), null);


    (lib.mc_LOGO_BSPS_ko = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.8, 0.9).lineTo(1.8, -0.6).lineTo(1.1, 0.9).lineTo(0.9, 0.9).lineTo(0.2, -0.6).lineTo(0.2, 0.9).lineTo(-0.1, 0.9).lineTo(-0.1, -0.9).lineTo(0.4, -0.9).lineTo(1, 0.3).lineTo(1.6, -0.9).lineTo(2.1, -0.9).lineTo(2.1, 0.9).closePath().moveTo(-1.4, 0.9).lineTo(-1.4, -0.6).lineTo(-2.1, -0.6).lineTo(-2.1, -0.9).lineTo(-0.5, -0.9).lineTo(-0.5, -0.6).lineTo(-1.1, -0.6).lineTo(-1.1, 0.9).closePath();
        this.shape.setTransform(96.225, 19.725);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3, 3.8).curveTo(-1.9, 3.4, -2.4, 2.6).lineTo(-1.7, 2.1).curveTo(-1, 3.5, -0, 3.5).curveTo(0.3, 3.5, 0.7, 3.3).curveTo(1.2, 3.1, 1.3, 2.8).curveTo(1.5, 2.5, 1.5, 2.1).curveTo(1.5, 1.7, 1.2, 1.3).curveTo(0.7, 0.7, -0.2, -0).curveTo(-1.2, -0.7, -1.4, -1.1).curveTo(-1.9, -1.7, -1.9, -2.4).curveTo(-1.9, -2.8, -1.6, -3.3).curveTo(-1.4, -3.8, -0.9, -4).curveTo(-0.4, -4.2, 0.1, -4.3).curveTo(0.7, -4.3, 1.2, -4).curveTo(1.6, -3.8, 2.2, -2.9).lineTo(1.6, -2.4).curveTo(1.1, -3.1, 0.8, -3.2).curveTo(0.5, -3.4, 0.1, -3.4).curveTo(-0.4, -3.4, -0.7, -3.1).curveTo(-1, -2.8, -1, -2.4).lineTo(-0.9, -1.8).lineTo(-0.5, -1.3).lineTo(0.5, -0.5).curveTo(1.5, 0.1, 2, 0.9).curveTo(2.4, 1.5, 2.4, 2.1).curveTo(2.4, 3, 1.7, 3.6).curveTo(1, 4.3, 0.1, 4.2).curveTo(-0.7, 4.2, -1.3, 3.8).closePath();
        this.shape_1.setTransform(91.275, 22.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6, 4.1).lineTo(-1.3, 0.3).lineTo(-1.8, 0.3).lineTo(-1.8, 4.1).lineTo(-2.6, 4.1).lineTo(-2.6, -4.1).lineTo(-0.9, -4.1).lineTo(0.8, -4).curveTo(1.7, -3.7, 2, -3.3).curveTo(2.5, -2.7, 2.5, -1.9).curveTo(2.5, -1.2, 2.2, -0.7).curveTo(1.9, -0.3, 1.3, 0).curveTo(0.7, 0.3, -0.3, 0.3).lineTo(2.6, 4.1).closePath().moveTo(-1.8, -0.5).lineTo(-0.3, -0.5).curveTo(0.5, -0.5, 0.8, -0.7).curveTo(1.3, -0.8, 1.5, -1.2).curveTo(1.7, -1.4, 1.7, -1.9).curveTo(1.7, -2.3, 1.5, -2.7).curveTo(1.3, -3, 0.8, -3.1).curveTo(0.5, -3.3, -0.3, -3.3).lineTo(-1.8, -3.3).closePath();
        this.shape_2.setTransform(85.1, 22.725);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.1, 4).lineTo(1.8, 1.4).lineTo(-1.7, 1.4).lineTo(-2.9, 4).lineTo(-3.9, 4).lineTo(-0.1, -4.1).lineTo(0.1, -4.1).lineTo(3.9, 4).closePath().moveTo(1.5, 0.6).lineTo(0, -2.4).lineTo(-1.3, 0.6).lineTo(1.5, 0.6).closePath();
        this.shape_3.setTransform(77.1, 22.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3, 4).lineTo(-2.3, -4.1).lineTo(2.3, -4.1).lineTo(2.3, -3.3).lineTo(-1.5, -3.3).lineTo(-1.5, -0.7).lineTo(2.3, -0.7).lineTo(2.3, 0.1).lineTo(-1.5, 0.1).lineTo(-1.5, 3.3).lineTo(2.3, 3.3).lineTo(2.3, 4).closePath();
        this.shape_4.setTransform(70.075, 22.7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5, 4).lineTo(-2.5, -4.1).lineTo(-0.9, -4.1).curveTo(0.5, -4, 0.9, -3.9).curveTo(1.6, -3.8, 2.1, -3.2).curveTo(2.5, -2.6, 2.5, -1.9).curveTo(2.5, -1, 2.1, -0.6).curveTo(1.6, 0, 0.9, 0.2).curveTo(0.3, 0.3, -1.2, 0.3).lineTo(-1.7, 0.3).lineTo(-1.7, 4).closePath().moveTo(-1.7, -0.5).lineTo(-0.4, -0.5).curveTo(0.4, -0.5, 0.9, -0.7).curveTo(1.3, -0.8, 1.5, -1.1).curveTo(1.7, -1.5, 1.7, -1.9).curveTo(1.7, -2.3, 1.5, -2.6).curveTo(1.3, -2.9, 0.9, -3.1).curveTo(0.5, -3.2, -0.3, -3.3).lineTo(-1.7, -3.3).closePath();
        this.shape_5.setTransform(63.875, 22.7);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3, 3.8).curveTo(-1.8, 3.5, -2.4, 2.6).lineTo(-1.7, 2.1).curveTo(-0.9, 3.5, -0, 3.5).lineTo(0.8, 3.3).lineTo(1.3, 2.8).curveTo(1.5, 2.5, 1.5, 2.1).curveTo(1.5, 1.7, 1.2, 1.3).curveTo(0.8, 0.7, -0.2, -0).curveTo(-1.3, -0.8, -1.4, -1.1).curveTo(-1.9, -1.7, -1.9, -2.4).curveTo(-1.9, -2.8, -1.6, -3.3).curveTo(-1.3, -3.8, -0.9, -4).curveTo(-0.4, -4.2, 0.1, -4.3).curveTo(0.7, -4.3, 1.2, -4).curveTo(1.7, -3.6, 2.2, -2.9).lineTo(1.6, -2.4).curveTo(1.1, -3.1, 0.8, -3.2).curveTo(0.5, -3.4, 0.1, -3.4).curveTo(-0.4, -3.4, -0.7, -3.1).curveTo(-1, -2.8, -1, -2.4).lineTo(-0.9, -1.8).lineTo(-0.5, -1.3).lineTo(0.5, -0.5).curveTo(1.6, 0.3, 2, 0.9).curveTo(2.4, 1.5, 2.4, 2.1).curveTo(2.4, 3, 1.7, 3.6).curveTo(1, 4.3, 0.1, 4.2).curveTo(-0.7, 4.2, -1.3, 3.8).closePath();
        this.shape_6.setTransform(57.075, 22.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.6, 4).lineTo(4, -0.1).lineTo(2.3, 4.1).curveTo(2, 4.7, 1.4, 4.7).curveTo(0.8, 4.7, 0.5, 4).lineTo(-2.1, -2.7).curveTo(-2.1, -2.7, -2.1, -2.8).curveTo(-2.1, -2.8, -2.2, -2.8).curveTo(-2.2, -2.8, -2.2, -2.9).curveTo(-2.3, -2.9, -2.3, -2.9).lineTo(-2.7, -2.9).lineTo(-2.9, -2.9).curveTo(-1.9, -1.6, -1.9, -0.1).curveTo(-1.9, 1.7, -3.2, 3.1).curveTo(-4.6, 4.6, -6.8, 4.6).curveTo(-9, 4.6, -10.2, 3.1).curveTo(-11.4, 1.7, -11.4, -0.2).curveTo(-11.4, -2.3, -9.6, -3.7).curveTo(-8.4, -4.7, -6.6, -4.7).curveTo(-4.7, -4.7, -3.4, -3.4).lineTo(-3.2, -3.3).lineTo(-3.3, -3.5).lineTo(-3.3, -3.9).curveTo(-3.3, -4.5, -2.6, -4.5).lineTo(1, -4.5).curveTo(1.6, -4.5, 1.6, -3.9).lineTo(1.6, -3.5).curveTo(1.6, -3, 1.1, -2.9).lineTo(2.1, 0.2).lineTo(3.1, -2.4).lineTo(3, -2.7).lineTo(2.7, -2.7).curveTo(2.1, -2.7, 2.1, -3.4).lineTo(2.1, -3.8).curveTo(2.1, -4.4, 2.7, -4.4).lineTo(4.7, -4.4).lineTo(5.9, -4.4).lineTo(6.1, -4.4).curveTo(6.8, -4.4, 6.8, -3.8).lineTo(6.8, -3.4).curveTo(6.8, -2.7, 6.2, -2.7).lineTo(6.1, -2.7).lineTo(7.1, -0).lineTo(7.9, -2.3).lineTo(8, -2.9).lineTo(7.7, -2.9).curveTo(7.1, -2.9, 7.1, -3.5).lineTo(7.1, -3.9).curveTo(7.1, -4.5, 7.7, -4.5).lineTo(10.7, -4.5).curveTo(11.4, -4.5, 11.4, -3.9).lineTo(11.4, -3.5).curveTo(11.4, -2.9, 10.7, -2.9).lineTo(10.4, -2.9).lineTo(10.1, -2.8).lineTo(7.3, 4.2).curveTo(6.9, 4.7, 6.4, 4.7).curveTo(5.9, 4.7, 5.6, 4).closePath().moveTo(-7.5, -2.6).curveTo(-8.2, -1.9, -8.2, -0.1).curveTo(-8.2, 1.5, -7.7, 2.3).curveTo(-7.3, 2.9, -6.6, 2.9).curveTo(-6, 2.9, -5.6, 1.9).curveTo(-5.2, 1.1, -5.2, -0.2).curveTo(-5.2, -1.4, -5.8, -2.3).curveTo(-6.2, -3, -6.7, -3).curveTo(-7.2, -3, -7.5, -2.6).closePath();
        this.shape_7.setTransform(88.625, 10.325);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9, 7.4).curveTo(0.2, 7.4, 0.2, 6.8).lineTo(0.2, 6.4).curveTo(0.2, 5.7, 0.9, 5.7).lineTo(1.2, 5.7).lineTo(1.3, 2.7).curveTo(1.3, 0.9, 0.9, 0.5).curveTo(0.6, 0.2, 0.2, 0.2).curveTo(-0.4, 0.2, -0.8, 0.7).curveTo(-1.1, 1.1, -1.1, 1.3).lineTo(-1.1, 5.7).lineTo(-0.8, 5.7).curveTo(-0.1, 5.8, -0.1, 6.4).lineTo(-0.1, 6.7).curveTo(-0.1, 7.4, -0.7, 7.4).lineTo(-4.7, 7.4).curveTo(-5.4, 7.4, -5.4, 6.7).lineTo(-5.4, 6.4).curveTo(-5.4, 5.7, -4.7, 5.7).lineTo(-4.3, 5.7).lineTo(-4.1, 5.7).lineTo(-4.1, -3.3).lineTo(-4.2, -4.2).curveTo(-4.3, -4.4, -4.6, -4.5).lineTo(-4.9, -4.6).curveTo(-5.4, -4.7, -5.4, -5.2).lineTo(-5.4, -5.4).curveTo(-5.4, -5.8, -4.9, -6).lineTo(-4.8, -6.1).curveTo(-4.1, -6.3, -2.4, -7.1).lineTo(-2.3, -7.2).lineTo(-2.2, -7.2).lineTo(-1.7, -7.4).curveTo(-1.4, -7.4, -1.2, -7.1).curveTo(-0.9, -6.9, -1, -6.3).lineTo(-1.1, -1.2).curveTo(-0.1, -1.8, 1, -1.8).curveTo(2.2, -1.8, 3.2, -0.9).curveTo(3.9, -0.3, 4.1, 0.5).lineTo(4.2, 2.1).lineTo(4.2, 5.7).lineTo(4.7, 5.7).curveTo(5.4, 5.7, 5.4, 6.4).lineTo(5.4, 6.7).curveTo(5.4, 7.4, 4.8, 7.4).closePath();
        this.shape_8.setTransform(72.225, 7.4);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.2, 6.5).lineTo(-3.3, 6.5).curveTo(-3.5, 6.9, -4.1, 6.9).curveTo(-4.8, 6.9, -4.8, 6.1).lineTo(-4.8, 6.1).lineTo(-4.4, 2.5).curveTo(-4.3, 2, -3.8, 2).lineTo(-3.8, 2).lineTo(-3.4, 2).curveTo(-2.8, 2, -2.8, 2.6).curveTo(-2.7, 3.7, -2.2, 4.6).curveTo(-1.4, 5.7, -0.1, 5.7).curveTo(0.6, 5.7, 1.1, 5.4).curveTo(1.9, 4.9, 1.9, 4).curveTo(1.9, 2.9, 1.4, 2.4).curveTo(1, 1.9, -0.6, 1.3).curveTo(-2.4, 0.7, -3.5, -0.4).curveTo(-4.6, -1.4, -4.6, -3.4).curveTo(-4.6, -5.3, -3.1, -6.5).curveTo(-1.8, -7.5, -0.1, -7.5).curveTo(1.1, -7.5, 2.4, -7).lineTo(2.6, -7.2).curveTo(2.9, -7.5, 3.2, -7.5).curveTo(3.8, -7.5, 3.8, -6.7).lineTo(4.1, -3.5).curveTo(4.1, -3, 3.7, -2.9).lineTo(3.2, -2.8).curveTo(2.7, -2.8, 2.6, -3.3).curveTo(2.1, -4.5, 1.5, -5.1).curveTo(0.9, -5.7, -0.1, -5.7).curveTo(-0.9, -5.7, -1.4, -5.2).curveTo(-1.7, -4.7, -1.7, -4.3).curveTo(-1.7, -3.3, -1.3, -2.9).curveTo(-0.7, -2.3, 0.8, -1.9).curveTo(2.8, -1.2, 3.7, -0.3).curveTo(4.8, 0.8, 4.8, 2.8).curveTo(4.8, 4.9, 3.5, 6.2).curveTo(2.2, 7.5, 0.3, 7.5).curveTo(-2, 7.5, -3.2, 6.5).closePath();
        this.shape_9.setTransform(62.525, 7.525);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3, 3.5).curveTo(-4.2, 2.1, -4.2, 0).curveTo(-4.2, -1.7, -3.2, -3.1).curveTo(-1.9, -4.7, 0.5, -4.7).curveTo(2.1, -4.7, 3.1, -3.4).curveTo(3.9, -2.3, 3.9, -1.1).curveTo(3.9, -0.4, 2.9, -0.3).lineTo(-1.2, -0.3).lineTo(-1.2, -0.2).curveTo(-1.2, 0.9, -0.5, 1.7).curveTo(0, 2.3, 0.7, 2.4).curveTo(2.1, 2.3, 2.6, 1.5).curveTo(2.9, 1.1, 3.2, 1.1).lineTo(3.5, 1.2).lineTo(3.5, 1.2).lineTo(3.8, 1.4).curveTo(4.4, 1.8, 4, 2.4).curveTo(2.7, 4.7, 0.1, 4.7).curveTo(-1.9, 4.7, -3, 3.5).closePath().moveTo(-1, -2).lineTo(0.6, -2).lineTo(0.8, -2).curveTo(0.6, -3, 0.1, -3).curveTo(-0.7, -3, -1, -2).closePath();
        this.shape_10.setTransform(49.2592, 10.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5, 4.9).curveTo(-2.2, 4.3, -2.2, 3.5).lineTo(-2.2, -1.5).lineTo(-2.8, -1.5).curveTo(-3.5, -1.5, -3.5, -2.2).curveTo(-3.5, -2.8, -2.9, -3).curveTo(-2.5, -3.1, -1.7, -3.9).curveTo(-0.8, -4.7, -0.5, -5.2).curveTo(-0.3, -5.6, 0.2, -5.6).curveTo(0.9, -5.6, 0.9, -4.9).lineTo(0.9, -3.5).lineTo(2.9, -3.5).curveTo(3.2, -3.5, 3.4, -3.3).curveTo(3.5, -3, 3.5, -2.7).lineTo(3.3, -2).curveTo(3.2, -1.5, 2.6, -1.5).lineTo(0.8, -1.5).lineTo(0.7, 2.3).curveTo(0.7, 3.6, 1.3, 3.6).curveTo(1.8, 3.6, 2.2, 3.4).lineTo(2.5, 3.3).curveTo(2.9, 3.3, 3, 3.7).lineTo(3.2, 4).curveTo(3.3, 4.4, 3, 4.7).lineTo(2.9, 4.8).curveTo(1.9, 5.6, 0.2, 5.6).curveTo(-0.8, 5.6, -1.5, 4.9).closePath();
        this.shape_11.setTransform(42.2063, 9.325);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9, 4).lineTo(-7.6, -2.4).curveTo(-7.8, -2.9, -8, -2.9).lineTo(-8.3, -2.9).curveTo(-8.9, -2.9, -8.9, -3.5).lineTo(-8.9, -3.9).curveTo(-8.9, -4.5, -8.3, -4.5).lineTo(-4.3, -4.5).curveTo(-3.6, -4.5, -3.6, -3.9).lineTo(-3.6, -3.5).curveTo(-3.6, -2.9, -4.2, -2.9).lineTo(-4.4, -2.9).lineTo(-3.3, 0.5).curveTo(-2.3, -1.8, -2.1, -2.6).lineTo(-2, -2.9).lineTo(-2.3, -2.9).curveTo(-2.9, -2.9, -2.9, -3.5).lineTo(-2.9, -3.9).curveTo(-2.9, -4.5, -2.3, -4.5).lineTo(0.9, -4.5).curveTo(1.5, -4.5, 1.5, -3.9).lineTo(1.5, -3.8).curveTo(3, -4.7, 4.6, -4.7).curveTo(5.9, -4.7, 6.7, -4.1).curveTo(7.3, -3.5, 7.3, -2.3).lineTo(7.4, 2.5).lineTo(7.5, 2.4).curveTo(7.8, 2.1, 8, 2.1).lineTo(8.3, 2.2).lineTo(8.4, 2.2).lineTo(8.6, 2.3).curveTo(9, 2.7, 8.8, 3.2).lineTo(8.8, 3.3).curveTo(8, 4.7, 6.6, 4.7).curveTo(5.5, 4.7, 4.9, 3.8).curveTo(4.2, 4.3, 3.5, 4.5).curveTo(2.9, 4.7, 2.1, 4.7).curveTo(1.4, 4.7, 0.9, 4.1).curveTo(0.3, 3.5, 0.3, 2.5).curveTo(0.3, 0.6, 2.3, -0.3).lineTo(4.4, -1.3).lineTo(4.4, -2).lineTo(4.2, -2.7).lineTo(3.6, -2.8).curveTo(3.2, -2.8, 2.8, -2.6).lineTo(2.9, -2.5).lineTo(2.9, -2.1).curveTo(2.9, -0.5, 1.3, -0.5).curveTo(0.8, -0.5, 0.5, -0.8).curveTo(0.1, -1.1, 0.1, -1.6).curveTo(0.1, -2.3, 0.6, -2.9).curveTo(0.5, -2.9, 0.4, -2.9).curveTo(0.4, -2.9, 0.3, -2.8).curveTo(0.3, -2.8, 0.3, -2.8).curveTo(0.2, -2.8, 0.2, -2.8).curveTo(-0.2, -2.3, -1.2, -0.1).lineTo(-1.3, 0.1).lineTo(-3, 4).curveTo(-3.4, 4.7, -4, 4.7).curveTo(-4.6, 4.7, -4.9, 4).closePath().moveTo(3.2, 2).curveTo(3.2, 2.6, 3.6, 2.6).curveTo(4.1, 2.6, 4.4, 2.2).lineTo(4.4, 0.5).curveTo(3.2, 1.2, 3.2, 2).closePath();
        this.shape_12.setTransform(30.7583, 10.325);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3, 1.2).curveTo(-1.8, 0.7, -1.8, 0).curveTo(-1.8, -0.7, -1.3, -1.2).curveTo(-0.7, -1.7, 0.1, -1.7).curveTo(0.9, -1.7, 1.4, -1.2).curveTo(1.8, -0.7, 1.8, -0.1).curveTo(1.8, 0.6, 1.4, 1.1).curveTo(0.8, 1.7, -0, 1.7).curveTo(-0.7, 1.7, -1.3, 1.2).closePath();
        this.shape_13.setTransform(19.825, 2.425);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(6.5, 7.3).curveTo(5.9, 7.3, 5.9, 6.6).lineTo(5.9, 6.2).curveTo(5.9, 5.6, 6.6, 5.6).lineTo(7.2, 5.6).lineTo(7.3, 1.3).curveTo(7.3, 1.2, 7.3, 1.2).curveTo(7.3, 1.1, 7.3, 1).curveTo(7.2, 1, 7.2, 0.9).curveTo(7.2, 0.9, 7.2, 0.9).curveTo(7.1, 0.7, 6.6, 0.6).lineTo(6.2, 0.3).curveTo(5.7, 0.9, 5, 0.9).lineTo(4.1, 0.7).lineTo(4.1, 0.7).lineTo(3.8, 0.6).curveTo(3.6, 0.6, 3.4, 0.9).lineTo(3.3, 1.6).lineTo(3.3, 5.3).lineTo(3.3, 5.6).lineTo(4.2, 5.6).curveTo(4.8, 5.6, 4.8, 6.2).lineTo(4.8, 6.7).curveTo(4.8, 7.3, 4.2, 7.3).lineTo(-0.4, 7.3).curveTo(-1, 7.3, -1, 6.7).lineTo(-1, 6.2).curveTo(-1, 5.6, -0.4, 5.6).lineTo(0.3, 5.6).lineTo(0.3, 1.8).lineTo(0.2, 1.1).curveTo(0.2, 1, 0.2, 1).curveTo(0.2, 1, 0.1, 0.9).curveTo(0.1, 0.9, 0, 0.8).curveTo(-0, 0.8, -0.1, 0.8).lineTo(-0.5, 0.6).curveTo(-0.9, 0.5, -0.9, 0).curveTo(-2.4, 1.4, -5.2, 1.4).lineTo(-6.4, 1.4).lineTo(-6.4, 5.4).lineTo(-6.3, 5.5).lineTo(-5.2, 5.5).curveTo(-4.6, 5.5, -4.6, 6.2).lineTo(-4.6, 6.6).curveTo(-4.6, 7.3, -5.2, 7.3).lineTo(-10.8, 7.3).curveTo(-11.4, 7.3, -11.4, 6.7).lineTo(-11.4, 6.2).curveTo(-11.4, 5.5, -10.8, 5.5).lineTo(-9.8, 5.5).lineTo(-9.8, -5.5).lineTo(-11, -5.5).curveTo(-11.5, -5.5, -11.5, -6.2).lineTo(-11.5, -6.6).curveTo(-11.5, -7.3, -11, -7.3).lineTo(-6, -7.3).curveTo(-4.2, -7.3, -3.2, -7).curveTo(-2.1, -6.8, -1.3, -6.2).curveTo(0.4, -5, 0.4, -2.9).curveTo(0.4, -1.8, -0.2, -0.8).lineTo(1.9, -1.8).lineTo(2.3, -1.9).curveTo(2.9, -1.9, 3, -1.3).lineTo(3, -1).curveTo(3.9, -2, 5, -2).curveTo(6.3, -2, 6.5, -0.8).lineTo(6.5, -0.8).lineTo(9, -1.8).curveTo(9.8, -2.1, 10.1, -1.7).curveTo(10.3, -1.5, 10.3, -1.1).lineTo(10.3, 5.6).lineTo(10.9, 5.6).curveTo(11.5, 5.6, 11.5, 6.2).lineTo(11.5, 6.6).curveTo(11.5, 7.3, 10.9, 7.3).closePath().moveTo(-6.4, -5.6).lineTo(-6.4, -0.2).lineTo(-5.5, -0.2).curveTo(-5, -0.2, -4.4, -0.5).curveTo(-3.9, -0.8, -3.6, -1.3).curveTo(-3.3, -1.8, -3.3, -3).curveTo(-3.3, -4.6, -4.5, -5.3).lineTo(-5.8, -5.7).lineTo(-6, -5.7).closePath();
        this.shape_14.setTransform(11.525, 7.525);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3, 1.4).curveTo(-2, 0.8, -1.9, 0).curveTo(-2, -0.8, -1.3, -1.3).curveTo(-0.8, -2, 0, -2).curveTo(0.4, -2, 0.8, -1.8).curveTo(1.3, -1.4, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0.1, 1.9).curveTo(-0.9, 2, -1.3, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.2, -0.8).curveTo(-1.4, -0.4, -1.5, 0).curveTo(-1.4, 0.5, -1.2, 0.7).curveTo(-1, 1.2, -0.7, 1.3).curveTo(-0.5, 1.5, 0, 1.5).curveTo(0.5, 1.5, 0.8, 1.4).curveTo(1.1, 1.1, 1.3, 0.8).curveTo(1.5, 0.4, 1.5, 0).curveTo(1.5, -0.6, 1, -1.1).curveTo(0.7, -1.5, 0, -1.5).curveTo(-0.3, -1.5, -0.7, -1.3).closePath();
        this.shape_15.setTransform(81.5, 36.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2, 2.6).lineTo(-0.2, -1.1).lineTo(0.2, -1.1).lineTo(0.2, 2.6).closePath().moveTo(-0.3, -1.9).lineTo(-0.4, -2.2).lineTo(-0.3, -2.5).lineTo(0, -2.6).lineTo(0.3, -2.5).lineTo(0.4, -2.2).lineTo(0.3, -1.9).lineTo(0, -1.8).closePath();
        this.shape_16.setTransform(78.45, 35.925);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3, 1.4).curveTo(-1.9, 0.9, -1.9, 0).curveTo(-1.9, -0.5, -1.6, -1).curveTo(-1.3, -1.4, -0.9, -1.7).curveTo(-0.4, -1.9, 0.2, -2).lineTo(0.9, -1.9).lineTo(1.5, -1.5).lineTo(1.9, -1.1).lineTo(1.5, -0.9).curveTo(1, -1.5, 0.2, -1.5).curveTo(-0.5, -1.5, -1, -1.1).curveTo(-1.4, -0.6, -1.4, 0).curveTo(-1.4, 0.4, -1.2, 0.7).curveTo(-1, 1.1, -0.6, 1.4).lineTo(0.2, 1.5).curveTo(1, 1.5, 1.5, 0.8).lineTo(1.9, 1.1).curveTo(1.7, 1.5, 1.2, 1.7).curveTo(0.8, 1.9, 0.2, 1.9).curveTo(-0.8, 2, -1.3, 1.4).closePath();
        this.shape_17.setTransform(75.425, 36.7);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1, 1.9).lineTo(1.1, -0.7).curveTo(1, -1.1, 0.8, -1.3).curveTo(0.6, -1.5, 0.1, -1.5).curveTo(-0.3, -1.5, -0.6, -1.2).curveTo(-1, -0.9, -1.1, -0.5).lineTo(-1.2, 0.5).lineTo(-1.2, 1.9).lineTo(-1.6, 1.9).lineTo(-1.6, -1.8).lineTo(-1.2, -1.8).lineTo(-1.2, -1.2).curveTo(-0.8, -1.6, -0.5, -1.7).curveTo(-0.2, -1.9, 0.2, -1.9).curveTo(0.6, -1.9, 1, -1.7).curveTo(1.3, -1.4, 1.5, -1.1).curveTo(1.6, -0.7, 1.6, -0).lineTo(1.6, 1.9).closePath();
        this.shape_18.setTransform(71.025, 36.65);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.7, -1.9, 0).curveTo(-1.9, -0.8, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.2, -1.5, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0, 1.9).curveTo(-0.9, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.3, -0.8).lineTo(-1.4, 0).curveTo(-1.4, 0.5, -1.2, 0.7).curveTo(-1.1, 1.1, -0.7, 1.3).curveTo(-0.4, 1.5, 0, 1.5).lineTo(0.8, 1.4).lineTo(1.3, 0.8).lineTo(1.5, 0).curveTo(1.5, -0.7, 1.1, -1.1).curveTo(0.6, -1.5, 0, -1.5).lineTo(-0.7, -1.3).closePath();
        this.shape_19.setTransform(66.325, 36.7);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9, 2.5).lineTo(-1.4, 2.2).lineTo(-1.9, 1.5).lineTo(-1.3, 1.5).curveTo(-1.2, 1.9, -0.9, 2).curveTo(-0.3, 2.2, 0, 2.2).curveTo(0.3, 2.2, 0.8, 2).curveTo(1.2, 1.9, 1.3, 1.6).curveTo(1.4, 1.3, 1.5, 0.7).lineTo(1.5, 0.5).curveTo(1.3, 0.7, 0.8, 1).curveTo(0.5, 1.2, -0.1, 1.2).curveTo(-0.6, 1.2, -1, 0.9).curveTo(-1.5, 0.7, -1.7, 0.3).curveTo(-1.9, -0.2, -2, -0.7).curveTo(-1.9, -1.2, -1.7, -1.7).curveTo(-1.4, -2.1, -1, -2.4).curveTo(-0.4, -2.6, 0, -2.6).curveTo(0.4, -2.6, 0.7, -2.4).curveTo(1.2, -2.3, 1.5, -1.9).lineTo(1.5, -2.5).lineTo(2, -2.5).lineTo(2, 0.4).curveTo(2, 1.2, 1.8, 1.6).curveTo(1.6, 2.1, 1.2, 2.4).curveTo(0.8, 2.6, 0, 2.6).lineTo(-0.9, 2.5).closePath().moveTo(-0.7, -2).curveTo(-1.1, -1.7, -1.3, -1.4).curveTo(-1.4, -1.1, -1.4, -0.7).curveTo(-1.4, -0.1, -1.1, 0.3).curveTo(-0.6, 0.7, 0, 0.7).curveTo(0.7, 0.7, 1.1, 0.3).curveTo(1.5, -0.1, 1.5, -0.7).curveTo(1.5, -1, 1.3, -1.4).curveTo(1.1, -1.8, 0.7, -2).curveTo(0.4, -2.2, 0, -2.2).curveTo(-0.3, -2.2, -0.7, -2).closePath();
        this.shape_20.setTransform(61.55, 37.375);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.7, -1.9, 0).curveTo(-1.9, -0.8, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.2, -1.5, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.5, 1.9, -0, 1.9).curveTo(-0.8, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).curveTo(-1.1, -1, -1.2, -0.8).curveTo(-1.4, -0.4, -1.4, 0).curveTo(-1.4, 0.5, -1.2, 0.7).curveTo(-1.1, 1.1, -0.7, 1.3).curveTo(-0.4, 1.5, 0, 1.5).lineTo(0.8, 1.4).lineTo(1.3, 0.8).lineTo(1.5, 0).curveTo(1.5, -0.6, 1.1, -1.1).curveTo(0.6, -1.5, 0, -1.5).lineTo(-0.7, -1.3).closePath();
        this.shape_21.setTransform(56.725, 36.7);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9, 1.9).lineTo(-0.9, -1.8).lineTo(-0.5, -1.8).lineTo(-0.5, -1.3).lineTo(0, -1.7).lineTo(0.5, -1.9).lineTo(0.9, -1.7).lineTo(0.7, -1.4).lineTo(0.4, -1.5).lineTo(-0, -1.3).curveTo(-0.2, -1.1, -0.4, -0.6).lineTo(-0.5, 0.6).lineTo(-0.5, 1.9).closePath();
        this.shape_22.setTransform(53.575, 36.65);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4, 2.6).lineTo(-0.4, -0.7).lineTo(-0.9, -0.7).lineTo(-0.9, -1.1).lineTo(-0.4, -1.1).lineTo(-0.4, -2.2).lineTo(-0.1, -2.5).lineTo(0.4, -2.6).lineTo(0.9, -2.5).lineTo(0.9, -2).lineTo(0.5, -2.2).lineTo(0.2, -2.1).lineTo(0.1, -2).lineTo(0.1, -1.1).lineTo(0.8, -1.1).lineTo(0.8, -0.7).lineTo(0, -0.7).lineTo(0, 2.6).closePath();
        this.shape_23.setTransform(51.2, 35.925);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.8, -1.9, 0).curveTo(-1.9, -0.9, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.2, -1.5, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0, 1.9).curveTo(-0.9, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.3, -0.8).lineTo(-1.5, 0).curveTo(-1.5, 0.4, -1.3, 0.7).curveTo(-1, 1.1, -0.7, 1.3).curveTo(-0.4, 1.5, 0, 1.5).lineTo(0.8, 1.4).curveTo(1.1, 1.1, 1.3, 0.8).curveTo(1.5, 0.4, 1.5, 0).curveTo(1.5, -0.6, 1.1, -1.1).curveTo(0.6, -1.5, 0, -1.5).lineTo(-0.7, -1.3).closePath();
        this.shape_24.setTransform(45.525, 36.7);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0, 1.8).lineTo(-1.8, -1.9).lineTo(-1.2, -1.9).lineTo(0, 0.8).lineTo(1.3, -1.9).lineTo(1.7, -1.9).lineTo(0, 1.8).closePath();
        this.shape_25.setTransform(41.2, 36.7);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4, 1.4).curveTo(-1.9, 0.8, -1.9, 0).curveTo(-1.9, -0.7, -1.5, -1.2).curveTo(-0.9, -2, -0, -2).curveTo(1, -1.9, 1.5, -1.2).curveTo(1.9, -0.7, 1.9, 0).lineTo(-1.4, 0).curveTo(-1.4, 0.7, -1, 1.1).curveTo(-0.7, 1.5, -0, 1.5).lineTo(0.5, 1.4).lineTo(1, 1.2).lineTo(1.4, 0.6).lineTo(1.8, 0.8).lineTo(1.3, 1.5).lineTo(0.7, 1.8).lineTo(0, 1.9).curveTo(-0.9, 1.9, -1.4, 1.4).closePath().moveTo(-1, -1.2).curveTo(-1.2, -0.9, -1.4, -0.3).lineTo(1.4, -0.3).curveTo(1.3, -0.8, 1.1, -1).curveTo(1, -1.2, 0.6, -1.3).curveTo(0.3, -1.5, -0, -1.5).curveTo(-0.4, -1.5, -1, -1.2).closePath();
        this.shape_26.setTransform(36.975, 36.7);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9, 1.7).curveTo(-1.3, 1.5, -1.4, 1.1).curveTo(-1.6, 0.7, -1.6, -0.1).lineTo(-1.6, -1.9).lineTo(-1.1, -1.9).lineTo(-1.1, 0.7).curveTo(-1, 1, -0.7, 1.2).curveTo(-0.4, 1.4, 0, 1.4).curveTo(0.5, 1.4, 0.7, 1.2).curveTo(1, 1.1, 1.1, 0.8).lineTo(1.1, -1.9).lineTo(1.6, -1.9).lineTo(1.6, -0).curveTo(1.6, 0.6, 1.5, 1.1).curveTo(1.2, 1.5, 0.9, 1.7).curveTo(0.6, 1.9, 0, 1.9).curveTo(-0.6, 1.9, -0.9, 1.7).closePath();
        this.shape_27.setTransform(32.475, 36.75);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1, 1.9).lineTo(1.1, -0.7).curveTo(1, -1.1, 0.8, -1.3).curveTo(0.6, -1.5, 0.2, -1.5).curveTo(-0.2, -1.5, -0.6, -1.2).curveTo(-1, -0.9, -1.1, -0.5).lineTo(-1.1, 1.9).lineTo(-1.6, 1.9).lineTo(-1.6, -1.8).lineTo(-1.1, -1.8).lineTo(-1.1, -1.2).curveTo(-0.9, -1.5, -0.5, -1.7).curveTo(-0.2, -1.9, 0.2, -1.9).curveTo(0.6, -1.9, 1, -1.7).curveTo(1.3, -1.5, 1.5, -1.1).curveTo(1.6, -0.7, 1.6, -0).lineTo(1.6, 1.9).closePath();
        this.shape_28.setTransform(28.225, 36.65);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4, 1.4).curveTo(-2, 0.7, -1.9, 0).curveTo(-1.9, -0.8, -1.4, -1.3).curveTo(-0.8, -2, -0, -2).curveTo(0.5, -2, 0.8, -1.8).curveTo(1.3, -1.4, 1.5, -1.2).lineTo(1.5, -1.9).lineTo(1.9, -1.9).lineTo(1.9, 1.8).lineTo(1.5, 1.8).lineTo(1.5, 1.3).lineTo(0.8, 1.8).curveTo(0.4, 1.9, -0, 1.9).curveTo(-0.9, 2, -1.4, 1.4).closePath().moveTo(-0.7, -1.3).lineTo(-1.2, -0.8).curveTo(-1.5, -0.4, -1.5, 0).curveTo(-1.5, 0.5, -1.2, 0.7).curveTo(-1, 1.2, -0.7, 1.3).curveTo(-0.4, 1.5, -0, 1.5).curveTo(0.5, 1.5, 0.8, 1.4).curveTo(1.2, 1.1, 1.3, 0.8).curveTo(1.5, 0.4, 1.5, 0).curveTo(1.5, -0.6, 1, -1.1).curveTo(0.7, -1.5, 0.1, -1.5).curveTo(-0.3, -1.5, -0.7, -1.3).closePath();
        this.shape_29.setTransform(21.55, 36.7);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2, 2.5).lineTo(-1.2, -2.5).lineTo(-0.7, -2.5).lineTo(-0.7, 2).lineTo(1.2, 2).lineTo(1.2, 2.5).closePath();
        this.shape_30.setTransform(17.8, 36.05);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.3, 4).lineTo(-0.3, 0.2).lineTo(-3, -4.1).lineTo(-2, -4.1).lineTo(0, -0.7).lineTo(2.1, -4.1).lineTo(3, -4.1).lineTo(0.5, 0.2).lineTo(0.5, 4).closePath();
        this.shape_31.setTransform(46.4, 22.7);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3, 4).lineTo(-2.3, -4.1).lineTo(2.3, -4.1).lineTo(2.3, -3.3).lineTo(-1.5, -3.3).lineTo(-1.5, -0.7).lineTo(2.3, -0.7).lineTo(2.3, 0.1).lineTo(-1.5, 0.1).lineTo(-1.5, 3.3).lineTo(2.3, 3.3).lineTo(2.3, 4).closePath();
        this.shape_32.setTransform(40.125, 22.7);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3, 4).lineTo(-2.3, -2.1).lineTo(-2.3, 4).lineTo(-3.2, 4).lineTo(-3.2, -4.1).lineTo(-3, -4.1).lineTo(2.4, 2.1).lineTo(2.4, -4.1).lineTo(3.2, -4.1).lineTo(3.2, 4).closePath();
        this.shape_33.setTransform(32.025, 22.7);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4, 4).lineTo(-0.4, -3.3).lineTo(-2.2, -3.3).lineTo(-2.2, -4.1).lineTo(2.2, -4.1).lineTo(2.2, -3.3).lineTo(0.4, -3.3).lineTo(0.4, 4).closePath();
        this.shape_34.setTransform(24.825, 22.7);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4, 4).lineTo(-0.4, -4.1).lineTo(0.4, -4.1).lineTo(0.4, 4).closePath();
        this.shape_35.setTransform(20.3, 22.7);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6, 4.1).lineTo(-1.3, 0.3).lineTo(-1.7, 0.3).lineTo(-1.7, 4.1).lineTo(-2.6, 4.1).lineTo(-2.6, -4.1).lineTo(-0.9, -4.1).lineTo(0.9, -4).curveTo(1.7, -3.7, 2.1, -3.3).curveTo(2.5, -2.7, 2.5, -1.9).curveTo(2.5, -1.2, 2.2, -0.7).curveTo(1.9, -0.3, 1.3, 0).curveTo(0.6, 0.3, -0.3, 0.3).lineTo(2.6, 4.1).closePath().moveTo(-1.7, -0.5).lineTo(-0.4, -0.5).curveTo(0.5, -0.5, 0.9, -0.7).curveTo(1.2, -0.8, 1.4, -1.2).curveTo(1.6, -1.4, 1.6, -1.9).curveTo(1.6, -2.3, 1.4, -2.7).curveTo(1.2, -3, 0.9, -3.1).curveTo(0.5, -3.3, -0.3, -3.3).lineTo(-1.7, -3.3).closePath();
        this.shape_36.setTransform(15.4, 22.725);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.4, 4).lineTo(-2.4, -4.1).lineTo(-0.8, -4.1).curveTo(0.1, -4, 0.7, -3.8).curveTo(1.2, -3.6, 1.5, -3.1).curveTo(1.8, -2.7, 1.8, -2.1).curveTo(1.8, -1.6, 1.5, -1).curveTo(1.2, -0.6, 0.8, -0.4).lineTo(1.7, 0.2).curveTo(2.1, 0.4, 2.2, 0.9).curveTo(2.4, 1.2, 2.4, 1.8).curveTo(2.4, 2.7, 1.7, 3.4).curveTo(1, 4, -0.2, 4).closePath().moveTo(-1.6, 3.3).lineTo(-0.6, 3.3).curveTo(0.2, 3.3, 0.7, 3.1).curveTo(1, 3, 1.4, 2.6).curveTo(1.6, 2.1, 1.6, 1.8).curveTo(1.6, 1.2, 1.2, 0.8).curveTo(0.9, 0.4, 0.3, 0.2).curveTo(0, 0.2, -1.2, 0.2).lineTo(-1.6, 0.2).closePath().moveTo(-1.6, -0.7).lineTo(-1.1, -0.7).curveTo(-0.3, -0.7, 0.1, -0.8).curveTo(0.5, -1, 0.7, -1.3).curveTo(1, -1.7, 1, -2.1).curveTo(1, -2.5, 0.6, -3).curveTo(0.2, -3.3, -0.7, -3.3).lineTo(-1.6, -3.3).closePath();
        this.shape_37.setTransform(8.325, 22.7);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS_ko, new cjs.Rectangle(0, 0, 100, 40), null);


    (lib.mc_LOGO_BSPS_britney = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-0.3, 4).lineTo(-0.3, 0.2).lineTo(-3, -4.1).lineTo(-2, -4.1).lineTo(0, -0.7).lineTo(2.1, -4.1).lineTo(3, -4.1).lineTo(0.5, 0.2).lineTo(0.5, 4).closePath();
        this.shape.setTransform(40.5, 4.05);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-2.3, 4).lineTo(-2.3, -4.1).lineTo(2.3, -4.1).lineTo(2.3, -3.3).lineTo(-1.5, -3.3).lineTo(-1.5, -0.7).lineTo(2.3, -0.7).lineTo(2.3, 0.1).lineTo(-1.5, 0.1).lineTo(-1.5, 3.3).lineTo(2.3, 3.3).lineTo(2.3, 4).closePath();
        this.shape_1.setTransform(34.225, 4.05);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(3, 4).lineTo(-2.3, -2.1).lineTo(-2.3, 4).lineTo(-3.2, 4).lineTo(-3.2, -4.1).lineTo(-3, -4.1).lineTo(2.4, 2.1).lineTo(2.4, -4.1).lineTo(3.2, -4.1).lineTo(3.2, 4).closePath();
        this.shape_2.setTransform(26.125, 4.05);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-0.4, 4).lineTo(-0.4, -3.3).lineTo(-2.2, -3.3).lineTo(-2.2, -4.1).lineTo(2.2, -4.1).lineTo(2.2, -3.3).lineTo(0.4, -3.3).lineTo(0.4, 4).closePath();
        this.shape_3.setTransform(18.925, 4.05);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-0.4, 4).lineTo(-0.4, -4.1).lineTo(0.4, -4.1).lineTo(0.4, 4).closePath();
        this.shape_4.setTransform(14.4, 4.05);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(1.6, 4.1).lineTo(-1.3, 0.3).lineTo(-1.7, 0.3).lineTo(-1.7, 4.1).lineTo(-2.6, 4.1).lineTo(-2.6, -4.1).lineTo(-0.9, -4.1).lineTo(0.9, -4).curveTo(1.7, -3.7, 2.1, -3.3).curveTo(2.5, -2.7, 2.5, -1.9).curveTo(2.5, -1.2, 2.2, -0.7).curveTo(1.9, -0.3, 1.3, 0).curveTo(0.6, 0.3, -0.3, 0.3).lineTo(2.6, 4.1).closePath().moveTo(-1.7, -0.5).lineTo(-0.4, -0.5).curveTo(0.5, -0.5, 0.9, -0.7).curveTo(1.2, -0.8, 1.4, -1.2).curveTo(1.6, -1.4, 1.6, -1.9).curveTo(1.6, -2.3, 1.4, -2.7).curveTo(1.2, -3, 0.9, -3.1).curveTo(0.5, -3.3, -0.3, -3.3).lineTo(-1.7, -3.3).closePath();
        this.shape_5.setTransform(9.5, 4.075);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-2.4, 4).lineTo(-2.4, -4.1).lineTo(-0.8, -4.1).curveTo(0.1, -4, 0.7, -3.8).curveTo(1.2, -3.6, 1.5, -3.1).curveTo(1.8, -2.7, 1.8, -2.1).curveTo(1.8, -1.6, 1.5, -1).curveTo(1.2, -0.6, 0.8, -0.4).lineTo(1.7, 0.2).curveTo(2.1, 0.4, 2.2, 0.9).curveTo(2.4, 1.2, 2.4, 1.8).curveTo(2.4, 2.7, 1.7, 3.4).curveTo(1, 4, -0.2, 4).closePath().moveTo(-1.6, 3.3).lineTo(-0.6, 3.3).curveTo(0.2, 3.3, 0.7, 3.1).curveTo(1, 3, 1.4, 2.6).curveTo(1.6, 2.1, 1.6, 1.8).curveTo(1.6, 1.2, 1.2, 0.8).curveTo(0.9, 0.4, 0.3, 0.2).curveTo(0, 0.2, -1.2, 0.2).lineTo(-1.6, 0.2).closePath().moveTo(-1.6, -0.7).lineTo(-1.1, -0.7).curveTo(-0.3, -0.7, 0.1, -0.8).curveTo(0.5, -1, 0.7, -1.3).curveTo(1, -1.7, 1, -2.1).curveTo(1, -2.5, 0.6, -3).curveTo(0.2, -3.3, -0.7, -3.3).lineTo(-1.6, -3.3).closePath();
        this.shape_6.setTransform(2.425, 4.05);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS_britney, new cjs.Rectangle(0, 0, 43.5, 8.2), null);


    (lib.mc_BSPS_logo_walgreens = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#E31837").beginStroke().moveTo(2.3, 9.9).curveTo(2, 9.8, 1.9, 9.6).lineTo(1.8, 9).curveTo(1.8, 8.4, 2.3, 7.6).curveTo(2.7, 7, 3.4, 6.6).curveTo(4, 6.2, 4.5, 6.2).lineTo(4.6, 6.2).lineTo(4.5, 6.2).lineTo(4.2, 7.4).lineTo(4.2, 7.7).curveTo(4.3, 8, 4.6, 8.1).lineTo(4.7, 8.1).curveTo(5.6, 8, 6.9, 5.8).lineTo(7, 5.7).lineTo(7, 5.6).lineTo(7.3, 5).curveTo(8, 3.7, 8.2, 2.9).lineTo(8.3, 2.4).lineTo(7.9, 2.7).curveTo(6.9, 3.4, 5.9, 3.8).curveTo(4.6, 4.2, 4, 3.7).curveTo(3.7, 3.5, 3.5, 2.6).lineTo(3.4, 2).lineTo(3.1, 2.3).curveTo(0.8, 4.4, -1.1, 4.1).curveTo(-1.9, 4, -2.9, 2.7).lineTo(-3, 2.6).lineTo(-3.1, 2.7).curveTo(-4.5, 3.7, -6, 4.1).curveTo(-7.9, 4.6, -8.8, 3.9).curveTo(-9.1, 3.5, -9.1, 2.7).lineTo(-9.1, 1.4).lineTo(-9.4, 1.7).curveTo(-10.7, 3, -12.2, 3.7).curveTo(-13.8, 4.4, -14.7, 3.9).curveTo(-15.4, 3.4, -15, 1.8).curveTo(-14.7, 0.6, -13.8, -0.9).curveTo(-12.7, -2.5, -11.5, -3.3).curveTo(-9.2, -4.8, -6.7, -5.1).curveTo(-4.6, -5.3, -3.4, -4.6).lineTo(-3.4, -4.6).lineTo(-3.4, -4.6).curveTo(-3.6, -3.8, -4.5, -2.8).curveTo(-5.3, -1.9, -5.9, -1.7).lineTo(-6, -1.7).lineTo(-6.2, -1.4).curveTo(-6.9, -0.2, -6.9, 0.5).curveTo(-6.9, 0.9, -6.7, 1.4).curveTo(-6.5, 1.7, -6.1, 1.8).curveTo(-5, 2.1, -3.2, 1.1).lineTo(-3.1, 1.1).lineTo(-3.1, 1).curveTo(-2.8, -1, -0.9, -4).curveTo(0.5, -6.1, 1.5, -7.1).curveTo(4.1, -9.8, 6.4, -10).curveTo(7.4, -10, 7.6, -9.3).curveTo(7.9, -8.7, 6.4, -6.4).curveTo(5.1, -4.3, 3.4, -2.5).curveTo(1.6, -0.6, -0.1, 0.6).lineTo(-0.2, 0.7).curveTo(-0.2, 0.7, -0.2, 0.8).curveTo(-0.2, 0.8, -0.2, 0.9).curveTo(-0.2, 1, -0.2, 1).curveTo(-0.2, 1.1, -0.2, 1.1).curveTo(-0, 1.5, 0.5, 1.7).curveTo(1.9, 2, 3.1, 1.2).curveTo(3.8, 0.7, 5.1, -0.7).lineTo(5.6, -1.4).lineTo(6.7, -2.7).curveTo(8.4, -4.4, 10.5, -5).curveTo(12.2, -5.4, 13.6, -5).curveTo(14.6, -4.8, 14.9, -4.6).lineTo(15.1, -4.4).lineTo(14.9, -4.2).lineTo(14.7, -4.1).lineTo(14.2, -3.6).curveTo(13.7, -3, 13.6, -2.7).lineTo(13.7, -2.4).lineTo(13.7, -2.3).lineTo(13.7, -2.3).curveTo(13.7, -2.2, 13.7, -2.2).curveTo(13.7, -2.1, 13.7, -2.1).curveTo(13.7, -2, 13.7, -2).curveTo(13.6, -1.9, 13.6, -1.9).lineTo(13.2, -1).curveTo(10.8, 3.8, 9.1, 5.9).curveTo(6.1, 9.6, 2.6, 9.9).lineTo(2.5, 10).lineTo(2.3, 9.9).closePath().moveTo(9.4, -3.1).curveTo(8.4, -2.9, 7.2, -1.7).curveTo(6.1, -0.7, 5.9, -0.1).curveTo(5.6, 0.7, 6.3, 1.3).lineTo(6.4, 1.3).curveTo(7.2, 1.7, 8.7, 0.5).curveTo(10.1, -0.5, 10.9, -1.7).lineTo(11.7, -2.5).lineTo(11.5, -2.7).curveTo(10.8, -3.1, 10, -3.1).lineTo(9.4, -3.1).closePath().moveTo(-10.5, -2.8).lineTo(-10.8, -2.6).curveTo(-11.5, -2.1, -12.1, -1.3).curveTo(-12.8, -0.3, -12.8, 0.4).lineTo(-12.8, 0.7).curveTo(-12.7, 1.3, -11.9, 1.3).curveTo(-11.2, 1.4, -9.8, 0.5).curveTo(-8.3, -0.4, -7.4, -1.5).lineTo(-6.7, -2.6).lineTo(-6.8, -2.7).curveTo(-7.7, -3.2, -8.7, -3.2).curveTo(-9.6, -3.2, -10.5, -2.8).closePath().moveTo(4.7, -7.7).curveTo(3.8, -7.3, 3, -6.3).curveTo(-0.3, -2.4, -0.5, -0.9).lineTo(-0.6, -0.5).lineTo(-0.2, -0.7).curveTo(1.2, -1.7, 2.9, -3.8).curveTo(4.7, -6, 5, -7.2).lineTo(5.1, -7.4).lineTo(5, -7.6).lineTo(4.8, -7.7).lineTo(4.7, -7.7).closePath();
        this.shape.setTransform(35.8763, 10.8336, 0.5999, 0.5981);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#E31837").beginStroke().moveTo(-14.9, 5.1).curveTo(-15.4, 5, -15.7, 4.5).curveTo(-15.8, 4.1, -16.2, 4.2).lineTo(-16.8, 4.5).curveTo(-19.4, 5.6, -20.6, 5.4).curveTo(-21.8, 5.3, -22, 4.4).lineTo(-22.1, 3.7).curveTo(-22.1, 2.5, -20.6, 0.6).lineTo(-20, -0.1).lineTo(-20.2, -0.2).curveTo(-20.5, -0.4, -21.1, -0.2).lineTo(-21.5, -0.1).lineTo(-21.6, -0.1).lineTo(-21.7, -0).curveTo(-24.6, 3.6, -26.5, 4.3).lineTo(-26.6, 4.3).lineTo(-26.5, 4.2).curveTo(-26.3, 3.8, -25.2, 2.6).lineTo(-24.9, 2.4).lineTo(-24.4, 1.8).curveTo(-22.3, -0.5, -22.2, -1.6).lineTo(-22.2, -1.6).lineTo(-22.2, -1.7).curveTo(-22.2, -2.4, -21.2, -3.4).curveTo(-20.2, -4.5, -19.5, -4.4).lineTo(-19.3, -4.2).lineTo(-19.3, -4).lineTo(-19.3, -3.8).lineTo(-19.4, -3.8).curveTo(-19.7, -3.5, -19.8, -3.1).lineTo(-19.8, -2.9).lineTo(-19.6, -2.9).curveTo(-19.1, -2.8, -18, -3.2).curveTo(-16.5, -3.6, -16, -3.4).lineTo(-15.8, -3.2).curveTo(-15.7, -2.9, -16, -2.6).lineTo(-16.7, -1.9).curveTo(-18.1, -0.6, -18.6, 0.2).curveTo(-19.4, 1.4, -19.1, 2.5).curveTo(-18.8, 3.4, -16.1, 2.8).lineTo(-15.9, 2.7).lineTo(-15.9, 2.6).curveTo(-15.5, 1.1, -14.4, -0.5).curveTo(-13.4, -1.8, -12.5, -2.5).curveTo(-10.3, -4.1, -8.4, -4.1).curveTo(-6.4, -4.1, -6.3, -2.7).curveTo(-6.3, -1.9, -7.3, -0.7).curveTo(-8.3, 0.6, -9.8, 1.5).lineTo(-12.5, 2.9).lineTo(-12.3, 3.1).curveTo(-11.6, 3.7, -10.1, 3.4).curveTo(-8.7, 3.3, -6.6, 2.4).lineTo(-6.6, 2.4).lineTo(-6.5, 2.3).curveTo(-6, 1, -3.9, -1.3).lineTo(-3.7, -1.5).curveTo(-2.8, -2.6, -1.4, -3.3).curveTo(0.2, -4.2, 1.8, -4.2).curveTo(2.9, -4.1, 3.1, -3.3).lineTo(3.1, -3.1).curveTo(3.1, -1.5, 1.2, 0.1).curveTo(-0.1, 1.3, -3.2, 2.6).lineTo(-3.4, 2.7).lineTo(-3.3, 2.9).curveTo(-2.7, 3.5, -1.5, 3.1).curveTo(0.8, 2.3, 3.5, 0.3).lineTo(8.4, -4.1).lineTo(8.7, -4.3).curveTo(9.3, -4.3, 9.6, -3.7).lineTo(9.6, -3.6).curveTo(9.5, -3.1, 8.7, -2).curveTo(7.5, -0.2, 7.5, 0.3).lineTo(7.4, 0.8).lineTo(12.4, -3.6).curveTo(13.6, -4.4, 14, -4.4).curveTo(14.3, -4.3, 14.6, -3.7).curveTo(14.6, -3.5, 14, -2.9).curveTo(12.8, -2, 12, -0.6).curveTo(11.2, 0.7, 11.2, 1.4).lineTo(11.2, 1.7).lineTo(11.3, 1.8).curveTo(11.5, 2.2, 11.9, 2.3).lineTo(12.7, 2.2).curveTo(14.4, 1.9, 18.3, -2).lineTo(19.9, -3.8).curveTo(20.7, -4.9, 21.1, -5.2).curveTo(21.8, -5.7, 22.7, -5.5).lineTo(22.8, -5.4).lineTo(22.8, -5.2).lineTo(22.6, -4.6).curveTo(22.4, -4.3, 22.4, -4).lineTo(22.4, -3.4).curveTo(22.4, -0.5, 21.5, 1.7).lineTo(21.4, 1.9).lineTo(21.6, 2).curveTo(24, 3.1, 26.5, 1.9).lineTo(26.6, 1.8).lineTo(26.5, 1.9).curveTo(26.3, 2.9, 25.6, 3.7).curveTo(24.8, 4.7, 23.9, 4.9).curveTo(23.2, 5, 21, 4.8).lineTo(18.8, 4.6).lineTo(17.9, 4.8).curveTo(16.4, 5.2, 15.6, 5).curveTo(15.3, 4.7, 15.3, 4.4).lineTo(15.3, 4.2).curveTo(15.8, 3, 18.1, 2.5).lineTo(18.4, 2.4).lineTo(18.5, 2.3).curveTo(19, 2, 19.4, 0.4).lineTo(19.4, 0).curveTo(19.4, -0.6, 19.2, -0.9).lineTo(19.1, -1.2).lineTo(16.1, 1.4).curveTo(14.1, 3.2, 13.1, 3.9).curveTo(11.3, 5.1, 9.9, 5.2).lineTo(9.7, 5.2).curveTo(8.8, 5.2, 8.2, 4.3).lineTo(8, 3.7).curveTo(8, 3.1, 8.5, 2.2).lineTo(8.9, 1.5).lineTo(8.9, 1.4).lineTo(8.8, 1.4).lineTo(8.7, 1.4).curveTo(8.4, 1.5, 7.6, 2.3).lineTo(7.2, 2.6).curveTo(4.3, 5, 2.5, 5.2).curveTo(2.5, 5.2, 2.4, 5.2).curveTo(2.4, 5.2, 2.3, 5.2).curveTo(2.3, 5.2, 2.2, 5.1).curveTo(2.2, 5.1, 2.1, 5.1).lineTo(2.1, 4.9).lineTo(2.2, 4.7).curveTo(2.4, 4.2, 3.1, 3.2).lineTo(4.1, 1.7).lineTo(3.8, 1.4).lineTo(2.6, 2.4).curveTo(0.2, 4, -1.1, 4.6).curveTo(-3.2, 5.6, -5.2, 5.3).curveTo(-6.4, 5, -6.7, 4).lineTo(-6.8, 3.8).lineTo(-6.9, 3.9).curveTo(-10.3, 5.6, -12.7, 5.6).curveTo(-13.9, 5.6, -14.9, 5.1).closePath().moveTo(-9.4, -2.5).curveTo(-10.3, -2.2, -11.1, -1.4).curveTo(-12.7, 0.3, -12.7, 1.1).lineTo(-12.8, 1.4).lineTo(-12.5, 1.3).curveTo(-11.5, 1, -10.3, 0).curveTo(-9.2, -0.9, -8.7, -1.7).lineTo(-8.6, -2.1).lineTo(-8.6, -2.4).curveTo(-8.8, -2.6, -9.1, -2.6).lineTo(-9.4, -2.5).closePath().moveTo(0.2, -2.8).curveTo(-0.8, -2.4, -1.6, -1.7).lineTo(-2.3, -0.8).curveTo(-3.1, 0.2, -3.2, 0.8).lineTo(-3.2, 1.1).lineTo(-3, 1.1).curveTo(-1.9, 0.9, -0.8, -0.1).curveTo(0.6, -1.3, 0.9, -2).lineTo(1, -2.4).curveTo(1, -2.4, 1, -2.5).curveTo(1, -2.5, 0.9, -2.6).curveTo(0.9, -2.6, 0.9, -2.7).curveTo(0.9, -2.7, 0.8, -2.7).lineTo(0.5, -2.8).lineTo(0.2, -2.8).closePath();
        this.shape_1.setTransform(59.0442, 10.0013, 0.5999, 0.5981);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#E31837").beginStroke().moveTo(-8.3, 7.6).curveTo(-9.7, 6.5, -9.3, 3.1).curveTo(-9.1, 1.7, -7.8, -0.6).curveTo(-6.8, -2.5, -5.7, -4.1).curveTo(-6.6, -3.8, -7.5, -3.9).lineTo(-9.3, -4).curveTo(-11.1, -4.1, -11.7, -3.7).curveTo(-11.6, -4.8, -10.9, -5.8).curveTo(-10, -6.9, -8.2, -6.8).lineTo(-4.6, -6.5).curveTo(-3.4, -6.6, -1.7, -7).curveTo(-4.3, -3.7, -5.4, -1.8).curveTo(-7.4, 1.7, -7, 4.1).curveTo(-6.6, 5.5, -5.7, 5.7).curveTo(-4.8, 6, -3.3, 5).curveTo(-3.4, 3.2, -2.6, 0.8).curveTo(-1.8, -1.3, -0.7, -2.8).curveTo(-0.1, -3.7, 1, -4.7).curveTo(1.9, -5.5, 3.1, -5.9).curveTo(4.5, -6.4, 5.2, -5.9).curveTo(6.6, -4.8, 4.3, -1).curveTo(2.3, 2.6, 0.3, 4.4).curveTo(0.7, 5.5, 1.6, 5.7).curveTo(4.5, 6.2, 7.6, 0.9).curveTo(9.8, -3.7, 8.2, -5.7).lineTo(7.5, -6.5).lineTo(9, -7.9).curveTo(10, -8.7, 10.9, -7.7).curveTo(12, -6.6, 11.5, -3.8).curveTo(11.1, -1.6, 10.2, 0).curveTo(5.1, 9.1, -0.7, 8.1).curveTo(-1.8, 7.9, -2.6, 6.8).curveTo(-4.7, 8.2, -6.3, 8.2).curveTo(-7.4, 8.2, -8.3, 7.6).closePath().moveTo(2.6, -3.5).lineTo(1.7, -2.8).lineTo(0.9, -1.8).curveTo(0.3, -0.9, -0.3, 0.5).curveTo(-1, 2.1, -1, 2.9).curveTo(-0.5, 2.6, 0.5, 1.5).curveTo(1.4, 0.4, 1.8, -0.3).curveTo(2.9, -2.3, 3, -3).curveTo(3.1, -3.6, 2.8, -3.6).lineTo(2.6, -3.5).closePath();
        this.shape_2.setTransform(21.9988, 8.4401, 0.5999, 0.5981);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // Layer_2
        this.instance = new lib.mc_BSPS_empty();
        this.instance.setTransform(45, 10, 0.9, 0.2, 0, 0, 0, 50, 50);
        this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
        this.instance.cache(-2, -2, 104, 104);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_BSPS_logo_walgreens, new cjs.Rectangle(0, 0, 90, 20), null);


    (lib.mc_LOGO_BSPS_ds = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // mc_LOGO_BSPS_ko_04
        this.mc_LOGO_BSPS_ko_04 = new lib.mc_LOGO_BSPS_ko();
        this.mc_LOGO_BSPS_ko_04.name = "mc_LOGO_BSPS_ko_04";
        this.mc_LOGO_BSPS_ko_04.setTransform(0, 0, 1, 1, 0, 0, 0, 50, 0);
        this.mc_LOGO_BSPS_ko_04.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 10);
        this.mc_LOGO_BSPS_ko_04.filters = [new cjs.BlurFilter(50, 50, 3)];
        this.mc_LOGO_BSPS_ko_04.cache(-2, -2, 104, 44);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_ko_04).wait(1));

        // mc_LOGO_BSPS_ko_03
        this.mc_LOGO_BSPS_ko_03 = new lib.mc_LOGO_BSPS_ko();
        this.mc_LOGO_BSPS_ko_03.name = "mc_LOGO_BSPS_ko_03";
        this.mc_LOGO_BSPS_ko_03.setTransform(0, 20, 1, 1, 0, 0, 0, 50, 20);
        this.mc_LOGO_BSPS_ko_03.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 5);
        this.mc_LOGO_BSPS_ko_03.filters = [new cjs.BlurFilter(40, 40, 3)];
        this.mc_LOGO_BSPS_ko_03.cache(-2, -2, 104, 44);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_ko_03).wait(1));

        // mc_LOGO_BSPS_ko_02
        this.mc_LOGO_BSPS_ko_02 = new lib.mc_LOGO_BSPS_ko();
        this.mc_LOGO_BSPS_ko_02.name = "mc_LOGO_BSPS_ko_02";
        this.mc_LOGO_BSPS_ko_02.setTransform(0, 20, 1, 1, 0, 0, 0, 50, 20);
        this.mc_LOGO_BSPS_ko_02.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 5);
        this.mc_LOGO_BSPS_ko_02.filters = [new cjs.BlurFilter(30, 30, 3)];
        this.mc_LOGO_BSPS_ko_02.cache(-2, -2, 104, 44);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_ko_02).wait(1));

        // mc_LOGO_BSPS_ko_01
        this.mc_LOGO_BSPS_ko_01 = new lib.mc_LOGO_BSPS_ko();
        this.mc_LOGO_BSPS_ko_01.name = "mc_LOGO_BSPS_ko_01";
        this.mc_LOGO_BSPS_ko_01.setTransform(0, 20, 1, 1, 0, 0, 0, 50, 20);
        this.mc_LOGO_BSPS_ko_01.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 5);
        this.mc_LOGO_BSPS_ko_01.filters = [new cjs.BlurFilter(20, 20, 3)];
        this.mc_LOGO_BSPS_ko_01.cache(-2, -2, 104, 44);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_ko_01).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS_ds, new cjs.Rectangle(-124, -74, 252, 192), null);


    (lib.mc_LOGO_BSPS = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // mc_LOGO_BSPS_spears
        this.mc_LOGO_BSPS_spears = new lib.mc_LOGO_BSPS_spears();
        this.mc_LOGO_BSPS_spears.name = "mc_LOGO_BSPS_spears";
        this.mc_LOGO_BSPS_spears.setTransform(26.5, 22.65, 1, 1, 0, 0, 0, 21.8, 4.2);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_spears).wait(1));

        // mc_LOGO_BSPS_show
        this.mc_LOGO_BSPS_show = new lib.mc_LOGO_BSPS_show();
        this.mc_LOGO_BSPS_show.name = "mc_LOGO_BSPS_show";
        this.mc_LOGO_BSPS_show.setTransform(7.75, 7.5, 1, 1, 0, 0, 0, 0, 7.5);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_show).wait(1));

        // mc_LOGO_BSPS_private
        this.mc_LOGO_BSPS_private = new lib.mc_LOGO_BSPS_private();
        this.mc_LOGO_BSPS_private.name = "mc_LOGO_BSPS_private";
        this.mc_LOGO_BSPS_private.setTransform(3.4, 7.65, 1, 1, 0, 0, 0, 53.4, 7.4);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_private).wait(1));

        // mc_LOGO_BSPS_new
        this.mc_LOGO_BSPS_new = new lib.mc_LOGO_BSPS_new();
        this.mc_LOGO_BSPS_new.name = "mc_LOGO_BSPS_new";
        this.mc_LOGO_BSPS_new.setTransform(0, 36.7, 1, 1, 0, 0, 0, 33.4, 3.4);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_new).wait(1));

        // mc_LOGO_BSPS_britney
        this.mc_LOGO_BSPS_britney = new lib.mc_LOGO_BSPS_britney();
        this.mc_LOGO_BSPS_britney.name = "mc_LOGO_BSPS_britney";
        this.mc_LOGO_BSPS_britney.setTransform(-22.3, 22.65, 1, 1, 0, 0, 0, 21.8, 4);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_britney).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.mc_LOGO_BSPS, new cjs.Rectangle(-50, 0, 100, 40), null);

    //#endregion ========================= movieclips: =========================


    //#region ========================= stage content: =========================

    (lib._26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250_0720 = function (mode, startPosition, loop, reversed) {

        console.log('PING!!! BSPS 3a: stage content');

        if (loop == null) { loop = false; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        this.actionFrames = [0];
        this.isSingleFrame = false;


        //#region ==================== timeline functions: ====================

        // this.frame_0 = function () {

            if (this.isSingleFrame) {
                return;
            }

            if (this.totalFrames == 1) {
                this.isSingleFrame = true;
            }

            //#region ==================== ANIMATION ====================

            var staggerDuration = 0.75;
            var staggerDelay = 0.0625;

            var animDuration00 = 0.125;
            var animDuration01 = 0.5;
            var animDuration02 = 1;
            var animDuration03 = 1.5;
            var animDuration04 = 2;
            var animDuration05 = 2.5;
            var animDuration06 = 3;
            var animDuration07 = 3.5;
            var animDuration08 = 4;
            var animDuration09 = 4.5;
            var animDuration10 = 5;

            //#endregion ==================== ANIMATION ====================


            //#region ==================== FUNCTIONS ====================

            //-------------------- FUNCTION: consoleLog(message) --------------------

            function consoleLog(message) {
                console.log(message);
            }

            //#endregion ==================== FUNCTIONS ====================


            //#region ==================== TIMELINE ====================

            var tl = new TimelineMax({ delay: 0 });

            tl

                //#region ==================== FRAME 01 ====================

                .call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

                .fromTo([this.mc_bg01], { alpha: 0 }, { alpha: 1, ease: Power0.easeIn, repeat: 1, yoyo: true, duration: animDuration02 }, "frame01 +=0")

                .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_britney, this.mc_LOGO_BSPS.mc_LOGO_BSPS_spears], { scale: 0.75, ease: "power3.out" }, { scale: 1, ease: "power3.out", duration: animDuration05 }, "frame01 +=0")
                .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_britney], { alpha: 0, ease: "power3.out" }, { alpha: 1, ease: "power3.out", duration: animDuration04 }, "frame01 +=0")
                .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_spears], { alpha: 0, ease: "power3.out" }, { alpha: 1, ease: "power3.out", duration: animDuration04 }, "frame01 +=0.25")
                .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_private, this.mc_LOGO_BSPS.mc_LOGO_BSPS_show], { scale: 0.75, alpha: 0, ease: "back.inOut(2)" }, { scale: 1, alpha: 1, ease: "back.inOut(2)", duration: animDuration05 }, "frame01 +=0")

                .fromTo([this.mc_LOGO_BSPS.mc_LOGO_BSPS_new], { alpha: 0, ease: "power3.out" }, { alpha: 1, ease: "power3.out", duration: animDuration06 }, "frame01 +=2")

                .call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=2")

                //#endregion ==================== FRAME 01 ====================



                //#region ==================== FRAME 02 ====================

                .call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

                .to([this.mc_LOGO_BSPS, this.mc_LOGO_BSPS_ds], { y: 20, scale: 1.8, ease: "power3.out", duration: animDuration02 }, "frame02 -=1.5")
                .fromTo([this.mc_bottle], { y: 100, alpha: 0, ease: "power3.out" }, { y: 80, alpha: 1, ease: "power3.out", duration: animDuration02 }, "frame02 -=1.5")

                .call(consoleLog, ["FRAME 02 END!!!"], "frame02 -=1.5")

                //#endregion ==================== FRAME 02 ====================



                //#region ==================== FRAME 03 ====================

                .call(consoleLog, ["FRAME 03 BEGIN!!!"], "frame03")

                .to([this.mc_LOGO_BSPS, this.mc_LOGO_BSPS_ds], { x: 210, y: 35, scale: 1.6, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")
                .to([this.mc_bottle], { x: 130, y: 90, scale: 0.95, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")
                .fromTo([this.mc_image], { x: -200, scale: 1.05882352941176, ease: "power3.out" }, { x: 0, scale: 1, ease: "power3.out", duration: animDuration02 }, "frame03 +=1")

                .call(consoleLog, ["FRAME 03 END!!!"], "frame03 +=1")

                //#endregion ==================== FRAME 03 ====================

            //#endregion ==================== TIMELINE ====================


            console.log('PING!!! BSPS 3b: stage content');

        // }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // mc_BSPS_border
        this.mc_border = new lib.mc_BSPS_border();
        this.mc_border.name = "mc_border";
        this.mc_border.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);

        this.timeline.addTween(cjs.Tween.get(this.mc_border).wait(1));

        // mc_BSPS_logo_walgreens
        this.mc_logo_walgreens = new lib.mc_BSPS_logo_walgreens();
        this.mc_logo_walgreens.name = "mc_logo_walgreens";
        this.mc_logo_walgreens.setTransform(260, 11.1, 1, 1, 0, 0, 0, 50, 11.1);

        this.timeline.addTween(cjs.Tween.get(this.mc_logo_walgreens).wait(1));

        // mc_BSPS_bottle
        this.mc_bottle = new lib.mc_BSPS_bottle();
        this.mc_bottle.name = "mc_bottle";
        this.mc_bottle.setTransform(70, 80);

        this.timeline.addTween(cjs.Tween.get(this.mc_bottle).wait(1));

        // mc_LOGO_BSPS
        this.mc_LOGO_BSPS = new lib.mc_LOGO_BSPS();
        this.mc_LOGO_BSPS.name = "mc_LOGO_BSPS";
        this.mc_LOGO_BSPS.setTransform(150, 85, 2.3, 2.3);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS).wait(1));

        // mc_LOGO_BSPS_ds
        this.mc_LOGO_BSPS_ds = new lib.mc_LOGO_BSPS_ds();
        this.mc_LOGO_BSPS_ds.name = "mc_LOGO_BSPS_ds";
        this.mc_LOGO_BSPS_ds.setTransform(150, 85, 2.3, 2.3);

        this.timeline.addTween(cjs.Tween.get(this.mc_LOGO_BSPS_ds).wait(1));

        // mc_BSPS_bg01
        this.mc_bg01 = new lib.mc_BSPS_bg01();
        this.mc_bg01.name = "mc_bg01";
        this.mc_bg01.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);

        this.timeline.addTween(cjs.Tween.get(this.mc_bg01).wait(1));

        // mc_BSPS_image
        this.mc_image = new lib.mc_BSPS_image();
        this.mc_image.name = "mc_image";
        this.mc_image.setTransform(-175, 0);

        this.timeline.addTween(cjs.Tween.get(this.mc_image).wait(1));

        this._renderFirstFrame();

        //#endregion ==================== timeline functions: ====================

    }).prototype = p = new lib.AnMovieClip();

    //#endregion ========================= stage content: =========================


    p.nominalBounds = new cjs.Rectangle(-25, 124.5, 368, 275.5);


    //#region ========================= library properties: =========================

    lib.properties = {
        id: '6A34960ED4AD46AE8AA9E8E507E52FBA',
        width: 300,
        height: 250,
        fps: 30,
        color: "#666666",
        opacity: 1.00,
        manifest: [
            // { src: "images/BSPS_bg01.jpg?1594522899923", id: "BSPS_bg01" },
            // { src: "images/BSPS_bottle.png?1594522899923", id: "BSPS_bottle" },
            // { src: "images/BSPS_image.jpg?1594522899923", id: "BSPS_image" }
            { src: "images/BSPS_bg01.jpg", id: "BSPS_bg01" },
            { src: "images/BSPS_bottle.png", id: "BSPS_bottle" },
            { src: "images/BSPS_image.jpg", id: "BSPS_image" }
        ],
        preloads: []
    };

    //#endregion ========================= library properties: =========================


    //#region ========================= bootstrap callback support: =========================

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['6A34960ED4AD46AE8AA9E8E507E52FBA'] = {
        getStage: function () { return exportRoot.stage; },
        getLibrary: function () { return lib; },
        getSpriteSheet: function () { return ss; },
        getImages: function () { return img; }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function (container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    an.handleSoundStreamOnTick = function (event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused) {
                stageChild.syncStreamSounds();
            }
        }
    }

    //#endregion ========================= bootstrap callback support: =========================


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;