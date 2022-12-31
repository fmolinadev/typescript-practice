enum especies {"Doméstico", "Angora", "Siames", "Persa"}

interface animal {
    nombre:string,
    edad:number,
    raza:especies
    verDatos():void
}

class Gato implements animal {
    nombre: string
    edad: number
    raza: especies

    constructor(n:string, e:number, r:especies){
        this.nombre = n,
        this.edad = e,
        this.raza = r
    }

    verDatos(): void {
        console.log(this.nombre,
        this.edad,
        especies[this.raza])
    }
}

let filo = new Gato("Filo", 3, especies.Angora)

filo.verDatos()