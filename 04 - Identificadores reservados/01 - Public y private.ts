class mensaje
{
    private texto: string;
    public mensajero: string
    constructor(t:string)
    {
        this.texto =t;
    }

    public mostrarTexto()
    {
        console.log(this.texto);
    }
}

let aux = new mensaje("Esto es public");
aux.mostrarTexto();



