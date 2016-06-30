function solve(args) {

    var n = +args[0];
    var concat = '';
    var count = 0;

    for (var i = 2, j = 0, k = 1; i <= n; i+=1) {

        if (k < i && i === 2) {
            concat += k + ' ';
            k++;
        }

        concat += (i+j) + ' ';

        if (i === n) {
            count++;
            concat += '\n';
            i = 0;
            j++;

            if (count === n) {
                break;
            }

        }
    }

    if (n === 1) {
        console.log('1');
    }

    console.log(concat);

}