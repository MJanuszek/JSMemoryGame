const cardsArray = [

    {
        name: "blue",
        img: "gallery/blue.png"
    },

    {
        name: "green",
        img: "gallery/green.png"
    },

    {
        name: "pink",
        img: "gallery/pink.png"
    },

    {
        name: "purple",
        img: "gallery/purple.png"
    },

    {
        name: "red",
        img: "gallery/red.png"
    },

    {
        name: "yellow",
        img: "gallery/yellow.png"
    },

    {
        name: "blue",
        img: "gallery/blue.png"
    },

    {
        name: "green",
        img: "gallery/green.png"
    },

    {
        name: "pink",
        img: "gallery/pink.png"
    },

    {
        name: "purple",
        img: "gallery/purple.png"
    },

    {
        name: "red",
        img: "gallery/red.png"
    },

    {
        name: "yellow",
        img: "gallery/yellow.png"
    },
]

let chosenCards = [];
let cardsChosenIds = [];
const cardsMatched = [];

// sorting cardsArray randomly: 
//cardsArray.sort(() => 0.5 - Math.random());

const board = document.querySelector("#grid");
const result = document.querySelector("#result");

const createGameBoard = () => {
    for (let i = 0; i<cardsArray.length; i++){
       const card = document.createElement("img");
       card.setAttribute("src", "gallery/back-black.png");
       card.setAttribute("data-id", i);
       card.classList.add("card");
       board.appendChild(card);
    //    callback function to flip a card::
        card.addEventListener("click", flipCards);
    }
   
    
 }
    // porównanie 
    const checkMatch = () => {
        const cards = document.querySelectorAll("img");
        // chosen cards:
        let cardOne = cardsChosenIds[0];
        let cardTwo = cardsChosenIds[1];

        // if (cardOne === cardTwo) {
        //     alert("chose two different cards")
        // }

        if(chosenCards[0] == chosenCards[1]) {
            cards[cardOne].setAttribute("src", "gallery/white.png");
            cards[cardTwo].setAttribute("src", "gallery/white.png");

            cards[cardOne].removeEventListener("click", flipCards);
            cards[cardTwo].removeEventListener("click", flipCards);
            cardsMatched.push(chosenCards)

        } else {
            cards[cardOne].setAttribute("src", "gallery/back-black.png");
            cards[cardTwo].setAttribute("src", "gallery/back-black.png");
        }

    // cleaning chosenCards array to chose next pair:::
        chosenCards = [];
        cardsChosenIds = [];
        if(cardsMatched.length === cardsArray.length/2 ) {
            result.textContent = "Znalazłeś wszystkie pary!"
            
        }
        
    }

    // to flip cards::::
    const flipCards = function() {
        let cardId = this.getAttribute("data-id");
        console.log(cardsArray[cardId].name);
        // getting name od clicked car::::
        chosenCards.push(cardsArray[cardId].name);
        cardsChosenIds.push(cardId);
        // adding picture to fliped card:::
        this.setAttribute("src", cardsArray[cardId].img);
        // wywołaj funkcję checkMatch if length array[] chosenCards = 2:::
        if (chosenCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }











 createGameBoard();