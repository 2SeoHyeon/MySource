var canvas = document.getElementById("story-canvas");
var ctx = canvas.getContext("2d");

window.addEventListener('resize', resize.bind(), false);

resize();

function resize() {
    stageWidth = document.body.clientWidth;
    stageHeight = document.body.clientHeight;
    canvas.width = stageWidth - 10;
    canvas.height = stageHeight - 10;
}

var img = new Image();
img.src = "/Content/Img/Game/target0.png";

img.onload = function () {
    ctx.drawImage(img, canvas.width / 2 - 500, canvas.height / 2 - 500, 1000, 1000);
    GetTargetLoad();
}

function GetTargetLoad() {

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#fff";
    ctx.strokeRect(30, canvas.height - 320, canvas.width - 50, 300);
    ctx.fillRect(30, canvas.height - 320, canvas.width - 50, 300);
    ctx.font = "35px DOSPilgiMedium";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
    ctx.fillText("블라블라 얄라얄라", 70, canvas.height - 320 + 50, canvas.width - 50, 300);
}