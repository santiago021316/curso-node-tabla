
const argv = require('yargs')
    .option('b',{
    alias:'base',
    type:'number',
    demandOption: true,
    describe:'es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',  
        default:false,
        describe:'aparece en pantalla si deseo listar'
    })
    .option('h',{
      alias:'hasta',
      type:'number',  
      defaul:10
    })
    .check((argv,options) => {
        if( isNaN(argv.b)){
            throw new Error('la base tiene que ser un numero')
        }
        return true })
    .argv;
    

    module.exports = argv;

    