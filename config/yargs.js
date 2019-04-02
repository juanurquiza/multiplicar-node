const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require("yargs")
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'crea el archivo en base a lo solicitado', opt)
    .argv;


module.exports = {

    argv

}