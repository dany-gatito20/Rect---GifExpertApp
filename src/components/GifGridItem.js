
// en este componente estrcturamos como aparecera la imagen y el texto de cada una

//import React from 'react';

// creamos la funcion para llamar a la imagen y el nombre que contiene para estructurarlo de como debera aparecer en pantalla
export const GifGridItem = ({title, url}) => {  // sus argumentos los desetructuramos para sacar solamente el 'title' y el 'url' de las imagenes

    return (
        <div className="card animate__animated animate__fadeInRight">  {/* dentro de un div apareceran las imagenes */}
            <img src={ url } alt={ title }></img>  {/* para una etiqueta 'img' colocamos la imagen, su src seraa la direccion url y su alt sera el titulo */}
            <p> { title } </p>  {/* en un parrafo metemos el 'title' */}
        </div>
    )

}  // termina la funcion principa