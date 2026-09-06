function precioCompleto(precio, impuesto){

    if(precio>=0 && impuesto>=0){
        
        return precio + precio*impuesto;
    } else return "Argumentos inválidos";
}