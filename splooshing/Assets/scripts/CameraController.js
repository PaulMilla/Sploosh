#pragma strict

var targetTrans : Transform;
var targetSpeed : PlayerControl;
var ground : Transform;
var distance : float;

function Start() {
    transform.position.z = targetTrans.position.z - distance;
    transform.position.y = ground.position.y + distance / 2;
    transform.position.x = targetTrans.position.x + distance / 2;
    rigidbody2D.velocity.x = targetSpeed.maxSpeed;
}