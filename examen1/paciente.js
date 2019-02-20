export default class Crear
{
    constructor(Fecha_Nacimiento,Estatura_Paciente,Peso_Paciente)
    {
        this._Fecha_Nacimiento = Fecha_Nacimiento;
        this._Estatura_Paciente = Estatura_Paciente;
        this._Peso_Paciente = Peso_Paciente;
    }
    get Fecha_Nacimiento()
    {
        if(Fecha_Nacimiento === "Null" ||Fecha_Nacimiento === "0" || Fecha_Nacimiento === " " )
    {
        var f = new Date();
        this._Fecha_Nacimiento = (f.getDate()) , "/" , (f.getMonth() +1) , "/" , (f.getFullYear());
        return this._Fecha_Nacimiento;
    }
        else 
    {
        this._Fecha_Nacimiento = Fecha_Factura;
        return this._Fecha_Nacimiento;
    } 
    }
    get Estatura_Paciente()
    {
        if(Estatura_Paciente === "Null" || Estatura_Paciente === "0"  || Estatura_Paciente === " " )
    {
        this._Estatura_Paciente = "indefinido";
        return this._Estatura_Paciente;
    }
        else 
    {
        this._Estatura_Paciente = Estatura_Paciente;
        return this._Estatura_Paciente;
    } 
    }
    get Peso_Paciente()
    {
        if(Peso_Paciente === "Null" || Peso_Paciente === "0" || Peso_Paciente === " "  )
    {
        this._Peso_Paciente = " indefinido ";
        return this._Peso_Paciente;
    }
        else 
    {
        this._Peso_Paciente = Peso_Paciente;
        return this._Peso_Paciente;
    } 
    }
    organizar()
    {
        console.log(`la fecha de nacimiento es  ${this._Fecha_Nacimiento} con una estatura de  ${this._Estatura_Paciente}Metros con un peso de  ${this._Peso_Paciente}Kg `);
    }

}