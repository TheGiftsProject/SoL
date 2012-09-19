(function() {
  function GameObject() {
    this.position = new Vector(0, 0);
    this.velocity = new Vector(0, 0);
  }

  GameObject.prototype.updatePosition = function (deltaTime) {
    this.position = this.position.add(this.velocity.scale(deltaTime));
  };

  window.GameObject = GameObject;
})();
