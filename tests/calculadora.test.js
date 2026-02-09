test("nome do teste", () =>{
  console.log("e agora?");
});

const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
})