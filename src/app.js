import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
 

function excuseGenerator() {
  // partes excusas
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car', 'the house'];
  let when = ['before the class.', 'when I was sleeping.', 'while I was exercising.', 'during my lunch.'];

  // genera nº aleatorio
  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

    document.getElementById("excuse").innerHTML = who[random1] + " " + action[random2] + " " + what[random3] + " " + when[random4];
  console.log("Judith Ramírez");
}

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-btn");
  if (button) {
    button.addEventListener("click", excuseGenerator);
  }
});