class CustomError extends Error { // extends error para usar no throw new (customError)
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  
    static verificarParametros(num1, num2) {
      if (isNaN(num1) || isNaN(num2)) {
        throw new CustomError("Somente é possível realizar operações com números nos parâmetros");
      } else if (num1 === undefined || num2 === undefined) {
        throw new CustomError("Você deve preencher todos os parâmetros corretamente");
      } else if (typeof(num1) === 'boolean' || typeof(num2) === 'boolean') {
        throw new CustomError("Não é possível realizar operações com valores do tipo boolean");
      } else if(!num1 || !num2){
        throw new CustomError("Você deve preencher todos os paramêtros");
      }
    }
  }
  
  module.exports = CustomError;