﻿#pragma strict

var jump 	  : KeyCode;

var maxSpeed 	 : float = 10.0f;
var acceleration : float = 10.0f;
var jumpHeight   : float = 20.0f;
var hoverDuration: int = 30;
var hoverTimeLeft: int = hoverDuration;

var grounded = false;
var canHover = false;
var deathAudio : AudioClip;

var isDead = false;

function Start() {
	rigidbody2D.velocity.x = maxSpeed;
}

function Update () {
	if(Input.GetKeyDown(jump) && grounded) {
		hoverTimeLeft = hoverDuration;
		canHover = true;
		grounded = false;
		rigidbody2D.velocity.y = jumpHeight;
	}
	
	if(hoverTimeLeft > -100) {
		hoverTimeLeft -= Time.deltaTime;
	}
	
	if(Input.GetKeyUp(jump) || hoverTimeLeft <= 0) {
		canHover = false;
		rigidbody2D.gravityScale = 9.2;
	}
	
	if(rigidbody2D.velocity.y <= 0 && canHover) {
		rigidbody2D.velocity.y = 0;
		rigidbody2D.gravityScale = 0;
	}
	
	if(rigidbody2D.velocity.x != maxSpeed && !isDead){
		jumpHeight = 0.0;
		rigidbody2D.gravityScale = 0.0;
		rigidbody2D.velocity.y = 0;
    	AudioSource.PlayClipAtPoint(deathAudio, transform.position);
    	isDead = true;
	}
}