function functionPromesa1(msg, tiempo) {
    return new Promise(function (resolver, rechazar) {
        if (tiempo > 500) {
            setTimeout(function () {
                resolver(msg)
            }, tiempo)
        } else {
            rechazar("error" )
        }

    })
}

functionPromesa1("primera", 1000).then((resultado) => {
    console.log(resultado)
    return functionPromesa1("segunda", 500)
}).then((resultado2) => {
    console.log(resultado2)
    return functionPromesa1("tercera", 3000);
}).then((resultado3) => {
    console.log(resultado3)
}).catch(error => {
    console.error(error)
})

console.log("esto se imprimira primero")