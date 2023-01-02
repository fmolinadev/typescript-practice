export class Persona
{
    private _nombre:string;
    private readonly _fechaNacimiento:string;
    constructor(nom:string,fecha:string)
    {
            this._nombre = nom;
            this._fechaNacimiento = fecha;
    }

    get nombre():string
    {
        return this._nombre;
    }

    set nombre(value:string)
    {
        this._nombre =value;
    }

    get fechaNacimiento():string 
    {
        return this._fechaNacimiento;
    }
}

