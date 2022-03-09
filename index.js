class Retangulo{
constructor (largura,altura){
  this.largura= altura;
  this.altura = largura;
    }

  calcularAerea(){
    return this.altura * this.largura
  }
  area(){
    return this.calcularAerea()
  }
}
let quadrado = new Retangulo("10","10");
console.log(quadrado.largura);
console.log(quadrado.altura);

let retangulo = new Retangulo("30","60")
console.log(retangulo.largura)
console.log(retangulo.altura)

console.log(quadrado.area())
console.log(retangulo.area())