import React from 'react';

function Producto({producto}) {
    return (
        <div>
            <h1>{producto.nombre}</h1>
            <h2>Precio: ${producto.precio}</h2>
        </div>
    );
}

export default Producto;