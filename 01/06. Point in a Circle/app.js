function solve(args) {
    var x = +args[0];
    var y = +args[1];
    var r = 2;
    var inCircle = ((x*x) + (y*y)) <= (r*r);
    var inCircle2 = (x*x) + (y*y);
    if (x >= (-1000) && x <= 1000 && y >= (-1000) && y <= 1000 && inCircle) {
    console.log('yes ' + Math.sqrt(inCircle2).toFixed(2));
    }
    else {
    console.log('no ' + Math.sqrt(inCircle2).toFixed(2));
    }
}
