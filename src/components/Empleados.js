import React, { useState, useEffect } from 'react';

export const Empleados = React.memo(({ pagina, mensaje }) => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        conseguirEmpleados(pagina);
        mensaje();
    }, [pagina]);

    useEffect(() => {
        console.log('> Empleado renderizado');
    }, [empleados]);

    const conseguirEmpleados = async (p) => {
        const url = `https://reqres.in/api/users?page=${p}`;
        const peticion = await fetch(url);
        const { data } = await peticion.json();
        setEmpleados(data);
    }

    return (
        <div>
            <h4>Actual Page: {pagina}</h4>
            <ol className='olEmpleados'>
                {
                    empleados.map((emp) => {
                        return (
                            <li key={emp.id}>
                                {emp.first_name} {emp.last_name} | {emp.email}
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
})