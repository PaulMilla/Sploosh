#pragma strict

var target : Transform;
var numDead : int = 0;

function Update () {
    transform.position.x = target.position.x - 15;
    
    if(numDead == 2) {
    	Application.LoadLevel(0);
    }
}

function OnCollisionEnter2D(collision : Collision2D) {
	if(collision.gameObject.tag == "Player") {
		numDead++;
	}
	Destroy(collision.gameObject);
}