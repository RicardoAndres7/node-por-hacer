const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    /*return new Promise((resolve, reject) => {
        fs.writeFile(`./db/data.json`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`data.json`)
        });
    });*/

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

};

const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

const crear = (descripcion) => {

    cargarBD();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarBD();
    return listadoPorHacer;
};

const actualizar = (desc, value = true) => {
    cargarBD();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === desc);

    if (index >= 0) {
        listadoPorHacer[index].completado = value;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (desc) => {
    cargarBD();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === desc);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
    //guardarDB
}