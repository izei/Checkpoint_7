function operacion(num1, num2, num3, num4) {
    var suma1 = num1 + num2;
    var suma2 = num3 + num4;
    var resultado = suma1 * suma2;

    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

operacion(10, 20, 3, 4); 