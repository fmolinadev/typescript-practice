function calculo(
    a:number,
    b:number,
    fun:(x:number, y:number)=>number
):number{
    return fun(a,b)
}

//Callback con types:

function calculoConType(
    a:number,
    b:number,
    fun:(x:number, y:number)=>number
):number{
    return fun(a,b)
}


console.log(calculo(5,2,(x:number,y:number):number=>{return x*y})
)
console.log(calculoConType(5,2,(x:number,y:number):number=>{return x*y})
)