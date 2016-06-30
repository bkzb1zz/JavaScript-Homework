function solve(args) {

    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    if (a >= b && b >= c && b != 0 && c != 0 && a != 0) {
        console.log(a + " " + b + " " + c);
    }
    else if (a >= b && a >= c && b != 0 && c != 0 && a != 0) {
        console.log(a + " " + c + " " + b);
    }
    else if (b >= a && a >= c && b != 0 && c != 0 && a != 0) {
        console.log(b + " " + a + " " + c);
    }
    else if (b >= c && c >= a && b != 0 && c != 0 && a != 0) {
        console.log(b + " " + c + " " + a);
    }
    else if (c >= a && a >= b && b != 0 && c != 0 && a != 0) {
        console.log(c + " " + a + " " + b);
    }
    else if (c >= b && b >= a && b != 0 && c != 0 && a != 0) {
        console.log(c + " " + b + " " + a);
    }
    else if (a == 0 && b >= c) {
        console.log(b + " " + c);
    }
    else if (b == 0 && a >= c) {
        console.log(a + " " + c);
    }
    else if (c == 0 && a >= b) {
        console.log(a + " " + b);
    }
}