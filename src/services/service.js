const CustomError = require('../errors/error');

class ServicoExercicio {
  Somar(num1, num2) {
    CustomError.verificarParametros(num1, num2); // chamando o metodo da classe para verificar os parametros
    return num1 + num2;
  }

  Subtrair(num1, num2) {
    CustomError.verificarParametros(num1, num2);
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    CustomError.verificarParametros(num1, num2);
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if (num1 == 0 || num2 === 0) {
      return 0
    }

    CustomError.verificarParametros(num1, num2);
    return num1 / num2;
  }
}

module.exports = ServicoExercicio;