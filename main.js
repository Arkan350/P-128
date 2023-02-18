var ohio = "";
var haddi = "";
right_wX = "";
right_wY = "";
left_wX = "";
left_wY= "";

function preload() {
    haddi = loadSound("Bones.mp3");
    ohio = loadSound("Believer.mp3");
}
function setup() {
    canvas = createCanvas(700,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function draw() {
    image(video,0,0,700,500)
}
function modelLoaded() {
    console.log("holaa!");
}
function gotResults(results) {
    if(results.length > 0){
        console.log(results);
        left_wX = results[0].pose.leftWrist.x;
        left_wY = results[0].pose.leftWrist.y;
        console.log("left_wX = " + left_wX + " left_wY = " + left_wY);
        right_wX = results[0].pose.rightWrist.x;        
        right_wY = results[0].pose.rightWrist.y;
        console.log("right_wX = " + right_wX + " right_wY = " + right_wY);
    }
}