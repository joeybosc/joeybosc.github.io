const canvas = document.getElementById('boardcanvas');
const ctx = canvas.getContext('2d');

var imageInfo = [
    { src: 'img/breadboard.png', x: 0, y: 0},
];

var images = [];
var loadCount = 0;

function preloadImages(){
    for(var i = 0; i < imageInfo.length; i++){

        var img = new Image();
        img.src = imageInfo[i].src;

        images.push(img);
        img.onload = function(){
            if(++loadCount >= images.length){
                render();
            }
        }
    }
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < images.length; i++){
        ctx.drawImage(images[i], imageInfo[i].x, imageInfo[i].y);
    }
}

preloadImages();
main();