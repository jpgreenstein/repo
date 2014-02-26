ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityPlayer = ig.Entity.extend({

		size: {x: 25, y:50},
		offset: {x: 5, y: 5},
		vel:   {x:0,y:0},
		flip: false,
		maxVel: {x: 100, y: 100},
		name:'player',
// how to behave when active collision occurs
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.A,

		animSheet: new ig.AnimationSheet( 'media/player.png', 50, 50),
		init: function( x, y, settings ) {
			//call parent constructor
			this.parent( x, y, settings);
			//add the animations
			this.addAnim( 'idle', 1, [13] );
			this.addAnim( 'up', 0.25, [10,9,8,9,8]);
			this.addAnim( 'down', 0.25, [13,12,11,12,11]);
			this.addAnim( 'left', 0.25, [3,2,1,0,2,1,0]);
			this.addAnim( 'right', 0.25, [7,4,5,6,4,5,6]);

		},

		update: function() {
			this.parent();
				//player movement
			if(ig.input.state('up') || ig.input.pressed('tbUp')){
				this.vel.y = -100;
				this.currentAnim = this.anims.up;
				this.lastPressed = 'up';
	
			}
			else if(ig.input.state('down') || ig.input.pressed('tbDown')){
				this.vel.y =  100;
				this.currentAnim = this.anims.down;
				this.lastPressed = 'down';
			}
			else if(ig.input.state('left') || ig.input.pressed('tbLeft')){
				this.vel.x = -100;
				this.currentAnim = this.anims.left;
				this.lastPressed = 'left';
			}
			else if(ig.input.state('right')||ig.input.pressed('tbRight')){
				this.vel.x = 100;
				this.currentAnim = this.anims.right;
				this.lastPressed = 'right';
			}
			//if it is not a mobile, return your velocity to zero
			else if(!ig.ua.mobile){
				this.vel.y = 0; 
				this.vel.x = 0;
				this.currentAnim  = this.anims.idle;
			}
			this.parent();
		}

	});
});