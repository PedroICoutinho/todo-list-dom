const curso = ["IronHacker", "Hacker", "Iron"];

const palavraSecreta = curso[Math.floor(Math.random() * curso.length)];

document.addEventListener("keydown", (evento)=>{
  const codigo = evento.code;
  if(isLetra(codigo)){
    const letra = evento.key
  }


})


function isLetra(codigo){
  return codigo >= 60 && codigo <= 90;
}