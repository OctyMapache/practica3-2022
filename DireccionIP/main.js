
function guardar(){

    let nuevo_internet = {
        ip:document.getElementById("inp_ip").value,
        puerto:document.getElementById("inp_puerto").value,
        paisciudad:document.getElementById("inp_pais").value,
        velocidad:document.getElementById("inp_velocidad").value,
        tipo:document.getElementById("inp_tipo").value

    }

    if("lista_internet" in localStorage){
       let grilla_clientes =  JSON.parse(localStorage.getItem("lista_internet"))
        grilla_clientes.push(nuevo_internet)
        localStorage.setItem("lista_internet",JSON.stringify(grilla_clientes))
    }else{
        let grilla_clientes = []
        grilla_clientes.push(nuevo_internet) 
        localStorage.setItem("lista_internet", JSON.stringify(grilla_clientes) )
    }   

}

function devolver_internet(){

    if("listado_internet" in localStorage){

       let lista_internet = JSON.parse(localStorage.getItem("listado_internet") )

       let filas = []

       lista_internet.forEach( (element, index) => {
            let fila = `
                <tr>
                    <td>${element.direccioip}</td>
                    <td>${element.puerto}</td>
                    <td>${element.paisciudad}</td>
                    <td>${element.velocidad}</td>
                    <td>${element.tipo}</td>
                    <td>
                        <button onclick="eliminar_internet(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                </tr>
            `   
            filas.push(fila)
       });

       document,getElementById("tbody").innerHTML = filas.join('')
    }
}

function eliminar_internet(index){

    let lista_internet = JSON.parse(localStorage.getItem("lista_internet"))

    lista_internet.splice(index,1)

    localStorage.setItem("lista_internet", JSON.stringify(lista_internet))

    devolver_internet()

}