nombre=prompt("Digite su nombre : ");
cedula=prompt("Digite los dos ultimos numero de tu cedula: ");
patrimonio=prompt("Ingresa tu patrimonio : ");
ingresos=prompt("Ingresa el valor de tus ingresos : ");
tarjeta=prompt("Ingresa el valor de tu consumo mediante tarjeta de credito : ");
compras=prompt("Ingresa el valor en compras y consumos : ");
banco=prompt("Ingresa el total de tus consignaciones bancarias : ");
if(parseInt(patrimonio)>=190854000 || parseInt(ingresos)>=59377000 || parseInt(tarjeta)>=59377000 || parseInt(compras)>=59377000 || parseInt(banco)>=59377000){
   document.write(nombre+" debes declarar renta");
   if(parseInt(cedula)>=1 && parseInt(cedula)<=26){
        document.write("(Debe declarar en Agosto)")
   }else if(parseInt(cedula)>=27 && parseInt(cedula)<=66){
        document.write("(Debe declarar en Septiembre)")
   }else if(parseInt(cedula)>=67 && parseInt(cedula)<=100){
    document.write("(Debe declarar en Noviembre)")
}
}else{
    document.write(nombre+" NO debes declarar renta");
}




