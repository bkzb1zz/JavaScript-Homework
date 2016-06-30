function solve(args) {


    var a = args[0];
    var b = args[1];
    var c = args[2];
    var minuscount = 0;

    if (a == 0 || b == 0 || c == 0) {
        console.log(0);
    }
    if (a > 0 && b > 0 && c > 0) {
        console.log('+');
    }
    if (a < 0) {
        minuscount++;
    }
    if (b < 0) {
        minuscount++;
    }
    if (c < 0) {
        minuscount++;
    }
    if (minuscount == 1 && a != 0 && b != 0 && c != 0) {
        console.log('-');
    }
    else if (minuscount == 2 && a != 0 && b != 0 && c != 0) {
        console.log('+');
    }
    else if (minuscount == 3 && a != 0 && b != 0 && c != 0) {
        console.log('-');
    }
}