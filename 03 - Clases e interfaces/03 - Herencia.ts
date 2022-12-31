class Padre
{
    private nombre:string;
    constructor(n:string)
    {
        this.nombre =n;
    }
    dameNombre()
    {
        console.log("Mi nombre es " + this.nombre);
    }
}

class Hijo extends Padre
{
    edad:number;
    constructor(nom:string,e:number)
    {
        super(nom);
        this.edad =e;
    }

    dimeEdad()
    {
        console.log("Mi edad es " + this.edad);
    }
}


let p = new Padre("Dylan");
p.dameNombre();

let h = new Hijo("Carper",5);
h.dameNombre();
h.dimeEdad();

let nieto = new Hijo("Leo",1);

