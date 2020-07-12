(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [];


    // symbols:



    (lib.BSPS_image = function () {
        this.initialize(img.BSPS_image);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 475, 250);// helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.mc_BSPS_image = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.BSPS_image();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.mc_BSPS_image, new cjs.Rectangle(0, 0, 475, 250), null);


    // stage content:
    (lib._26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250_0720 = function (mode, startPosition, loop) {
        if (loop == null) { loop = false; } this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            var animDuration02 = 1;

            TweenLite.to([this.mc_image], { x: 0, scale: 1, ease: "power3.out", duration: animDuration02 }, "frame03 +=1");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // mc_BSPS_image
        this.mc_image = new lib.mc_BSPS_image();
        this.mc_image.name = "mc_image";
        this.mc_image.parent = this;
        this.mc_image.setTransform(-175, 0);

        this.timeline.addTween(cjs.Tween.get(this.mc_image).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25, 124.5, 373, 275.5);
    // library properties:
    lib.properties = {
        id: '6A34960ED4AD46AE8AA9E8E507E52FBA',
        width: 300,
        height: 250,
        fps: 30,
        color: "#666666",
        opacity: 1.00,
        manifest: [
            { src: "images/BSPS_image.jpg", id: "BSPS_image" }
        ],
        preloads: []
    };



    // bootstrap callback support:

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
        getStage: function () { return exportRoot.getStage(); },
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


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;