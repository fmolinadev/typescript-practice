class mensaje
{
    private texto: string;
    //trsfonly lo hace accesible pero solo lo de lectura
    public readonly mensajero: string
    constructor(t:string)
    {
        this.texto =t;
        this.mensajero = "Este es el mensaje de solo lectura!"
    }

    public mostrarTexto()
    {
        console.log(this.texto);
    }
}

let aux = new mensaje("Esto es public");
aux.mostrarTexto();

console.log(aux.mensajero)



