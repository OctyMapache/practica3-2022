async function criptomonedas(){

    const cripto = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    const datos = await cripto.json();

    const criptototal = [];

    let filas = []

    datos.forEach( (element,index) => {

        // let fila = `
        //     <tr>
        //         <td>${index+1}</td>
        //         <td>${element.}</td>
        //         <td>$${element.casa.Nombre}</td>
        //         <td>$${element.casa.Simbolo}</td>
        //         <td>$${element.casa.Precio}</td>
        //         <td>$${element.casa.Cambio}</td>
        //         <td>$${element.casa.Volumen24h}</td>
        //     </tr>
        // `

        let fila = `
            <tr>
                <td>${element.image}</td>
                <td>${element.name}</td>
                <td>${element.symbol}/td>
                <td>${element.current_price}</td>
                <td>${element.price_change_percentage_24h}</td>
                <td>${element.total_volume}</td>
            </tr>
        `

        criptototal.push(fila);
    });

    document.getElementById("tbody").innerHTML = filas.join('')

}
criptomonedas()