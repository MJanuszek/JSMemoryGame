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

const chosenCards = [];

// sorting cardsArray randomly: 
cardsArray.sort(() => 0.5 - Math.random());

const board = document.querySelector("#grid");

const createGameBoard = () => {
    for (let i = 0; i<cardsArray.length; i++){
       const card = document.createElement("img");
       card.setAttribute("src", "gallery/back-black.png");
       card.setAttribute("data-id", i);
       card.classList.add("card");
    //    console.log(card);
       board.appendChild(card);
    //    callbacl function to flip a card::
        card.addEventListener("click", flipCards);
    }
 }

    // to flip a cards::::

    const flipCards = function() {
        let cardId = this.getAttribute("data-id");
        console.log(cardsArray[cardId].name);
        // geting name od clicked car::::
        chosenCards.push(cardsArray[cardId].name);
        // adding picture to fliped card:::
        this.setAttribute("src", cardsArray[cardId].img);
    }











 createGameBoard();