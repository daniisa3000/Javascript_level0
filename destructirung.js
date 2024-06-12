const Persona = {
    nombre: 'Daniela',
    edad: 33,
    casado: false,
    hijo:{
        nombreHijo:'Andres'
    }
}

// const {nombre,edad} = Persona
const {nombreHijo} = Persona.hijo
console.log(nombreHijo)