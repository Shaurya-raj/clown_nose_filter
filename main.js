nose_x=""
nose_y=""

function preload(){}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO); 
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",getPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose_x=",nose_x);
        console.log("nose_y=",nose_y);
    }
}

function draw(){
 image(video,0,0,400,400);   
}

function take_pic(){
    save("My picture.png");
}
