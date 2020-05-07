const descripcion = {
    demand: true,
    desc: "Descricion de la tarea por hacer",
    alias: "d",
};

const completado = {
    default: true,
    alias: "c",
    desc: "Marca como completado o pendiente la tarea",
};




const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion
    })
    .command("actualizar", "actualizar el estado completado de la tarea", {
        descripcion,
        completado
    })
    .command("actualizar", "actualizar el estado completado de la tarea", {
        descripcion,
        completado
    })
    .command("borrar", "Borra una tarea", {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
};