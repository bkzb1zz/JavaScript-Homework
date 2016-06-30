function solve(args) {

    'use strict'

    var splitter = args[0].split('\n'),
    i,
    counter = 1,
    maxCount = 1;

    for (i = 1; i <= splitter[0]; i+=1) {
       if (splitter[i] === splitter[i + 1]) {
           counter+=1;
           if (counter > maxCount) {
               maxCount = counter;
           }
       }
       else{
           counter = 1;
       }
    }
    console.log(maxCount);
}

//solve(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']);