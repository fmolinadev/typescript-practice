import {Persona} from "./Persona"

export class Medico extends Persona 
{
    private _guardias:boolean;
    private _especialidad:string;

    constructor(nom:string,fecha:string,guard:boolean,especialidad:string)
    {
        super(nom,fecha)
        this._guardias=guard;
        this._especialidad=especialidad;
    }

    get especialidad():string
    {
        return this._especialidad;
    }

    set especialidad(value:string)
    {
        this._especialidad =value;
    }

    get guardias():boolean
    {
        return this._guardias;
    }

    set guardias(value:boolean)
    {
        this._guardias =value;
    }

    

}