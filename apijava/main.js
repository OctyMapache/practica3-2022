async function dolar_hoy(){

    const dolar = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos = await dolar.json()

    datos.forEach((element, index) => {
        console.log(index + '-' + element.casa.nombre + '- Compra:' + element.casa.compra + '- Venta:'+ element.casa.venta)       
    });
}
dolar_hoy()