import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    // CUANDO EL COMPONENTE SE MONTA
    useEffect( ()=>{
        alert("El componente AvisoComponent está montado!")

        // CUANDO EL COMPONENTE SE DESMONTA
        return ()=>{
            alert("Componente Desmontado!")
        };

    },[]); // SE EJECUTA UNA VES

  return (
    <div>
        <h4>Saludos Angel</h4>
        <button onClick={ e => {
            alert("Bienvenido");
        }}>Mostrar Alerta</button>
    </div>
  )
}
