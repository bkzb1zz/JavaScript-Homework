function solve(args) {
    var input = +args[0];
    result = Math.floor(input%1000/100);

    if (result === 7) {
        console.log('true')
    }
    else{
        result = result % 10;
        console.log('false ' + result)
    }
}