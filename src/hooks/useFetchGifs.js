
// creamos una carpeta en el SRC, llamada 'hooks' la cual guardaremos nuestros 'Custom Hooks'
// los 'Custom Hooks' son hooks que nosotros creamos y que podemos modificar para que funcione a nuestra manera

import { useEffect, useState } from 'react';  // importamos los hooks del 'useEffect' y 'useState' 

import { getGifs } from '../helpers/getGifs';  // importamos el componente 'getGifs' donde sacamos la direccion de las imagenes gifs

// nuestro 'custom hook' lo llamaremos 'useFetchGifs', cuando son custom hooks los nombramos al inicio como "use..." y asi identificamos que es un hook
export const useFetchGifs = ( category ) => {  // mandamos como argumento 'category' donde guardamos las categorias de las imagenes

    // creamos un estado para el mensaje de carga
    const [state, setState] = useState({
        data: [],  // la 'data' es un arreglo vacio
        loading: true  // el 'loading' sera de valor 'true'
    });

    //console.log('renderice useFetch')

    // el 'useEffect' no puede tener una funcion 'Async' (asincrona) que tenga procesos que tarden en ejecutarse, pero se puede realizar con la propiedad '.then' para que sea un proceso 'async'

    // el hook 'useEffect' es para que cierta funcion queremos que se ejecute una sola vez cuando se carge por primera vez la aplicacion, que nosotros queramos que al cargar la aplicacion
    // cierta informacion o funcion se carge solo la primera vez y no se este ejecutando siempre que se se renderice la aplicacion cuando hay un cambio, por ello utilizamos el 'useEffect'
    // para que esa informacion o funcion solo se realice una vez, solo hasta que cambie su dependencia, se volvera a ejecutar proque cambio su depenedia, si cambia su dependencia,
    // se volvera a ejecutar, pero si no cambia, no se volvera a ejecutar. 
    useEffect( () => {

        //console.log('cambio category')

        getGifs( category )  // para la funcion llamamos el componente 'getGifs' donde obtenemos la direccion de las imagenes y realizamos la peticion 'https' de las imagenes
            .then( imgs => {  // como es un proceso que debe esperar a ejecutarse, colocamos '.then' ´para que carge las imagenes que necesitamos  // las renombramos como 'imgs'

                setTimeout( () => {  // realizamos la funcion y el tiempo en que se realizara la funcion, para ello 

                    setState({  // decimos que para el cambio de estado 'setState' los nuevos valores seran los sig:
                        data: imgs,  // la 'data' tendra ahora un arreglo de la imagenes que llamemos desde el 'category' que los renombramos aqui como 'imgs'
                        loading: false  // y el 'loading' cambiara de 'true' a 'false' para mostrar el mensaje de 'Cargando...'
                    });

                }, 1000)  // el tiempo que tardara en mostrar las siguientes imagenes es de 2 segundos

            })  // termina la funcion para nuestro 'useEffect'

    }, [category])  // si cambia la dependencia, la funcion que tenga dentro del 'useEffect', se volvera a ejecutar de nuevo, pero si no cambia, no se ejecutara 

    return state; // { data:[], loading: true };  // retornamos el resultado del state.

}  // termina la funcion de nuestro custom hook