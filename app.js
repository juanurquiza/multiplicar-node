//const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//destructuracion



let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log(`archivo creado ${archivo}`)
        ).catch(e => console.log(e));
        break;
    default:
        console.log('no se reconoce el comando');

}


// console.log(argv.base);
// console.log(argv.limite);
// let base = argv.base;
// //let argv = process.argv;
//el 0 es la ubicacion de node
// el 1 es la ubicacion del programa

// let parametro = argv[2];
// //console.log(process.argv);
// //console.log(parametro);
// base = parametro.split('=')[1];