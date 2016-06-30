function solve(args) {
    var input = +args[0];

    var result = (input >>> 3).toString(2) + "";
    console.log(result[result.length - 1])
}