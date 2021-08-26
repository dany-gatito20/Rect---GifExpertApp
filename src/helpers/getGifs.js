
// creamos una carpeta en el SRC, esta carpeta se llamara 'helpers', este carpeta es solo para funciones que tienen una funcion en especifico y regresaran algo para el componente.
// dentro de esta, creamos un componente llamado 'getGifs' el cual es una funcion asincrona que obtendra y estructurara las imagenes para mostrarlo en el 'HTML'
// identificamos cuando son archivos de funciones porque su primera letra no es capital, si es capital al principio, es porque es un componente

// creamos una funcion para la peticion 'https' de las imagenes que nosotros buscamos
// mandamos la referencia de las categorias ( category ) y aqui mismo las procesara para mostrarlemas en pantalla
export const getGifs = async( category ) => {  // como va ser una funcion que tenga procesos algo complejos, debemos a esperarlos a que se ejecuten bien
    // entonces la funcion debe ser async (funcion asincrona) para que estos procesos se ejecuten bien
    // ya una vez ejecutados, la funcion correra con los otros procesos y asi hasta acabar bien
    // como estamos solicitando peticiones http, debemos esperar estos procesos a que se ejecuten bien

    // en una constante metemos nuestra direccion url donde saldran las imagenes que estemos solicitando
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=yADo6UqbOw9UEG2dkZWr6R8hJZePCks0` // concaquetando el 'category' ya asociamos las imagenes con lo que buscamos en el input
                                // 'encodeURL' sirve para que cambie los saltos de linea por simbolos y asi no halla ningun problema a la hora de buscar 
    const resp = await fetch( url );  // aqui pedimos la respuesta del url de las imagenes, pero con el 'await' decimos que este proceso se espere hasta ya tenga completamente la respuesta
    const {data} = await resp.json();  // de la data donde sacamos las imagenes, debemos desestructurarala {} y pasar nuestra peticion a cadena de texto con .json
                // con el await debemos eperar a que se ejecute este proceso y una vez concluida seguir con las demas funciones

    // en otra constante mapeamos los elemntos de nuestras imagenes, las cuales solo sacamos su id, su titulo y su direccion url de las imagenes
    const gifs = data.map( img => {  // llamamos a la constante 'gifs' para mapear las imagenes que se encuantran en la data, las transformamos y las renombramos como 'img'
        return {  // como es una funcion de flecha, regresara lo siguiente
            id: img.id,  // el 'id' de las imagenes, que las encontramos en la direccion de la data, 'img.id'
            title: img.title,  // el 'titulo' de las imagenes que las encontramos en la direccion de la data, 'img.title'
            url: img.images.downsized_medium.url  // la direccion 'url' de las imagenes que las encontramos en la direccion de la data, 'img.images.downsized_medium.url'
        }
    })

    return gifs;  // terminado este proceso, el resultado lo regresara al componente necesite el resultado

}  // termina la funcion