enum especies {"Doméstico", "Angora", "Siames", "Persa"}

class gato {
    nombre:string
    edad:number
    raza:especies

    constructor(name:string, age:number, date:especies){
        this.nombre = name
        this.edad = age
        this.raza = date

    }

    verDatos():void{
        console.log("Los datos son:", this.nombre, this.edad, especies[this.raza])

    }
}

let miGato = new gato("Filo", 2, especies.Doméstico)

miGato.verDatos()