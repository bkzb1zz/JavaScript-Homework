function solve(args) {
    var input = args[0].split(/,| |\n/),
        n = +input[0],
        x = input[input.length - 1],
        numbers = input.slice(1, input.length - 1).map(Number),
        counter = 0,
        i;

        console.log('x ' + x);
    for (i = 0; i <= input.length; i += 1) {
        if (+numbers[i] === +x) {
            counter += 1;
        }
    }
    return counter;
}
console.log(solve(['3 3 3 3']));