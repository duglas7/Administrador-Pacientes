import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({ citas, eliminarCita }) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{citas.mascota}</span></p>
            <p>Dueño: <span>{citas.propietario}</span></p>
            <p>Fecha: <span>{citas.fecha}</span></p>
            <p>Hora: <span>{citas.hora}</span></p>
            <p>Sintomas: <span>{citas.sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(citas.id) }
            >
                Eliminar &times;
            </button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita
