function dividir(a,b){
    const resultado = parseInt (a) / parseInt (b)
    return resultado
}


function calcular()
{
    const dato1 = document.getElementById("t").value
    const dato2 = document.getElementById("r").value

    //invoco funcion
    const respuesta = dividir(dato1,dato2)

    document.getElementById("resultado").textContent = respuesta
}