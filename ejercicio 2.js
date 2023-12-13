function verificarParidad(numero) {
    return new Promise((resolve, reject) => {
        if(numero%2 === 0) {
            resolve(`El numero ${numero} es par`);
        } else {
            reject(`El numero ${numero} es impar`);
        }
    })
} 


/* 
****** CON PROMESAS Y THEN *****
*/

verificarParidad(5).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(result)

}) 

/*
****** CON PROMESAS Y ASYNC/AWAIT *****
*/

async function verificarParidadAsync(numero) {
    try{
        const msg = await verificarParidad(numero);
        console.log(msg);
    } catch(error) {
        console.error(error);
    }
}