const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");
const colors = require("colors");

console.clear();
// console.log("");
// console.log(argv);
// console.log("");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();

        console.log("Mostrar tareas por hacer".yellow);

        for (let tarea of listado) {
            console.log("====== Por hacer =======".green);
            console.log("tarea:", tarea.descripcion.red);
            console.log("Estado:", tarea.completado);
            //console.log("========================".green);
        }


        break;
    case "actualizar":

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        break;
    case "borrar":

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);


        break;
    default:
        console.log("comando no reconocido !!!".red);
}