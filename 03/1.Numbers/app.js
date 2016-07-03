function solve(args) {
    var input = +args[0];
    var concat = '';

    for (var index = 1; index <= input; index += 1) {
        concat += index + ' ';
    }
    console.log(concat);
    
}