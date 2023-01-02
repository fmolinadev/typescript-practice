import {Persona} from "./Persona"

export class Profesor extends Persona 
{
    private _asignaturas:number;
    constructor(nom:string,fecha:string,asignaturas:number)
    {
         super(nom,fecha);
         this._asignaturas = asignaturas;
    }

    get asignaturas():number
    {
        return this._asignaturas;
    }

    set asignaturas(value:number)
    {
        this._asignaturas =value;
    }


}