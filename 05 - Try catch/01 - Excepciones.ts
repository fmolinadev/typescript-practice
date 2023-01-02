//Añadir control de errores a cada una de las clase del ejemplo del modulo anterior
interface Vehiculo
{
    velocidad:number;
    peso:number;
    color:string;
    dameVelocidad():void;
    damePeso():void;
    dameColor():void;
}

class Coche implements Vehiculo
{
    velocidad:number;
    peso:number;
    color:string;
    constructor(vel:number,p:number,c:string)
    {
        this.velocidad = vel;
        this.peso = p;
        this.color = c;
    }
    dameVelocidad():void
    {
        try
        {
        console.log("La velocidad es " + this.velocidad);
        throw new Error("Error forzado");
        }
        catch(Error)
        {
            console.log("Catch 1 "+ Error.message);
        }
        
    }
    damePeso():void
    {
        try
        {
        console.log("El peso " + this.peso);
        }
        catch(Error)
        {
            console.log("Error "+ Error.message);
        }
    }
    dameColor():void
    {
        try
        {
        console.log("El color " + this.color);
        }
        catch(Error)
        {
            console.log("Error "+ Error.message);
        }
    }
}

try
{
    let c = new Coche(110,1000,"azul");
    c.dameVelocidad();
}
catch(Error)
{
    console.log("Catch 2 "+ Error.message);
}

