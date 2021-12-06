const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("Esto no es valido.");
        }
        else {
            resolve(a + b);
        }
    });
};

const result = sumar(2, -4).then((res) => { document.write(res) }).catch(() => document.write("Error en operación."));

console.log(result);