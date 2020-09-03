p = 0;
q = 0;
ans = true;
function init() {
	place = document.getElementById("mycanvas");
	pen   = place.getContext("2d");

	H = place.height;
	W = place.width;

	W+=250;
	H-=2;
	arr=[];
	len = 50;
	ox = 2;
	total_ox = 5*len;
	remain_width = W - total_ox;
	each_width  = remain_width/len;
	//fill array
	for (var i = 0; i < len; i++) {
		arr.push(Math.random()*120);
	}

	penColor = "red";
	noCall = false;
	draw();
}

function draw(){
pen.clearRect(0,0,W,H);
	for (var i = 1; i < arr.length; i++) {
		pen.fillStyle = penColor;
		if(i>=arr.length-q){
			pen.fillStyle = "green";
		}
		if(i==p){
			pen.fillStyle = "white";
		}
		if(i==q&&i<arr.length-q){
			pen.fillStyle = "aqua";
		}
		if(q==arr.length){
			pen.fillStyle="red";
		}
		pen.fillRect(ox,H-arr[i],each_width-2,arr[i]);
		ox = ox+each_width;
	}
	ox = 2;
}

function bubbleSort(){
	//bubble sort algoritham
	penColor = "yellow";
	if(q<arr.length){
		let x1 = arr[p];
		let x2 = arr[p+1];
		if(x1>x2){
			let temp = arr[p];
			arr[p]   = arr[p+1];
			arr[p+1] = temp;
		}
		if(p>=arr.length-1-q){
			p=0;
			q+=1;
		}
		p+=1;
	}else{
		penColor="red";
		ans = false;
	}

}

function update(){
	bubbleSort();
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