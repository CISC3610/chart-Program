var Chart = {
    canvas : undefined,
    canvasContext : undefined,
    rectanglePosition : 0
};

Chart.start = function () {
    Chart.canvas = document.getElementById("mycanvas");
    Chart.canvasContext = Chart.canvas.getContext("2d");
    Chart.mainLoop();
};

document.addEventListener( 'DOMContentLoaded', Chart.start);

Chart.clearCanvas = function () {
    Chart.canvasContext.clearRect(0, 0, Chart.canvas.width, Chart.canvas.height);
};

Chart.mainLoop = function() {
    Chart.clearCanvas();
    Chart.update();
    Chart.draw();
    window.setTimeout(Chart.mainLoop, 1000 / 60);
};

Chart.update = function () {
    // var d = new Date();
    // Chart.rectanglePosition = d.getTime() % Chart.canvas.width;
};

Chart.drawBar = function (name,height,color,xCordBar,XCordName) {
    let ctx = Chart.canvasContext

    Chart.canvasContext.fillStyle = color;
    Chart.canvasContext.fillRect(xCordBar, 500, 70, -(18 * height));

    //text written in the canvas
    ctx.font = "20px Arial";
    ctx.fillStyle = "#212529";
    ctx.textAlign = "center";
    ctx.fillText(name, XCordName,550);

}

Chart.drawAllBars = function() {
    var fruit = [

        {name:"Strawberry", quantity:15, color:"red"},
        {name:"Peach", quantity:10, color:"orange"},
        {name:"Banana", quantity:25, color:"yellow"},
        {name:"Pear", quantity:10, color:"green"},
        {name:"Grape", quantity:20, color:"purple"}
    
    ];
        let xBar_counter = 80
        let xName_counter = 115

    for(let i = 0; i < fruit.length;i++){
        
        Chart.drawBar(fruit[i].name,fruit[i].quantity,fruit[i].color,
            xBar_counter,xName_counter)
            
            xBar_counter += 140
            xName_counter += 140
    }

}
Chart.DrawQuantity = function(){
    let ctx = Chart.canvasContext

    ctx.font = "20px Arial";
    ctx.fillStyle = "#212529";
    ctx.textAlign = "center";

    let count = 500

    for(let i = 0; i <= 25; i +=5){
        ctx.fillText(`- ${i}`, 25,count)
        count -= 88
    }

    // ctx.fillText("- 0", 25,500);

    // ctx.fillText("- 10", 25,300);

    // ctx.fillText("- 15", 25,200);

    // ctx.fillText("- 25", 25,20);
}

Chart.draw = function () {
    

    // Chart.drawBar("Strawberry",15,"red",50,100)
    // Chart.drawBar("Strawberry",15,"red",220,270)
    Chart.DrawQuantity()
    Chart.drawAllBars()
};