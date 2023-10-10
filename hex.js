const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener('click', function(){
    // get random hex number
    const randomHexNumber = getRandomHexNumber();    
    document.body.style.backgroundColor = randomHexNumber;
    color.textContent = randomHexNumber;
})

function getRandomHexNumber() {
    var hexNumber = "#"; // create variable string fro hex color start with #
    
    // loop 6 times for add random characters to string between 0-9, A-F
    for(var i=0;i<=5;i++){
        // random character in array
        hexNumber = hexNumber + hex[Math.floor(Math.random() * 16)]; 
    }
    return hexNumber; // return random hex string
}