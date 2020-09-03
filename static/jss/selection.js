p = 0;
q = 1;
ans = true;
function init() {
	place = document.getElementById("mycanvas");
	pen   = place.getContext("2d");

	H = place.height;
	W = place.width;

	W+=450;
	H-=2;
	arr=[];
	len = 92;
	ox = 2;
	total_ox = 5*len;
	remain_width = W - total_ox;
	each_width  = remain_width/len;
	//fill array
	for (var i = 0; i < len; i++) {
		arr.push(Math.random()*140);
	}

	penColor = "red";
	noCall = false;
	draw();
}

function draw(){
pen.clearRect(0,0,W,H);
	for (var i = 0; i < arr.length; i++) {
		pen.fillStyle = penColor;
		if(i<p){
			pen.fillStyle = "green";
		}
		
		if(i==p){
			pen.fillStyle = "white";
		}
		if(i==q){
			pen.fillStyle = "aqua";
		}	
		if(p==arr.length){
			pen.fillStyle="red";
		}	
		pen.fillRect(ox,H-arr[i],each_width-2,arr[i]);
		ox = ox+each_width;
	}
	ox = 2;
}

function update(){
	//selection sort algoritham

	penColor = "yellow";

	//selection sort
	if(p<arr.length){
		if(p+1==q){
			valm = p;
		}
		if(arr[valm]>arr[q]){
			valm = q;
		}
		q+=1;
		if(q>=arr.length){
			var temp = arr[valm];
			arr[valm] = arr[p];
			arr[p] = temp;
			p+=1;
			q = p+1;
		}
	}else{
		penColor = "red";
		ans = false;
	}
}

function gameLoop(){
	draw();
	update();
	if(ans==false){
		// alert("complete");
	}
}
init();
setInterval(gameLoop,100);

	