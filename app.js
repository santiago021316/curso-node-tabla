

const {crearArchivo } = require('./helpers/multiplicar.js');
const argv = require("./config/yargs.js");

                    
                    
 console.clear();


                    
crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err));



// debo hacer la tabla de multiplicar con ciclo for 
                                                                                                                                                                  















// const [,,argv3 = 'base=5'] = process.argv
// const [,base] = argv3.split('=')





