## Abstracción:

La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad. Tomar algo del mundo real y ponerlo en código

## Promises:

Representa el resultado de una ejecución asíncrona  
 Tiene diferentes estados:

1.  Pendiente / Pending : Estado inicial, aún no se resuelve -> nace la promesa en estado pendiente por default.
2.  Resuelto /Reolved : Estado de aceptación, se ejecuto satisfactorimante.
    Se ejecuta una función callbback llamada then
3.  Fallado / Rejected : Estado de rechhazo, ocurrió algúnn erro en la ejecución. Se ejecuta una funnciónn callback llamada catch

### Sintaxis

```
constructor -> new Promise(); // Regresa un OBJETO promesa, el cual tiene un status

function algoAsincrono() {
return new Promise((resolve, reject) => {
if ("todo ok") resolve("ok");
if ("not ok") reject("oups");
});
}

algoAsincrono()
.then((result) => {
console.log("result: ", result); // result: blabla
})
.catch((error) => {
console.error("Error: ", error);
});
```

# Sintaxis async-await

- Todas las funciones marcadas como async son promesas
- Se usan juntas:
  - async -> asincrono
  - await -> esperar

```
async function queryBD () {
    const respuestaDB = await db.select('koders')
    console.log('respuestaDB: ', respuestaDB)
}

async function otraAsync () { ... }

async function main () {
    cont query = await queryDB()
    const otra = await otraAsync()
}

main()
    .then()
    .catch()
```

- Cuando usamos await en el cuerpo de una funcion sabemos que puede tardar más tiempo de lo normal, por lo tanto la funcion debe ser usar la palabbra reservada async
