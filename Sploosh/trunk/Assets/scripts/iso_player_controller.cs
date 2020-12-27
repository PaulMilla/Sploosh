using UnityEngine;
using System.Collections;

public class iso_player_controller : MonoBehaviour {
    public float turnSmoothing = 15f;
    public float speedDampTime = 0.1f;

    private Animator anim;
    private HashIDs has;

    void Awake()
    {
        anim = GetCOmponent<Animator>();
        hash = GameObject.FindGameObjectWithTag(Tags.gameController).getComponent<HashIDs>();
        anim.SetLayerWeight(1, 1f);
    }

    void FixedUpdate()
    {
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");
        bool sneak = Input.GetButton("Sneak");
    }

    void MovementManagement(float horizontal, float vertical, bool sneaking)
    {
        anim.SetBool(hash, sneakingBool, sneaking);

        if (horizontal != 0f || vertical != 0f)
        {
        }
    }

    void Rotating(float horizontal 


	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	    if(Input.GetKey("up")) {
            print ("Up arrow key is held down");
        }
        if (Input.GetKey("down")) {
            print("Down arrow Key is held down");
        }
        if (Input.GetKey("left"))
        {
            print("Left arrow Key is held down");
        }
        if (Input.GetKey("right"))
        {
            print("Right arrow Key is held down");
        }
	}
}
