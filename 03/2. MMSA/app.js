function solve(args) {

    var min = +args[0];
    var max = +args[0];
    var sum = +args[0];
    var avg = 0;
    var length = args.length;

    for (var i = 1; i < length; i += 1) {
        if (min > +args[i]) {
            min = +args[i];
        }
        if (max < +args[i]) {
            max = +args[i];
        }
        sum += +args[i];
    }
    avg = sum / length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));

}
