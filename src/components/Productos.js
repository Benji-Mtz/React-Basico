import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class Productos extends Component {
    // EL state siempre es un objeto
    state = {
        productos: 
        [
            {id: 1, nombre: 'Camisa ReactJS', precio: 30},
            {id: 2, nombre: 'Camisa PHP', precio: 40},
            {id: 3, nombre: 'Camisa X', precio: 50},
            {id: 4, nombre: 'Camisa Nodejs', precio: 50}
        ]
        // State puede tener mas propiedades
    }

    // Metodos de un ciclo del componente

    // Ya esta listo el doc
    componentDidMount() {
        console.log(1);
    }
    // Antes de estar listo el doc
    componentWillMount(){
        console.log(2);
    }
    // Cuando se actualiza el doc
    componentWillUpdate(){
        console.log(3);
    }
    // Componente es removido
    componentWillUnmount(){
        console.log(4);
    }

    render() {

        console.log(5);
        const {productos} = this.state;
        //console.log(productos);
        

        return (
            <Fragment>
            <h1>Lista de Productos</h1>
            {
            productos.map(producto => (
                <Producto 
                    key = {producto.id}
                    producto = {producto}
                />
            ))
            }
            </Fragment>
        );
    }
}

export default Productos;