const names =["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    let note = [];
    for (let i = 0; i < names.length; i++) {
            let message = (`Thank you, ${names[i]}, for the wonderful surprise gift!`)
            note.push(message);
        }

    return note;
}

function countDown() {
    let numbers = 10;
    while (numbers >= 0) {
        console.log (numbers);
        numbers--    
       
    }
    

}
