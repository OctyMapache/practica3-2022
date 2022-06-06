async function dolar_hoy(){

    const dolar = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos = await dolar.json()

    let filas = []

    datos.forEach( (element,index) => {

        let fila = `
            <tr>
                <td>${index}</td>
                <td>${element.casa.nombre}</td>
                <td>$${element.casa.compra}</td>
                <td>$${element.casa.venta}</td>
            </tr>
        `
        filas.push(fila)
    });

    document.getElementById("tbody").innerHTML = filas.join('')
//     datos.forEach((element, index) => {
//         if(index < 4){
//             console.log(index + '-' + element.casa.nombre + '- Compra:' + element.casa.compra + '- Venta:'+ element.casa.venta)       
//         }
        
//     });
}
dolar_hoy()



// console.log(`
// ${element.casa.venta} - ${element.casa.venta}
// `)