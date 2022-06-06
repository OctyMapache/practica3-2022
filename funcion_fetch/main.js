async function consumir_datos(){

    //realizo la peticion http a tave del metodo QET
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')
    
    //SOLO CONSERVO LOS DATOS DEL JSON
    const datos_definitivos = await datos.json()

    datos_definitivos.forEach(element => {
        console.log(element.name)
    });
}

//invoco la funcion
consumir_datos()