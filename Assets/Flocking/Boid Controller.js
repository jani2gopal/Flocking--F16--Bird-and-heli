// these define the flock's behaviorvar minVelocity : float 	= 5;var maxVelocity : float 	= 20;
var randomness : float 		= 1; var flockSize : int			= 20;
var prefab : GameObject; 
var chasee : GameObject;

var flockCenter : Vector3;
var flockVelocity : Vector3;

private var f16as;
function Start() {
	f16as = new Array(flockSize);
	for (var i=0; i<flockSize; i++) {		var position = Vector3(						Random.value*collider.bounds.size.x,						Random.value*collider.bounds.size.y,						1)-collider.bounds.extents;		var f16a = Instantiate(prefab, transform.position, transform.rotation);		f16a.transform.parent = transform;		f16a.transform.localPosition = position;
		f16a.GetComponent("Boid Flocking").setController(gameObject);
		f16as[i] = f16a;
	}}function Update () {   
   	var theCenter = Vector3.zero;   	var theVelocity = Vector3.zero;
   	for (var f16a : GameObject in f16as) {
		theCenter       = theCenter + f16a.transform.localPosition;		theVelocity     = theVelocity + f16a.rigidbody.velocity;
   	}
	flockCenter = theCenter/(flockSize);	
	flockVelocity = theVelocity/(flockSize);
}
