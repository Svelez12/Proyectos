const peticion = async () => {
    setTimeout(() => {
        const datos =
        {
            id: 2,
            name: "Steven Velez",
            username: "Steven",
            email: "velez.steven12@gmail.com"
        };

        console.log(datos);
    }, 1000);
};

peticion().then(console.log(datos));