const card = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;
  // console.log('I was clicked!');
  // console.log(this);
  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  // else{
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();

  //do card match?
  // console.log(firstCard.dataset.framework);
  // console.log(secondCard.dataset.framework);
  //     if(firstCard.dataset.framework === secondCard.dataset.framework){
  //         //it's a match!!
  //         firstCard.removeEventListener('click',flipCard);
  //         secondCard.removeEventListener('click',flipCard);
  //     }else{
  //         //not a match
  //         setTimeout(()=> {
  //             firstCard.classList.remove('flip');
  //             secondCard.classList.remove('flip');
  //         },1500);
  //     }

  //     console.log('Functin was execuded');
  // }
}

function checkForMatch() {
  //do card match?
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unFlipCard();

  //   if (firstCard.dataset.framework === secondCard.dataset.framework) {
  //     //it's a match!!
  //     disableCards();
  //   } else {
  //     unFlipCard();
  //   }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unFlipCard() {
    lockBoard =true;
  //not a match
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard =false;
  }, 1500);
}
function resetBoard (){
    [hasFlippedCard, lockBoard] = [false,false];
    [firstCard,secondCard] = [null,null];
}

(function shuffle() {
    card.forEach(crd=>{
        let rendomPos = Math.floor(Math.random() * 12);
        crd.style.order = rendomPos;
    });
    })();
    
card.forEach((card) => card.addEventListener("click", flipCard));
