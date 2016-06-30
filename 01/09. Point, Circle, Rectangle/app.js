function solve(args) {
 
    var a = +args[0];
    var b = +args[1];
	var r = 1.5;

    var inCircle = (a-1)*(a-1) + (b-1)*(b-1) <= r*r;
    var inRectangle = (a >= -1 && a <= 5) && (b >= -1 && b <= 1);

    if (a >= (-1000) && a <= 1000 && b >= (-1000) && b <= 1000 && inCircle) {
        //console.log('inside circle');
        process.stdout.write('inside circle');
    }
    else {
        //console.log('outside circle');
        process.stdout.write('outside circle');
    }

    if (a >= -1000 && a <= 1000 && b >= -1000 && b <= 1000 && inRectangle) {
        //console.log('inside rectangle');
        process.stdout.write(' inside rectangle');
    }
     else {
        //console.log('outside rectangle');
        process.stdout.write(' outside rectangle');
    }   
} 


