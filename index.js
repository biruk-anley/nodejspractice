var rect={
    perimeter : (x,y)=>(2*(x+y)),
    area : (x,y)=>(x*y)
};

function solveRect(l,b){
    console.log("solving for rectangle with l = " + l + "and with width = "+b)

    if (l<=0 || b<=0){
        console.log('Recntagle dimensions should be greater than zero')

    }
    else{
        console.log('the are of rectnagle is ' + rect.area(l,b))
        console.log('the perimeter of the rectnagle will be ' + rect.perimeter(l,b))
    }
}

solveRect(10,20)
solveRect(0,5)
solveRect(10,20)