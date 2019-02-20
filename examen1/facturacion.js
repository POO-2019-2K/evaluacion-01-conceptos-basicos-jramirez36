export default class Facturas
{
    constructor(Fecha_Factura,Total_Factura,Numero_Factura)
    {   
        this._Fecha_Factura = Fecha_Factura;
        this._Total_Factura = Total_Factura;
        this._Numero_Factura = Numero_Factura;
    }
    get Fecha_Factura()
    {
        if(Fecha_Factura == "Null" || Fecha_Factura == " " )
    {
        var f = new Date();
        this._Fecha_Factura = f.getDate() , "/" , (f.getMonth() +1) , "/" , f.getFullYear();
        return this._Fecha_Factura;
    }
        else 
    {
        this._Fecha_Factura = Fecha_Factura;
        return this._Fecha_Factura;
    } 
    }
    get Total_Factura()
    {
        if(Total_Factura == "Null" ||  Total_Factura == " " )
    {
        this._Total_Factura = "500 pesos";
        return this._Total_Factura;
    }
        else 
    {
        this._Total_Factura = Total_Factura;
        return this._Total_Factura;
    } 
    }
    get Numero_Factura()
    {
        if(Numero_Factura == "Null" ||  Numero_Factura == " "  )
    {
        this._Numero_Factura = " 1024 ";
        return this._Numero_Factura;
    }
        else 
    {
        this._Numero_Factura = Numero_Factura;
        return this_Numero_Factura;
    } 
    }
    organizar()
    {
        console.log(`la fecha de la factura es  ${this._Fecha_Factura} con un total de  ${this._Total_Factura} con el numero  ${this._Numero_Factura} `);
    }

}