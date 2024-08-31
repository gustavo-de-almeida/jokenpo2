var playerchoice = document.querySelectorAll(".options-img");
const conteiner = document.querySelector(".conteiner");
const result = document.querySelector("h1");
const userResult = document.querySelector(".player img")
const machineResult = document.querySelector(".machine img")
const main = document.querySelector("main")
const computerImgs = ['./assets/papel.png','./assets/pedra.png','./assets/tesoura.png',]


const winner ={
  RR:"Empate" 
  ,
  RS:"Voçê",
  RP:"Computador",
  PP:"Empate",
  PR:"Voçê",
  PS:"Computador",
  SS:"Empate",
  SP:"Você",
  SR:"Computador"
}



function choiceHandal(event) {
  const clickedImgs = event.currentTarget;
    const clickedIndex = Array.from(playerchoice).indexOf(clickedImgs)

  conteiner.classList.add("start");
  result.innerHTML = "...";
  userResult.src =  machineResult.src = computerImgs[1]
  setTimeout(() => {
    conteiner.classList.remove("start");
    userResult.src = computerImgs[clickedIndex]
    
    
    const randamNumber = Math.floor( Math.random() * computerImgs.length)
    machineResult.src = computerImgs[randamNumber]
    const userValue = ['P','R','S'][clickedIndex]
    const computerValue =['P','R','S'][randamNumber]
    const userComputerResult = userValue + computerValue 
    const finalResult = winner[userComputerResult]
    if (userValue === computerValue) {
      setTimeout(() => {
        result.innerHTML ="Empate"
      main.style.boxShadow ='0 5px 10px rgb(255, 238, 0)'
      }, 50);
      
    }
    else if(finalResult === "RS"|| finalResult=== "SP" || finalResult==="PR" ){
      setTimeout(() => {
         result.innerHTML ="Computador ganhou"
      main.style.boxShadow ='0 5px 10px rgba(255, 0, 0, 0.6)'
      }, 50);
     
    } else{
      setTimeout(() => {
        result.innerHTML ="Você ganhou"
      main.style.boxShadow ='0 5px 10px rgba(43, 255, 0, 0.6)'
      }, 50);
      

    }
    
  }, 2000);
}





playerchoice.forEach((img) => {
  img.addEventListener("click", choiceHandal);
});



