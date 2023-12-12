const esperar2SegundosPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 2000)
})


/* 
****** CON PROMESAS Y THEN *****
*/

esperar2SegundosPromesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    // nunca va a entrar en el catch puesto que la promesa nunca va a ser errónea, para este caso.
    console.error("error: ", error);
})

/*
****** CON PROMESAS Y ASYNC/AWAIT *****
*/

async function esperar2Segundos() {
    try {
        let resultado = await esperar2SegundosPromesa;
        console.log(resultado);
    } catch(error) {
        console.error("error: ", error)
    }
}

esperar2Segundos()