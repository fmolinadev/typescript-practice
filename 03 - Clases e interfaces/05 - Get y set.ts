class Padre
{
    private _nombre:string;
    constructor(n:string)
    {
        this._nombre =n;
    }

    get nombre():string
    {
        return this._nombre;
    }
    set nombre(value:string)
    {
        this._nombre = value;
    }
}


let p = new Padre("Juan");
console.log(p.nombre);
p.nombre = "Manolito";
console.log(p.nombre);


