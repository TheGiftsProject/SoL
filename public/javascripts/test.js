(function() {

  var canvas = document.getElementsByTagName("canvas")[0];

  var ctx = canvas.getContext("2d");


  var gameObject = new GameObject();
  gameObject.position = new Vector(10, 10);
  gameObject.velocity = new Vector(10, 10);

  var draw = function() {
    gameObject.updatePosition(0.016);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 480, 320);
    ctx.fillStyle = "black";
    ctx.fillRect(gameObject.position.x, gameObject.position.y, 1, 1);
    setTimeout(draw, 16);
  };

  draw();
})();
