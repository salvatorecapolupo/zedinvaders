Crafty.scene("main", function() {
  
        Crafty.box2D.init(0, 10, 32, true);

	var elements = [
        //"src/entities/ufo.js",
        "src/entities/guineapig.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		//sc['ufo'] = new Ufo();
                sc['guineapig'] = new GuineaPig();
		infc['info'] = new Info();
	});
        
        // Create the floor
        var floor = Crafty.e("2D, Canvas, Box2D")
          .attr({
              isFloor: true
          })
          .setName("Box2D Floor")
          .box2d({
              bodyType: 'static',
              shape: [[0, Crafty.viewport.height], [Crafty.viewport.width, Crafty.viewport.height]]
          });
        
        var map = Crafty.e("TiledLevel");
        map.tiledLevel("./web/levels/level.json", "Canvas");

});
