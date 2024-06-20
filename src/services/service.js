class ServicoExercicio {

  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível somar com números nos paramêtros")
    } else if (!num1 || !num2) {
      throw new Error("Você deve preencher todos os paramêtros")
    }
    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível subtrair com números nos paramêtros")
    } else if (!num1 || !num2) {
      throw new Error("Você deve preencher todos os paramêtros")
    }
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível multiplicar com números nos paramêtros")
    } else if (!num1 || !num2) {
      throw new Error("Você deve preencher todos os paramêtros")
    }
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Somente é possível dividir com números nos paramêtros")
    } else if (num1 === 0) {
      return 0;
    } else if (typeof(num1) === 'boolean' || typeof(num2) === 'boolean') {
      throw new Error("Não é possível dividir com o valores do tipo boolean")
    } else if (!num1 || !num2) {
      throw new Error("Você deve preencher todos os paramêtros")
    }
    
    return num1 / num2;
  }

}

module.exports = ServicoExercicio;