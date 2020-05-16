import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';

function App() {

  // STATES //
    //Guardar datos de la busqueda
    const [buscarLetra, setBuscarLetra] = useState({});
    // Guardar datos de la letra obtenida de la API
    const [letra, setLetra] = useState('');
    //Guardamos los datos de la informacion del artista 
    const [info, setInfo] = useState({});

  // Ejecutando busqueda con useEffect 
  useEffect(() => {
    if (Object.keys(buscarLetra).length === 0) return ;

    const consultApiLetra = async () => {
      //Declarando variables necesarias
      const {artista, cancion} = buscarLetra;
      const url =  `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 =  `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      //Usamos un PROMISE para ejecutar mas de una API a la vez y en simultaneo
      const [letrA, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);
      
      setLetra(letrA.data.lyrics);
      setInfo(informacion.data.artists[0]);

      
    };

    consultApiLetra();
  }, [buscarLetra])

  return (
    <Fragment>
      <Formulario 
        setBuscarLetra={setBuscarLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
              <Informacion 
                  info={info}
              />
          </div>
          <div className="col-md-6">
              <Cancion
                letra={letra}
              />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
