(function() {
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }

  Vector.prototype.add = function(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  };

  Vector.prototype.scale = function(amount) {
    return new Vector(this.x * amount, this.y * amount);
  };

  window.Vector = Vector;
})();
