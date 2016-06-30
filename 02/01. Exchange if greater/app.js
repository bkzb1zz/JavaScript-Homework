function solve(args) {

    var a = args[0];
    var b = args[1];
    if (a < b) {
        console.log(a + " " + b);
    }
    else if (b < a) {
        console.log(b + " " + a);
    }
    else {
        console.log(a + " " + b);
    }
}