let ciudad:{
    id:number,
    nombre:string,
    provincia:string,
    visitada:boolean,
    direccion:{
        calle:string,
        altura:number
    }
}={
    id:3100,
    nombre:"Paraná",
    provincia:"Entre Ríos",
    visitada:true,
    direccion:{
        calle:"Urquiza",
        altura:300
    }
}

ciudad.visitada=false
ciudad.direccion.altura=600

console.log(ciudad)