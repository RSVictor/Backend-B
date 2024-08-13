
function calculoresistencia(){
   return tensao / corrente;
}

let tensao = 135;
let corrente = 5;

let resistencia = calculoresistencia();

console.log("Aresitencia é:" , resistencia)