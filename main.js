status="";
objects_name="";
function preload(){

}

function setup(){
    canvas = createCanvas(380,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide(video);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
    objects_name = document.getElementById("object_name").value;

}
function modelLoaded(){
console.log("MODEL IS LOADED");
status=true;

}

function draw(){
    image(video,0,0,380,300);
    }