function solve(args) {
    'use strict'

    var splitter = args[0].split('\n'),
    i,
    counter = 1,
    maxCount = 1;

    for (i = 1; i <= +splitter[0]; i+=1) {
        if (+splitter[i] < +splitter[i + 1]) {

            counter+=1;

            if (counter > maxCount) {
                maxCount = counter;
            } 
        }
        else {
                counter = 1;
            }
    }
    console.log(maxCount)
}

//solve(['8\n7\n3\n2\n3\n4\n5\n2\n4']);
//['8', '7', '3', '2', '3', '4', '2', '2', '4']