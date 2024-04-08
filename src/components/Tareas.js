import React, { useMemo, useState } from 'react';

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);
    const [descripcion, setDescripcion] = useState('');
    const [contador, setContador] = useState(1000);

    const guardarTareas = (e) => {
        e.preventDefault();
        setTareas((tarea) => [...tarea, e.target.descripcion.value]);
        setDescripcion('');
    }

    const borrarTarea = (e, index) => {
        let newTareas = [...tareas];
        newTareas.splice(index, 1);
        setTareas(newTareas);
    }

    const sumarContador = (e, value) => setContador(contador + value);

    const contadoresPasados = (acumulacion) => {
        for (let index = 0; index <= acumulacion; index++) {
            console.log('> Ejecutando acumulacion');
        }
        return (`Contador manual de tareas: ${acumulacion}`);
    }

    // Hook useMemo
    const memoContador = useMemo(() => {
        contadoresPasados(contador)
    }, [contador]);

    return (
        <div className='tareas-container'>
            <h1>Mis tareas</h1>
            <br />
            <form onSubmit={guardarTareas}>
                <input type='text' name='descripcion' placeholder='Descripción' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <input type='submit' value='Guardar' />
            </form>

            <section className='contadorTareas'>
                <h3>
                    Contador:
                    &nbsp;
                    <label>{contador}</label>
                    &nbsp;
                    <button onClick={(e) => sumarContador(e, 1)}>➕</button>
                </h3>
                <h3>{memoContador}</h3>
            </section>

            <section style={{ width: '25%' }}>
                <h3>Listado de tareas</h3>
                <ul>
                    {tareas.map((tarea, index) => {
                        return (
                            <li key={index}>
                                {tarea}
                                &nbsp;
                                <label className='btnBorrarTarea' onClick={e => borrarTarea(e, index)}>⛔</label>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    );
}