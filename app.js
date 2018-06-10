//require
const colors = require('colors');
const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar')
const argv = require ('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
  case 'listar':
      listarTabla(argv.base, argv.limite)
        .catch((err) => console.log(err)); break;
        break;
  case 'crear' :
      crearArchivo (argv.base, argv.limite)
          .then((archivo) => console.log(`Archivo creado: ${archivo}`))
          .catch((err) => console.log(err)); break;
          break;
  default: console.log('Comando no reconocido');

}
