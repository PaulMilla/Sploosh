#pragma strict

var weight = 0.0001;
var player : PlayerControl;
var togetherAudio : AudioClip;


this.rigidbody2D.mass = weight;

function OnCollisionEnter2D(collision : Collision2D) {
	if(collision.gameObject.tag == "Player") {
    	AudioSource.PlayClipAtPoint(togetherAudio, collision.gameObject.transform.position);
		player.grounded = true;
		player.canHover = false;
	}
	if(collision.gameObject.tag == "Block" || collision.gameObject.tag == "Ground") {
		player.grounded = true;
		player.canHover = false;
	}
}