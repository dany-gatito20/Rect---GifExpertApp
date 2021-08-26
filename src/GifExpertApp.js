
// GifExpertApp, nuestra aplicacion principal donde estructuraros todos nuestros componentes

//import React from 'react';

import { useState } from "react";  // llamamos el hook de estado desde react

import { AddCategory } from "./components/AddCategory";  // importamos el componente 'AddCategory' de agregar una nueva categoria

import { GifGrid } from "./components/GifGrid";

// creamos nnuestra funcion principal
export const GifExpertApp = () => {

    // realizamos un arreglo de elementos para las primeras categorias de nuestra aplicacion
    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // NOTA, recuerda que en tus arreglo NO puedes tener elementos o valores iguales, tienen que ser diferentes a los demas.

    // con el hook de 'useState' metemos en su estado inicial nuestro arreglo de categorias
    const [categorias, setCategorias] = useState(['Dragon Ball']);

    // realizamos una funcion para agregar un nuevo elemento a mi arreglo que ya creamos
    //const handleAdd = () => {
        // para el cambio de su estado 'setCategorias' realizamos la sig. funcion
    //    setCategorias([...categorias, 'Hunter X Hunter']);  // colocamos una copia de los elementos anteriores de mi arreglo con el spred ... y al final le colocamos el nuevo elemento
    //}

    return (  // la funcion principal regresara lo siguiente
        <div>
            <h2>Gif Expert App</h2>  {/* titulo de nuestra Aplicacion */}

            <AddCategory  // llamamos el componente 'AddCategory' para colocarlo dentro de nuestro componente principal
                setCategorias = {setCategorias}  // mandamos a este componente el 'setCategorias' donde mostramos el nuevo estado de las categorias cuando se realice un cambio
                categorias = {categorias}  // al igual que el 'categorias', para tener referencia de las categorias que tiene el estado
            />

            <hr />

            {/*<button onClick={handleAdd}>Agregar</button>*/}

            {/* para mostrar mi arreglo de categorias en el HTML y que se vean en pantalla realizamos los siguiente: */}

            <ol>  {/* la etiqueta <ol></ol> es para realizar una lista ordenada */}

    {/* para crear nuestra lista con los elementos que tengo en mi arreglo de categorias y que se muestren en pantalla realizamos lo sig. */}

                {   // abrimos llaves {} para hacer la impresion de javascript de mi arreglo de elementos

                    // llamamos a la categoria a traves de un map, para que regresse cada uno de los valores que tengo en el arreglo
                    // es como si fuera un ciclo, primero regresa en forma de lista la primera categoria que tengo, en este caso 'One Punch'
                    // luego mi siguiente categoria que seria 'Samurai X' y al final la categoria 'Dragon Ball'
                    // en este caso el 'map' me ayudara para sacar cada una de mis categorias del arreglo para asi poder mostrarlos en pantalla

                    // como creamos un arreglo de elementos, la mejor forma de transformar los elementos de mi arreglo al HTML es atravez del .map

                    // lo que hace el .map es ir con cada uno de los elementos de mi arreglo y transformarlos en nuevos valores.

                    // llamamos nuestro arreglo 'categorias', colocamos la funcion .map, 
                    //categorias.map( category => (  // ahora los nuevos elementos de mi arreglo los identificaremos con el argumento 'category'

                        // lo que yo regrese en 'return' sera el nuevo valor que tendra ahora cada uno de los elementos del arreglo
                    //    <li key={ category }>{ category }</li>  // los nuevos elementos que mostraremos en el HTML, por ley pondremos los de 'Category' 
                                                                       // porque 'category' contiene los nuevos elementos de mi arreglo
                        // como utilizamos la funcion map, siempre debemos ponerle un 'key'
                        // este key es para que React identifique cual es el elemento que se esta modificando con el map, 

                    //) )

                    categorias.map( category => (  // aqui pasamos la funcion map que habia creado aca arriba, pero aqui le agregamos un comonente nuevo para obtener los gifs
                        <GifGrid  // llamamos a nuestro componente donde sacaremos las imagenes gifs 
                            key={ category }  // este componente necesita el 'key' para identificar las imagenes, por ello se identificaran con las categorias que esten guardadndo
                            category={ category }  // le pasamos a este componente las categorias que se vallan guardando
                        />
                    ) )
                }

            </ol>  {/* termina nuestra lista ordenada */}

        </div>
    )
}

// NOTA: el 'map' es una funcion ASINCRONA ( que no tiene orden ), es muy util cuando utilizamos elementos que no tienen ningun proceso de ejecuion en orden, como lo pueden ser imagenes,
// pero cuando tenemos procesos que deben ejecutarse en un orden y que se espera a su proceso, el 'map' no funciona para esto. La solucion que tenemos es con el ciclo 'for'
// el ciclo 'for' es parecido al 'map', pero este es una funcion SINCRONA ( que tiene un orden a seguir ), esto nos ayuda cuando tenemos elementos que tienen una espera de ejecutarse
// por lo tanto el 'map' para funciones sincronas NO SIRVE, pero funcionan con el 'for'