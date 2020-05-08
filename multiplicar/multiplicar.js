let fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {

    console.log("==================".green);
    console.log(`== tabla del ${base} ==`.red);
    console.log("==================".green);



    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.bgBlue.italic.white);
    }

    console.log("===============".green);

}




let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        data = "";

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número!`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base*i} `);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }

            //console.log(`El archivo creado de tabla: ${base}`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}