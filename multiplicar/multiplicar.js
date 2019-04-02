const FS = require('fs');

let listarTabla = (base, limite) => {
    let result = 0;
    let data = "";
    for (let i = 0; i <= limite; i++) {
        result = base * i;
        data += `${base} * ${ i } =  ${result} \n`;
    }
    console.log(data);
}

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor de la base: '${base}' no es un numero`);
            return;
        }

        let result;
        let data = '';
        for (i = 0; i <= limite; i++) {
            result = i * base;
            data += `${base} * ${ i } =  ${result} \n`;
        }

        FS.writeFile(`tablas/tabla-${ base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`el archivo se creooo!`)
            }
            //console.log('');
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}