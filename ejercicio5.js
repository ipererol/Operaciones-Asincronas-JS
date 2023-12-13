function esperarXSegundos(){
    let secs = Math.random()*5000 + 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(secs);
        }, secs)
    })
}



/* 
****** CON PROMESAS Y THEN *****
*/

esperarXSegundos().then((resultado) => {
    console.log(resultado);
})

/*
****** CON PROMESAS Y ASYNC/AWAIT *****
*/

console.log(await esperarXSegundos())