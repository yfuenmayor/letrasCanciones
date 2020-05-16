import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Formulario = ({setBuscarLetra}) => {

    // STATES //
        //Guardar el error para la validacion
        const [error, setError] = useState(false);
        //Guardar los datos para la busqueda
        const [busqueda, setBusqueda] = useState({
            artista: '',
            cancion: ''
        })

    // Extraemos los datos para asignarlos a los values de los imputs
    const {artista,cancion} = busqueda;

    // Funcion para leer lo que se esta escribiendo y guardarlo en el State de busqueda
    const guardarStateBusqueda = e => {
        setBusqueda({
            //Copia de state
            ...busqueda,
            //asignando valores
            [e.target.name] : e.target.value
        })
    }

    // Funcion para el submit del formulario
    const envioFormulario = e => {
        e.preventDefault();

        //1.- Validamos
        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true);
            return;
        }

        //2.- Pasando Validacion
            // Ocultamos el error
            setError(false);
            // Guardamos datos de busqueda
            setBuscarLetra(busqueda);
    }

    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son requeridos</p> : null}
            <div className="container">
                <div className="row">
                    <form 
                    onSubmit={envioFormulario}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de Letras de Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input 
                                            type="text"
                                            placeholder="Nombre Artista"
                                            name="artista"
                                            className="form-control"
                                            onChange={guardarStateBusqueda}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Canción</label>
                                        <input 
                                            type="text"
                                            placeholder="Nombre Canción"
                                            name="cancion"
                                            className="form-control"
                                            onChange={guardarStateBusqueda}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

Formulario.propTypes = {
    setBuscarLetra: PropTypes.func.isRequired
};

export default Formulario;