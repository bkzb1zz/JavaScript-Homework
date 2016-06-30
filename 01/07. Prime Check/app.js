function solve(args) {
    var input = +args[0];
    var counter = 0;
    if (input < 0 || input < 2) {
    console.log('false');
    }

    for (var index = 2; index <= input; index+=1) {
        if (input % index === 0) {
        counter++;
        }
    }

    if (counter > 1) {
        console.log('false');
    }

    if (counter === 1) {
        console.log('true');
    }   
}
