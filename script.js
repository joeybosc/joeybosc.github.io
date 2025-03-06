const canvas = document.getElementById('boardcanvas');
const ctx = canvas.getContext('2d');

var imageInfo = [
    { src: 'img/perfboard_only.png', x: 0, y: 0, snapOffsetX: 0, snapOffsetY: 0},
    { src: 'img/resistor10k.png', x: 272, y: 176, snapOffsetX: 9, snapOffsetY: 29},
    { src: 'img/led_red.png', x: 450, y: 42, snapOffsetX: 29, snapOffsetY: 163},
    { src: 'img/button.png', x: 185, y: 185, snapOffsetX: 16, snapOffsetY: 100},
    { src: 'img/led_blue.png', x: 852, y: 45, snapOffsetX: 29, snapOffsetY: 0}
];

//create the perfboard grid for snapping elements to, starting with the top left hole at (121,45)
var gridX = [121];
var gridY = [45];
var gridDistance = 40;
//populate the rest of the grid arrays:
for(var i = 0; i < 24; i++){
    gridX.push(gridX[i] + gridDistance);
}
for(var i = 0; i < 8; i++){
    gridY.push(gridY[i] + gridDistance);
}

var images = [];
var loadCount = 0;

var relativeMouseX = 0;
var relativeMouseY = 0;

var targetImageIndex = 1;

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

function handleMouseDown(event){
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    for(var i = 1; i < images.length; i++){
        if (mouseX >= imageInfo[i].x && mouseX <= imageInfo[i].x + images[i].width &&
            mouseY >= imageInfo[i].y && mouseY <= imageInfo[i].y + images[i].height){
            canvas.addEventListener('mousemove', handleDrag);
            canvas.addEventListener('mouseup', handleMouseUp);

            targetImageIndex = i;
        }
    }

    relativeMouseX = mouseX - imageInfo[targetImageIndex].x;
    relativeMouseY = mouseY - imageInfo[targetImageIndex].y;
}

function handleDrag(event){
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    imageInfo[targetImageIndex].x = mouseX - relativeMouseX + imageInfo[targetImageIndex].snapOffsetX;
    imageInfo[targetImageIndex].y = mouseY - relativeMouseY + imageInfo[targetImageIndex].snapOffsetY;

    snapToGrid(imageInfo[targetImageIndex].x, imageInfo[targetImageIndex].y);
    render();
    
}

function handleMouseUp(){
    canvas.removeEventListener('mousemove', handleDrag);
    canvas.removeEventListener('mouseup', handleMouseUp);
}

function snapToGrid(x, y){

    var dx = [];
    var dy = [];

    for (var i = 0; i < gridX.length; i++) {
        dx.push(Math.abs(x - gridX[i]));
    }
    for (var i = 0; i < gridY.length; i++) {
        dy.push(Math.abs(y - gridY[i]));
    }

    var minXIndex = dx.indexOf(Math.min(...dx));
    var minYIndex = dy.indexOf(Math.min(...dy));

    imageInfo[targetImageIndex].x = gridX[minXIndex] - imageInfo[targetImageIndex].snapOffsetX;
    imageInfo[targetImageIndex].y = gridY[minYIndex] - imageInfo[targetImageIndex].snapOffsetY;

}

preloadImages();
canvas.addEventListener('mousedown', handleMouseDown);
