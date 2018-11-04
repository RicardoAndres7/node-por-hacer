//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        /*porHacer.guardarDB()
            .then(result => console.log(result))
            .catch(e => console.log(e));*/
        break;
    case 'listar':
        let listado = porHacer.getListado();
        //let lista = JSON.parse(listado);
        for (let tarea of listado) {
            console.log("////Tareas por hacer////".yellow);
            console.log('descripcion:', tarea.descripcion);
            console.log('estado:', tarea.completado);
            console.log("////////////////////////".green);

        }
        //console.log(listado);

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("no reconoce comando");

        break;
};