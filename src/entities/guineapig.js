GuineaPig = BaseEntity.extend({
    defaults: {
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, " + gameContainer.conf.get('renderType') + ", guinea, SpriteAnimation");

    	entity
            .attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 0, z: 300})
            .animate("walking", 0, 0, 2)
            .bind('EnterFrame', function(e){
              this.animate("walking", 20);
            })
            .setName('Guinea Pig');

            entity.origin(entity.w/2, entity.h/2);

    	model.set({'entity' : entity });
    }
});