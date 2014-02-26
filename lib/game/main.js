ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.forest_0',
	'game.entities.player',
	'impact.debug.debug'
	
)
.defines(function(){

GameInfo = new function(){
	this.level=	LevelForest_0;
	this.currentLevel = LevelForest_0;

}

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		this.loadLevel(LevelForest_0);
		this.camera = 'follow';
		// Initialize your game here; bind keys etc.
		if(!ig.ua.mobile){
		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW,'down');
		ig.input.bind(ig.KEY.LEFT_ARROW,'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW,'right');
			}
	},

	update: function() {
		this.parent();
		// Update all entities and backgroundMaps
		var gameviewport = ig.game.screen;
		var gamecanvas = ig.system;
		var player = this.getEntitiesByType( EntityPlayer )[0];
		// Add your own, additional update code here
		if(this.camera == 'follow'){
		  	gameviewport.x = player.pos.x - gamecanvas.width 	/2;
			gameviewport.y = player.pos.y - gamecanvas.height /2;}
		
			//ig.game.sortEntitiesDeferred();
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 520, 340, 2 );

});
