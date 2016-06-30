function solve(args) {
    var numbers = args[0].split(' '),
    i,
    counter;

    for (i = 1; i < numbers.length; i++) {
        if (+numbers[i - 1] > +numbers[i] && +numbers[i + 1] > +numbers[i]) {
            counter+=1;
        }
        console.log(counter)
    }
}

solve(['12 12 11 12 12 '])