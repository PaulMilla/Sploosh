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
var startingx: int = 0;
var touchHeld = false;
var isPlayer1 : boolean;

function Start() {
	rigidbody2D.velocity.x = maxSpeed;
//	transform.position.x = GameObject.Find("GameButtons").
//	                       GetComponent(GameButtons).p1_saved;
}

function Update () {
	for(var touch : Touch in Input.touches) {
		if (touch.position.x < Screen.width/2 && isPlayer1) {
			if (touch.phase == TouchPhase.Ended) {
				touchHeld = false;
			}
			if (touch.phase == TouchPhase.Began) {
				touchHeld = true; 
			}
		}
		if (touch.position.x > Screen.width/2 && !isPlayer1) {
			if (touch.phase == TouchPhase.Ended) {
				touchHeld = false;
			}
			if (touch.phase == TouchPhase.Began) {
				touchHeld = true;
			}
		}
	}
	
	if((touchHeld || Input.GetKeyDown(jump)) && grounded) {
		hoverTimeLeft = hoverDuration;
		canHover = true;
		grounded = false;
		rigidbody2D.velocity.y = jumpHeight;
	}
	
	if(hoverTimeLeft > -100) {
		hoverTimeLeft -= Time.deltaTime;
	}
	
	if((touchHeld || Input.GetKeyUp(jump)) || hoverTimeLeft <= 0) {
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
