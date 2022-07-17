import {saludos, num} from 'https://raw.githubusercontent.com/ErosSense1/chat-bot/main/objects.js'
let texto = document.getElementById("text");

function msg(){
  let ran = Math.floor(Math.random()*saludos.length-1);
  let myP = document.createElement("p")
    let myText = document.createTextNode(texto.value)
    let mother = document.getElementsByClassName("mother")
    
    
    
  console.log(texto.value);
  if(texto.value){
    saludos.push(texto.value)
    console.log(saludos)
  }
  if(saludos.length > 0){
    
    if (ran == -1 ){
      ran = 0
    }
    for (let i = 0; i < saludos.length-1; i++){
    if(texto.value == saludos[i]){
      saludos.pop()
      console.log(saludos)
      }
    }
    
    console.log(saludos[ran])
    let newP = document.createElement("p")
    let newD = document.createElement("div")
    let newText = document.createTextNode(saludos[ran])
    let newB = document.createElement("br")
    let couple = document.getElementsByClassName("couple")
    
    couple[0].appendChild(myP)
    couple[0].appendChild(newD)
    
    myP.appendChild(myText)
    newD.appendChild(newText)
  }
  
  return texto.value
}
function clean(){
  texto.value = ""
}

export{msg, texto, clean}
