
let usuario = {
    nombre:'Juan', 
    apellido:'Perez',
    dni:40165759,
    correo:{
        gmail:'itscipolletti@gmail.com',
        outlook:'itscipolletti@outlook.com'
    },
    localidad: 'cipolletti'

}
//forma 1
//const gmail = usuario.correo.gmail
//const outlook = usuario.correo.outlook

//forma 2
//destructuring object
const{ gmail,outlook } = usuario.correo

console.log(`
    Apellido: ${usuario.apellido}
    Nombre: ${usuario.nombre}
    Gmail: ${gmail}
    Outlook: ${outlook}
    `)