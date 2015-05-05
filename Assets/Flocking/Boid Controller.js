// these define the flock's behavior
var randomness : float 		= 1; 
var prefab : GameObject; 
var chasee : GameObject;

var flockCenter : Vector3;
var flockVelocity : Vector3;

private var f16as;

	f16as = new Array(flockSize);
	for (var i=0; i<flockSize; i++) {
		f16a.GetComponent("Boid Flocking").setController(gameObject);
		f16as[i] = f16a;
	}
   	var theCenter = Vector3.zero;
   	for (var f16a : GameObject in f16as) {
		theCenter       = theCenter + f16a.transform.localPosition;
   	}
	flockCenter = theCenter/(flockSize);	
	flockVelocity = theVelocity/(flockSize);
}