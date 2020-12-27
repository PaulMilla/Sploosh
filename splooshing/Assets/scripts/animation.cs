using UnityEngine;
using System.Collections;

public class animation : MonoBehaviour {

	public float FPS;
	private float secondsToWait;
	public Texture[] frames;
	public bool Loop;
	private int currentFrame;

	// Use this for initialization
	void Start () {
		currentFrame = 0;
		secondsToWait = 1 / FPS;
		StartCoroutine (Animate ());
	}

	IEnumerator Animate()
	{
		bool stop = false;

		if (currentFrame >= frames.Length) {
			if(Loop == false)
				stop = true;
			else
				currentFrame = 0;
		}

		yield return new WaitForSeconds(secondsToWait);
		renderer.material.mainTexture= frames[currentFrame];
		currentFrame++;

		if(stop == false)
			StartCoroutine(Animate());
	}

	// Update is called once per frame

}
