const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer.'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado la tarea.'
    }
};


const argv = require('yargs')
    .command('crear', 'Crear en consola una tarea por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borrar una tarea', opts)
    .command('listar', 'Listar las tareas por hacer')
    .argv;

module.exports = {
    argv
}