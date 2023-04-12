const iterador = (contador) => {
    setTimeout(() => {
        console.log(contador)
    }, 2000 * contador)
}

for (let index = 0; index < 30; index++) {
    iterador(index)
}