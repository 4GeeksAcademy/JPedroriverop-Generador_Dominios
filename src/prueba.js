let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let combinacion = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      combinacion.push([pronoun[i] + adj[j] + noun[k] + ".com"]);
    }
  }
}
console.log(combinacion);
let dominio = combinacion[Math.floor(Math.random()) * combinacion.length];
console.log(dominio);
