var playerchoice = document.querySelectorAll(".options-img");
const conteiner = document.querySelector(".conteiner");
const result = document.querySelector("h1");
const userResult = document.querySelector(".player img")
const machineResult = document.querySelector(".machine img")
const main = document.querySelector("main")
const computerImgs = ['./assets/papel.png','./assets/pedra.png','./assets/tesoura.png']






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
    
    
    
   
    if(clickedIndex === 0 && randamNumber=== 1 || clickedIndex === 2 && randamNumber === 0 || clickedIndex === 1 && randamNumber=== 2  ){
      setTimeout(() => {
        result.innerHTML ="voce ganhou"
     main.style.boxShadow ='0 5px 10px rgb(0,250,0,6)'
     }, 50);
      
    }else if(clickedIndex === randamNumber  ){
     
      setTimeout(() => {
        result.innerHTML ="Empate"
      main.style.boxShadow ='0 5px 10px rgb(255, 238, 0)'
      }, 50);
     
    }else{
      setTimeout(() => {
        result.innerHTML ="Computador ganhou"
     main.style.boxShadow ='0 5px 10px rgba(255, 0, 0, 0.6)'
     }, 50);
      

  }},2000)
 
}





playerchoice.forEach((img) => {
  img.addEventListener("click", choiceHandal);
});



