
// AddCategory: en la carpeta de 'components' creamos este archivo donde estructuramos el componente de agregar una nueva Categoria
// este archivo guarda la estructura para el formulario de busqueda

import { useState } from 'react';  // traemos el hook de estado desde React
import PropTypes from 'prop-types';  // importamos las PropTypes

// creamos nuestra funcion principal
export const AddCategory = ({categorias, setCategorias}) => {  // recibimos los elementos que mandamos desde el componente 'GifExpertApp'

    // en el hook de stado, metemos su estado inicial que tendra el input, en este caso su tecto 'Buscar...'
    const [inputValue, setInputValue] = useState('');  // cuando no tenemos nada que guardar en el 'state', es muy recomendable ponerle un espacio en blanco, si no tiene nada, sera error

    // creamos una funcion de flecha para cuando se haga un cambio dentro del input, en este caso cuando se modifique el 'state', 'Buscar...'
    const handleInputChange = ( e ) => {  // e = event, el evento que se esta disparando
        setInputValue(e.target.value);
        // para el cambio del estado ('setState') 'setInputValue' le enviamos la referencia de un objeto del 'input' atravez del 'e.target'
        // enviamos el 'value' que es una referencia del valor que tiene el 'input'
    }

    // creamos una funcion de flecha para quitar el refresh de la pagina, osea que no vuelva a recargar la pagina cuando guardo cambio en ella,
    // sino que se quede en la pagina y ahi mismo solo recarge el componente que tubo cambios.
    const handleSubmit = ( e ) => {  // mandamos el 'e' ('evento')
        e.preventDefault();  // a este evento mandamos 'preventDefault', es para prevenir por default el refresh de la pagina que no queremos que pase

        // realizamos una validacion para decir que para buscar una categoria en el 'input', no debe guardar espacios en blanco al inicio, y que debe ser mayor a dos letras
        if ( inputValue.trim().length > 2 ) {  // si cumple con lo anterior, entonces hara lo siguiente:
            setCategorias( [inputValue, ...categorias ] );  // cuando se agrega una nueva categoria en el input (setCategorias), agregamos las demas categorias '...categorias'
                                                           // y despues se colocara el nuevo valor que agregamos en el input.
            setInputValue('');  // cuando se guarde la nueva categoria, al dar 'enter' en el input, en automatico se quitara y se pondra un espacio vacio para que coloques otra categoria
        }
    }

    return (
        // la etiqueta 'form' es para la estructura de formularios; dentro de la etiqueta estructuramos todo lo necesario para nuestro formulario
        <form onSubmit={ handleSubmit }>  {/* la funcion 'onSubmit' funciona para guardar los cambios que sufra todo el formulario */}
            <input
                type="text"
                value={inputValue}  // el 'value' es el valor que tendra la caja de texto 'input', en este caso sera el valor guardado del 'inputValue' que es el texto 'Buscar...'
                onChange={handleInputChange}
                // el 'onChange' funciona para que cuando se realize un cambio a nuestra caja de texto ('input') se guarde los cambios modificando el valor ('value') 
            />
        </form>
    )

} // termina la funcion principal

// con las 'propTypes' decimos que 'categorias' y 'setCategorias' deben ser requeridas en este componente.
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
    categorias: PropTypes.array.isRequired
}