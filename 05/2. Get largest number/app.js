function GetMax(numbers) {

    var splitter = numbers[0].split(' ');

        if (+splitter[0] >= +splitter[1] && +splitter[0] >= +splitter[2]) {
            return +splitter[0];
        }
        else if (+splitter[1] >= +splitter[0] && +splitter[1] >= +splitter[2]) {
            return +splitter[1];
        }
        else if (+splitter[2] >= +splitter[1] && +splitter[2] >= +splitter[0]) {
            return +splitter[2];
        }
        else if (+splitter[0] === +splitter[1] && +splitter[0] === +splitter[2]) {
            return +splitter[0];
        }
}

//console.log(GetMax(['12 13 14']));