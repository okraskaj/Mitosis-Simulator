/**
 * Created by Jasiek on 2016-12-13.
 */

var cells = [];


function setup(){
    createCanvas(400,400);
    cells.push(new Cell());
    cells.push(new Cell());
}

function draw() {
    background(51);
    for (var i = 0; i < cells.length; i++) {
        cells[i].move();
        cells[i].show();
    }

}

function mousePressed() {
    for (var i = 0; i < cells.length; i++) {
        if(cells[i].clicked(mouseX,mouseY)){
            console.log("klikniete" + i);
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());
        }
    }

}