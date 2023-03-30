const curso = ["IronHacker", "Hacker", "Iron"];
const palavraSecreta = curso[Math.floor(Math.random() * curso.length)];

const palavraSeparada = palavraSecreta.split("")
const letrasCorretas = []
const letrasErradas = []


document.addEventListener("keydown", (evento)=>{
  const codigo = evento.code;
  if(isLetra(codigo)){
    const letra = evento.key
    if(palavraSeparada.includes(letra)){
      letrasCorretas.push(letra)
    }else {
      letrasErradas.push(letra)
    }
  
  } 
  atualizarJogo()
})

function atualizarJogo(){
  mostrarLetrasErradas();
  mostrarLetrasCorretas();
}

function mostrarLetrasCorretas(){
  const certas = document.getElementById("palavra-secreta-container")
  letrasCorretas.forEach(letras =>{
    certas.innerHTML += ` ${letras} `
  })
}

function mostrarLetrasErradas(){
  const erradas = document.getElementById("letras-erradas-container")
  letrasErradas.forEach(letra => {
    erradas.innerHTML += ` ${letra} `
  })
}


function isLetra(codigo){
  return codigo >= 65 && codigo <= 90;
}