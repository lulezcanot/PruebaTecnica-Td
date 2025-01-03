import React, { useState } from 'react';

function App() {
  const [urlImagen, setUrlImagen] = useState('');
  const [imagenes, setImagenes] = useState([]);

  const agregarImagen = (url) => {
    const nuevaImagen = { id: imagenes.length + 1, url };
    setImagenes([...imagenes, nuevaImagen]);
  };

  const eliminarImagen = (id) => {
    setImagenes(imagenes.filter((imagen) => imagen.id !== id));
  };

  return (
    <div>
      <div>
        <h1>Guarda tus Imagenes!!</h1>
        <input
          type="text"
          placeholder="Ingresa la URL de la imagen"
          value={urlImagen}
          onChange={(e) => setUrlImagen(e.target.value)}
        />
        <button
          onClick={() => {
            if (urlImagen) {
              agregarImagen(urlImagen);
              setUrlImagen('');
            } else {
              alert('Por favor, ingresa una URL válida.');
            }
          }}
        >
          Añadir Imagen
        </button>
      </div>

      <div className="galeria">
        {imagenes.map((imagen) => (
          <div key={imagen.id} className="imagen-container">
            <img src={imagen.url} alt={`Imagen ${imagen.id}`} />
            <button onClick={() => eliminarImagen(imagen.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;