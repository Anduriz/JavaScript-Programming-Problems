// escribe tu respuesta acá

// function contrasenaValida(contrasena){
//   if(contrasena === '2Fj(jjbFsuj' || contrasena === 'eoZiugBf&g9'){
//     console.log('Contrasena correcta');
//   } else {
//     console.log('Contrasena incorrecta');
//   }
// }

const contrasenaValida = (contrasena) => 
(contrasena === '2Fj(jjbFsuj' || contrasena === 'eoZiugBf&g9')?
console.log('Contrasena correcta'): 
console.log('Contrasena incorrecta');

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false