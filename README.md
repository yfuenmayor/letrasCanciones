This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Buscador de Letras de Canciones

In the project directory, you can run:

### `Librerias`

#### `Boostwatch`

Libreria de temas de estilos de Bootstrap 4.<br />
Link: [https://bootswatch.com/].<br />
Install: [https://github.com/thomaspark/bootswatch].<br />
CDN: [https://www.bootstrapcdn.com/bootswatch/].<br />

#### `Axios`

Instal: `npm i axios`.<br />
Use: <br />
`import axios from 'axios'` <br />
`async () { const resultado = await **axios(url)**; }`<br />

### `API`

`Lyrics OVH API`: para buscar la letra de la cancion. <br />
Open: [https://lyricsovh.docs.apiary.io/#]<br />
EndPoint: [https://api.lyrics.ovh/v1/artist/title]<br />
`The Audio DB API`: para buscar la informacion del artista. <br />
Open: [https://www.theaudiodb.com/]<br />
EndPoint: [https://api.lyrics.ovh/v1/artist/title]<br />

### `Nuevo Conocimiento`

#### Consulta de dos APIS `simultaneamente`

Para consultar **dos o más APIS simultaneamente** se utiliza `Promise.all([])`<br />
De no usarse esta funncion y usar las llamadas por separadas, no se ejecutara la segunda llamada hasta que la pimera termine. En este caso necesitamos hacer las dos llamadas en simultaneo como se muestra a continuacion:<br />

    const [variableUrl, variableUrl2] = await Promise.all([
        axios(url),
        axios(url2)
      ]);
<br />
En donde:las variables dentro del arreglo corresponden a los resultados de cada llamado segun su orden.