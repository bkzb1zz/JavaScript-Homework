function solve(args) {

    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else if (c > a && c > b) {
        console.log(c);
    }
    else if (a === b && a !== c && a > c) {
        console.log(a);
    }
    else if (b === c && b !== a && b > a) {
        console.log(b);
    }
    else if (a === c && a !== c && a > b) {
        console.log(a);
    }
    else if (a === b && a === c) {
        console.log(a);
    }
}