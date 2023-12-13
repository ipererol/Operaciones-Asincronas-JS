const op1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Operación 1 completada');
    }, 1000);
});

const op2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Operación 2 completada');
    }, 2000);
});

Promise.all([op1, op2]).then((resultados) => {
    console.log('Resultados:', resultados);
})


async function operacionesConcurrentes() {
    try {
        const resultados = [];
        resultados.push(await op1);
        resultados.push(await op2);
        console.log(`resultados: ${resultados}`);
    } catch (error) {
        console.error(`error: ${error}`)
    }
}

operacionesConcurrentes()

async function operacionesConcurrentes() {
    try {
        const resultados = Promise.all([op1, op2])
        console.log(`resultados: ${resultados}`);
    } catch (error) {
        console.error(`error: ${error}`)
    }
}

operacionesConcurrentes()