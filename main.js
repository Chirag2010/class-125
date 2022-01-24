noseX=0;
noseY=0;
rightWristx=0;
leftWristx=0;
diffrence=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized!');
}
    function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY="+noseY);
    rightWristx=results[0].pose.rightWrist.x;
    leftWristx=results[0].pose.leftWrist.x;
    diffrence=floor(leftWristx-rightWristx);
    console.log("leftWristx="+leftWristx+"rightWristx"+leftWristx+"diffrence="+diffrence);
}
}
function draw(){
    stroke("#000000");
    document.getElementById("square_side").innerHTML="The width and height of square would be "+diffrence+"px";
    background("#808080");
    fill("#FFA500");
    square(noseX, noseY,diffrence);

}