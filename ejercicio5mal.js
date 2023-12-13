const esperarXSegundos = new Promise((resolve) => {
    let secs = Math.random()*5000 + 1000;
    setTimeout(() => {
        resolve(secs);
    }, secs)
})


/* 
****** CON PROMESAS Y THEN *****
*/

esperarXSegundos.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    // nunca va a entrar en el catch puesto que la promesa nunca va a ser errónea, para este caso.
    console.error("error: ", error);
})

/*
****** CON PROMESAS Y ASYNC/AWAIT *****
*/

async function esperarXSegundosAsync() {
    try {
        let resultado = await esperarXSegundos;
        console.log(resultado);
    } catch(error) {
        console.error("error: ", error)
    }
}

esperarXSegundosAsync()