//1)Crear una superclase animal que nos diga el animal es domestico o no,
//el tiempo de gestacion y que el si animal es domestico se pueda modificar con getter y setter
//2) Crear una clase mamífero y otra ave que hereden de animal 
//3) Crear una clase gato y otra aguila que hereden de las clase correspondientes
class Animal
{
    private _domestico:boolean;
    protected readonly _mesesGestacion:number;
    constructor(dom:boolean,mesesGest:number)
    {
        this._domestico =dom;
        this._mesesGestacion = mesesGest;
    }
    get domestico():boolean
    {
        return this._domestico;
    }
    set domestico(value:boolean)
    {
        this._domestico = value;
    }
}

class Mamifero extends Animal
{
    protected _capazNadar:boolean;
    constructor(dom:boolean,mesesGest:number,cp:boolean)
    {
        super(dom,mesesGest);
        this._capazNadar =cp;
    }

}

class Ave extends Animal
{
    protected _envergaduraAlas:number;
    constructor(dom:boolean,mesesGest:number,env:number)
    {
        super(dom,mesesGest);
        this._envergaduraAlas =env;
    }
}

class Gato extends Mamifero
{
    private _especie:string;
    constructor(dom:boolean,mesesGest:number,cp:boolean,esp:string)
    {
        super(dom,mesesGest,cp);
        this._especie =esp;
    }
    get capazNadar():boolean
    {
        return this._capazNadar;
    }
    set capazNadar(value:boolean)
    {
        this._capazNadar = value;
    }

    get especie():string
    {
        return this.especie;
    }
    set especie(value:string)
    {
        this.especie = value;
    }
}

class Aguila extends Ave
{
    private _numEjemplares:number;
    constructor(dom:boolean,mesesGest:number,env:number,numEjempl:number)
    {
        super(dom,mesesGest,env);
        this._numEjemplares =numEjempl;
    }
    
    get envergaduraAlas():number
    {
        return this._envergaduraAlas;
    }
    set envergaduraAlas(value:number)
    {
        this._envergaduraAlas = value;
    }

    get numEjemplares():number
    {
        return this._numEjemplares;
    }
    set numEjemplares(value:number)
    {
        this._numEjemplares = value;
    }

}

let gato = new Gato(true,3,false,"Angora");
let aguila = new Aguila(false,4,240,35);

