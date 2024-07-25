function soma (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw error("x e y precisam ser do tipo number")
    }

    return x + y;
}

try {
    console.log(soma(1, 4))
} catch (error) {
    console.log(error)
}