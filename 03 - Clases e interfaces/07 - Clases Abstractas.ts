abstract class Matematicas
{
    public x: number;
    public y: number;
    public resultado:number = 0;

    constructor (v1:number,v2:number)
    {
        this.x = v1;
        this.y= v2;
    }

    abstract operacion():void;

    mostrarResultado():void
    {
        console.log("El resultado de la operación es " + this.resultado);
    }
}

class Suma extends Matematicas
{
    constructor(v1:number, v2:number)
    {
        super(v1,v2)
    }

    operacion():void
    {
        this.resultado = this.x + this.y;
    }
}

class Resta extends Matematicas
{
    constructor(v1:number, v2:number)
    {
        super(v1,v2)
    }

    operacion():void
    {
        this.resultado = this.x - this.y;
    }
}

class Multiplicacion extends Matematicas
{
    constructor(v1:number, v2:number)
    {
        super(v1,v2)
    }

    operacion():void
    {
        this.resultado = this.x * this.y;
    }
}

let prueba = new Suma(3,67);
prueba.operacion();
prueba.mostrarResultado();

let prueba2 = new Multiplicacion(3,10);
prueba2.operacion();
prueba2.mostrarResultado();

let prueba3 = new Resta(6,2);
prueba3.operacion();
prueba3.mostrarResultado();