const waitASec = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("un segundo!")
    }, 1000)
})

waitASec.then((result) => {
    console.log(result)
    return "completé otra compresa más!"
}).then((msg) => {
    console.log(msg)
})

const encadenarOperacionesAsync = async () => {
    try {
        const result = await waitASec;
        console.log(result);
        const mensaje = 'completé otra compresa más!';
        console.log(mensaje);
    } catch (error) {
        console.error('Error:', error);
    }
};

encadenarOperacionesAsync()

/*
***** si lo hacemos tal y como se indica en ejecutarOperacionSinEspera
***** primero se muestra "Operación asincrona en progreso..." y despues se resuleve la promesa
*/

const ejecutarOperacionSinEspera = async () => {
    waitASec;
    console.log('Operación asincrona en progreso...');
};

ejecutarOperacionSinEspera()