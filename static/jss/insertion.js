p = 1;	
q = 0;
ele = p;
function init() {
	place = document.getElementById("mycanvas");
	pen   = place.getContext("2d");

	H = place.height;
	W = place.width;

	W+=250;
	// H-=2;
	arr=[];
	len = 50;
	q = len;
	ox = 2;
	total_ox = 5*len;
	remain_width = W - total_ox;
	each_width  = remain_width/len;
	//fill array
	for (var i = 0; i < len; i++) {
		arr.push(Math.random()*120);
	}

	penColor = "red";
	draw();
}

function draw(){
pen.clearRect(0,0,W,H);
	for (var i = 1; i < arr.length; i++) {
		pen.fillStyle = penColor;
		if(i==ele){
			pen.fillStyle = "white";
		}
		if(i>p){
			pen.fillStyle = "yellow";
		}
		if(i==p+1){
			pen.fillStyle ="red";
		}
		if(i==q){
			pen.fillStyle = "orange";
		}
		pen.fillRect(ox,H-arr[i],each_width-2,arr[i]);
		ox = ox+each_width;
	}
	ox = 2;
}

function update(){
	//insertion sort
	penColor = "green";
	if(p<arr.length){
		if(q>0&&arr[ele]<arr[q]){
			var temp = arr[ele];
			arr[ele] = arr[q];
			arr[q]   = temp;
			ele = q;
			q-=1;			
		}else{
			p+=1;
			ele = p;
			q = p-1; 
		}
	}else{
		q = 0;
		penColor = "red";
	}

}

function gameLoop(){
	draw();
	update();
}
init();
setInterval(gameLoop,100);