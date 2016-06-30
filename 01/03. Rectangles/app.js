function solve(args) {
    var input = +args[0];
    var input2 = +args[1];

    var area = input * input2;
    var perimeter = input*2 + input2*2;

    console.log((area).toFixed(2) + ' ' + (perimeter).toFixed(2));
}