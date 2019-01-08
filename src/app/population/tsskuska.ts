class Point{ //interface ako v Jave alebo c#
    x: number;
    y: number;
    // Metody
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point){

    }
}

// Objekt - instancia triedy
let point = new Point();
point.x;
point.y = 2;
point.draw();