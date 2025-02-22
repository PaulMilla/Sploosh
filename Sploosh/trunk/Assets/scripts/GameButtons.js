﻿#pragma strict

var btnTexture: Texture;
var p1_spot : Transform;
var p2_spot : Transform;

var p1_saved : float = 0.0;
var p2_saved : float = 0.0;

function Awake() {
	//DontDestroyOnLoad(this);
}

function OnGUI () {
    if( !btnTexture ) {
		Debug.LogError("Please assign a texture on the inspector");
		return;
	}
		
	if(GUI.Button( Rect(20, 40, 40, 40), btnTexture)) {
		if(GameObject.Find("PlayerBlue") == null ||
		   GameObject.Find("PlayerRed" ) == null ) {
		   return;
		}
		p1_saved = p1_spot.position.x;
		p2_saved = p2_spot.position.x;
	}
	 
}
