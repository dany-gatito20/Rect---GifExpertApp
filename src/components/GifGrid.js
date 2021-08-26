
// GifGrid, es un componente en el cual solicitaremos la peticion https de las imagenes gifs

import { useFetchGifs } from '../hooks/useFetchGifs';  // importamos nuestro Custom hook que creamos para el mensaje de 'Data cargada'

import { GifGridItem } from './GifGridItem';  // importamos el componente de 'GifGridItem' donde estructuramos como apareseran las imagenes


// creamos la funcion principal del componente
export const GifGrid = ({ category }) => {  // traemos desde el componente principal las categorias

    // este 'useEfect' se disparara siempre que nuestea funcion principal cambie el estado 'state', si no se cambia el 'state' entonces solamente se ejecutara una vez hasta que se cambie el 'state'
    //const [images, setImages] = useState([])  // colocamos un hook de 'state', su estado inicial sera un arreglo vacio
    const { data:images, loading } = useFetchGifs( category );  // llamamos al componente de nuestro Custom Hook 'useFetchGifs', su argumento que manejaremos sera el 'loading' que tenemos en el Custom Hook

    // aqui utilizamos por primera vez el hook de 'useEffect', el cual es una funcion que solamente se ejecutara una sola vez cuando el componente se carge por primera vez
        // con el hook de 'useEffect' nos ayudara a que cierta funcion solo se ejecute cuando se renderiza por primera vez o que cuando cambie su dependencia vuelva a ejecutar esta funcion
    //    useEffect(() => {
    //        getGifs( category )  // quien se cargara solo una vez sera la funcion de 'getGifs'
    //            .then( setImages );  // le enviamos los cambios del estado 'setImages' si esto se ejecuta
    //    }, [ category ])  // este es mi arreglo de dependencias y le mandamos 'category', si llega a cambiar su estado 'category', la funcion se disparara nuevamente porque esta cambio su estado
          // si llegaraa tener un arreglo de dependencias vacio, entonces se ejecutara una sola vez.


          //console.log('se renderizo Gif')
    return (
        <>
            <h3> { category } </h3>  {/*mostramos aqui la categoria que nosotros escribamos y busquemos en el 'input'*/}

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }  
            {/* para el mensaje de 'Cargando...' abrimos una sentencia de JS {} y decimos que si hay un valor diferente al que tiene 'loading', entonces aparecera el mansaje */}

            <div className="card-grid">  {/* 'className'se refiere a una clase de html en la cual le damos estilos a nuestros componentes */}

                { // abrimos {} para una sentencia de javascrit
                    images.map( img => (  // mapeamos el arreglo del 'state' 'images', los cuales ahora se nombraran 'img'
                        <GifGridItem  // colocamos el componente de 'gifGridItem' el cual contiene la estructura para presentarse en el html de nuestra aplicacion
                            key={ img.id }  // su lleve 'key' sera el id de las imagenes
                            { ...img }  // para mostrar las imagenes abrimos {} y decimos que despliege todas las imagenes
                        />
                    ) )
                }

            </div>
        </>
    )

}  // terminamos la funcion principal