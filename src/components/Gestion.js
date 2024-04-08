import React, { useCallback, useEffect, useState } from 'react';
import { Empleados } from './Empleados';

export const Gestion = () => {

    const [nombre, setNombre] = useState('');
    const [pagina, setPagina] = useState(1);
    const asignarGestor = (e) => { setNombre(e.target.value); }

    useEffect(() => {
        console.log('> Gestion renderizado');
    }, [nombre]);

    const mostrarMensaje = useCallback(() => {
        console.log('> Gestion.js > mostrarMensaje()');
    }, [pagina]);

    return (
        <div>
            <h1>Nombre del gestor: {nombre}</h1>
            <input type='text' onChange={asignarGestor} placeholder='Nombre' />

            <h2>Listado de empleados:</h2>
            <p>Los usuarios vienen de JSONPlaceholder</p>

            <button onClick={() => { setPagina(1) }}>Pag 1</button>
            &nbsp;
            <button onClick={() => { setPagina(2) }}>Next</button>
            <hr />

            <Empleados pagina={pagina} mensaje={mostrarMensaje} />
        </div>
    );
}