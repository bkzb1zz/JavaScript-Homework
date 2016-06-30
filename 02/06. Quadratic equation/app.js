function solve(args) {

    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    var d = b * b - 4 * a * c;
    var x1;
    var x2;

    if (d < 0) {
        console.log('no real roots');
    }
    else if (d === 0) {
        x1 = -(b / (2 * a));
        console.log('x1=x2=' + x1.toFixed(2));
    }
    else if (d > 0) {
        x1 = (b * (-1) - Math.sqrt(d)) / (2 * a);
        x2 = (b * (-1) + Math.sqrt(d)) / (2 * a);
        if (x1 == x2) {
            console.log('x1=x2=' + x1.toFixed(2));
        }
        else if (x1 < x2) {
            console.log('x1=' + x1.toFixed(2) + '; ' + 'x2=' + x2.toFixed(2));
        }
        else {
            console.log('x1=' + x2.toFixed(2) + '; ' + 'x2=' + x1.toFixed(2));
        }
    }
}
