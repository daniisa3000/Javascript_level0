const datos = [
    {nombre: 'Daniela', edad: 33},
    {nombre: 'Victoria', edad: 10},
    {nombre: 'Milagros', edad: 28},
    {nombre: 'Mercedes', edad: 55}
]

/* datos.forEach( elemento => { es mas pesado para leer los datos
    console.log(elemento.nombre)
}) */

datos.map( elemento => { // es maas recomendable, procesa mejor los datos
    console.log(elemento.nombre)
})