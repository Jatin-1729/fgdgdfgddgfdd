song = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,500,500);
}

function playSong(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
console.log("PoseNet Is  Initailised")
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
    }

    leftWristX = result[0].pose.leftWrist.x;
    leftWristY = result[0].pose.leftWrist.y;
    console.log("leftWristX - " + leftwristX + "leftWristY - " + leftWristY);


    rightWristX = result[0].pose.rightWrist.X;
    rightWristY = result[0].pose.rightWrist.y;
    console.log("rightWristX - " + rightwristX + "rightWristY - " + rightWristY);

}