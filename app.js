console.clear();


const argv = require("./config/yargs").argv;
const colors = require("colors");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case "listar":
        console.clear();
        console.log("listar".blue);
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        console.clear();
        console.log("crear".yellow);
        crearArchivo(argv.base, argv.limite)
            .then((archivo) =>
                console.log(
                    // `Archivo creado: "tabla-${argv.base}-al-${argv.limite}.txt"`
                    `Archivo creado: ${archivo.bgWhite.black}`
                )
            )
            .catch((e) => console.log(e));
        break;
    default:
        console.log("Comando no reconocido !!!!!!".rainbow);
}

let argv2 = process.argv;