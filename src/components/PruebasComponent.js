import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Angel Díaz");
    const [fecha, setfecha] = useState("01-01-1985");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = e => {
        setfecha(Date.now());
    };

    // Solo al carga el componente
    useEffect( () => {
        console.log("Has cargado el componente PruebasComponent con useEffect");
    }, []);

    // Cuando se cambia el usuario
    useEffect( () => {
        setContador(contador+1);
        console.log("Has modificado el usuario: " + contador);
    }, [usuario]);

  return (
    <div>
        <h1>El Efecto - Hook useEffect</h1>

        <strong className={ contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>

        <strong>{fecha}</strong>

        <p>

            <input
                type="text"
                onChange={ modUsuario }
                placeholder=" Cambiar el nombre. "
            />

            <button
                onClick={ cambiarFecha }>
                    Cambiar Fecha
            </button>

            <br/>

            { usuario == "ANGEL" && <AvisoComponent/> }

        </p>
    </div>
  )
}
