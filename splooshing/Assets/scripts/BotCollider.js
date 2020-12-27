#pragma strict

var weight = 100.0;
var player : PlayerControl;

this.rigidbody2D.mass = weight;

function OnCollisionEnter2D(collision : Collision2D) {
	if(collision.gameObject.tag == "Ground" || collision.gameObject.tag == "Block") {
		player.grounded = true;
		player.canHover = false;
	}
}