import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const Formulario = () => {
    // Crear state de cita
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = e =>{
        e.preventDefault();
        //Validar
        if (mascota.trim() === '' || propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== ''){
            setError(true);
            return;
        }
        // Eliminar mensaje previo
        setError(false);

        //Asignar ID
        cita.id = uuidv4();
        console.log(cita);
        //Crear Cita

        //Reiniciar el form
    }

    return (
        <>
        <h2>Crear Cita</h2>
        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
        <form
            onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input
                 type="text"
                 name="mascota"
                 className="u-full-width"
                 placeholder="Nombre de la Mascota"
                 onChange={actualizarState}
                 value={mascota}
            />
            <label>Nombre del Dueño</label>
            <input
                 type="text"
                 name="propietario"
                 className="u-full-width"
                 placeholder="Nombre del Dueño de la Mascota"
                 onChange={actualizarState}
                 value={propietario}
            />
            <label>Fecha</label>
            <input
                 type="date"
                 name="fecha"
                 className="u-full-width"
                 onChange={actualizarState}
                 value={fecha}
            />
            <label>Hora</label>
            <input
                 type="time"
                 name="hora"
                 className="u-full-width"
                 onChange={actualizarState}
                 value={hora}
            />
            <label>Síntomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
            >
            </textarea>
            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>
            
        </form>
        </>
    )
}

export default Formulario
