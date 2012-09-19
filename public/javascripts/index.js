function SoL(canvas, targetFPS) {
    this.canvas = canvas;
    this.targetFPS = targetFPS;

    this.initCanvas();
    this.world = new World();
    this.renderer = new Renderer(this.world);
}

SoL.prototype.initCanvas = function() {
    this.ctx = this.canvas.getContext("2d");
    this.ctxWidth = this.canvas.width;
    this.ctxHeight = this.canvas.height;
    this.ctxScale = 1;
};

SoL.prototype.start = function() {
    this.targetInterval = Math.floor(1000 / this.targetFPS);
    this.currentTime = new Date().getTime();
    this.frameTimeAccumulator = 0;
    this.frameCounter = 0;
    this.loop();
}

SoL.prototype.loop = function() {
    var newTime = new Date().getTime();
    var updated = false;
    this.frameInterval = newTime - this.currentTime;
    this.currentTime = newTime;
    this.frameTimeAccumulator += this.frameInterval;

    while (this.frameTimeAccumulator >= this.targetInterval) {
        this.world.update(this.targetInterval / 1000);
        this.frameTimeAccumulator -= this.targetInterval;
        updated = true;
    }
    if (updated) {
        this.renderer.render();
        this.frameCounter += 1;
    }

    window.looper(_.bind(this.loop, this));
};

new SoL($('canvas')[0], 60).start()