test("nome do teste", () =>{
  console.log("e agora?");
});

const calculadora = required("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);d
});