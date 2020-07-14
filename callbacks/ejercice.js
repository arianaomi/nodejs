/* funcion que recibe como parametro un callback */
function estudiar(callback) {
	let termineDeEstudiar = false
	console.log('Estoy estudiando')
	console.log('ya termine')
	termineDeEstudiar = true
	if (termineDeEstudiar) callback(null, 'wiiiii, ya termine')
	if (!termineDeEstudiar) callback('no puelo', 'toy chiquito 😞')
}

/* llamando a la funcion y pasandole la funcion callback */
estudiar(function (error, response) {
	if (error) return console.error(error, response)
	console.log(response)
})
