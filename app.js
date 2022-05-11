require('dotenv').config();

if(!process.env.TOKEN && !process.env.KEY ) {
    throw new Error('No hay configuracion con Api Key y con Token');
}

const Trello = require("./main");
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "62794688de336c4bcc748ce2",
   (error, trelloCard) => {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });