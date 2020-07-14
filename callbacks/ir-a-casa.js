/*       CALLBACKS  
    Reciben como parametros:
    1-error: null, el error, erc.
    2 ... n - los parametros a utilizar.

    Firma de una función: nombre y parametros(de que tipo son)
*/

function irACasa(callback = () => {}) {
  let estoyEnCasa = false
  console.log('Estoy caminando a casa')
  estoyEnCasa = true
  if (estoyEnCasa) callback(null, 'todo cool')
  if (!estoyEnCasa) callback('aiiura', 'me perdi')
}
/* Función callback */
irACasa((error, response) => {
  if (error) return console.error(error, response)
  console.log(response)
  console.log('Soy la funcion anonima')
})
