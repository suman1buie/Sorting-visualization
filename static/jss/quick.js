let states = [];

function init() {
	place = document.getElementById("mycanvas");
	pen   = place.getContext("2d");

	H = place.height;
	W = place.width;

	len = 100;
	W+=450;
	// H-=2;
	arr=[];
	ox = 2;
	total_ox = 5*len;
	remain_width = W - total_ox;
	each_width  = remain_width/len;
	//fill array
	for (var i = 0; i < len; i++) {
		arr.push(Math.random()*120);
		states[i] = -1;
	}

	penColor = "white";
	draw();
	sleep(2500);
}

function draw(){
	
pen.clearRect(0,0,W,H);
	for (var i = 0; i < arr.length; i++) {
		
		if(states[i]==0){
			pen.fillStyle = "red";
		}else if(states[i]==1){
			pen.fillStyle = "blue";
		}else{
			pen.fillStyle = penColor;
		}
		
		pen.fillRect(ox,H-arr[i],each_width-2,arr[i]);
		ox = ox+each_width;
	}
	ox = 2;
}

function update(){
	QuickSort(0,arr.length-1);
	// draw();
	penColor = "green";
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function QuickSort(start,end){
	if(start<end){
		var partition_place = await FindCurrectPlace(start,end);
		start[partition_place] = -1;
		await Promise.all([QuickSort(start,partition_place-1),QuickSort(partition_place+1,end)
			]);

	}
}

async function FindCurrectPlace(start,end){
	let pivot_element = arr[end];
	let pivotIndex = start;
	for(var i = start;i<end;i++){
		if(i==pivotIndex){
			states[i] = 0;
		}else{
			states[i] = 1;
		}
	}
	draw();
	for (var i = start; i <end; i++) {
		if(arr[i]<pivot_element){
			doSwap(arr,i,pivotIndex);
			pivotIndex++;
		}
	}
	doSwap(arr,pivotIndex,end);
	draw();
	states[pivotIndex] = -1;
	return pivotIndex;	
}

async function doSwap(arr,i,j){
	await sleep(15);
	let temp = arr[i];
	arr[i]   = arr[j];
	arr[j]   = temp;
}

function gameLoop(){
	sleep(25);
	update();
	sleep(35);	
}

init();
setInterval(gameLoop,500);