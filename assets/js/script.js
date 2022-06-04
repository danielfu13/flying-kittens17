// variables from html page
var jokeButton = document.getElementById('joke-btn');
var numberButton = document.getElementById('number-btn');
var printJoke = document.getElementById('jokeModal');
var printNumber = document.getElementById('numberModal');
var promptList = document.getElementById('prompt-list');
const modalBackground = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');


// universal variables
var jokesOut;
var numbersOut;
var factOut;
var numberFactOut;


// function fetches the number API, prints the modal content and sets local storage
var numberCall = function () {
    // numbers to show up we will need to get the 'number' AND the 'text'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
            'X-RapidAPI-Key': '4acd7dcee7mshe1a3f6c55fe0226p1b65c6jsne8a92942582f'
        }
    };

    fetch('https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', options)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData)
            numbersOut = responseData.number;


            factOut = responseData.text;
            modal.classList.add('is-active');
            //print number to modal
            printNumber.textContent = numbersOut + " is " + factOut;
            numberFactOut = numbersOut + " is " + factOut
            localStorage.setItem("number starters", JSON.stringify(numberFactOut));

        })
        .catch(err => console.error(err));
}


// function fetches the joke API, prints the modal content and sets local storage
var jokeCall = function () {
    // joke api to show up we will need "joke" 
    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
            'X-RapidAPI-Key': '4acd7dcee7mshe1a3f6c55fe0226p1b65c6jsne8a92942582f'
        }
    };

    fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single&format=json&idRange=0-150&blacklistFlags=nsfw%2Creligious%2Cpolitical%2Cracist%2Csexist%2Cexplicit', option)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(responseData => {
            console.log(responseData)
            jokesOut = responseData.joke;
            modal.classList.add('is-active');
            //print joke to modal
            printJoke.textContent = jokesOut;
            localStorage.setItem("funny starters", JSON.stringify(jokesOut));
            // console.log(responseData.joke)
            // console.log(jokesOut);
        })
        .catch(err => console.error(err));

}

// clicking on joke button calls the function jokeCall
jokeButton.addEventListener("click", function () {
    jokeCall();
})

// clicking on number button calls the function numberCall
numberButton.addEventListener("click", function () {
    numberCall();
})

// function calls the local storage and outputs it as a P tag
function init() {
    promptList.innerHTML = "";

    // outputs the last joke as the content of a P tag
    var savedJokes = JSON.parse(localStorage.getItem("funny starters"));
    var paragraph = document.createElement("p");
    paragraph.textContent = savedJokes;
    promptList.appendChild(paragraph);

    // outputs the last number fact as the content of a P tag
    var savedNumbers = JSON.parse(localStorage.getItem("number starters"));
    var paragraph = document.createElement("p");
    paragraph.textContent = savedNumbers;
    promptList.appendChild(paragraph);
}

//to close modal if background is clicked, clear the content of the modal and print the joke/fact as a P tag below
modalBackground.addEventListener('click', () => {
    modal.classList.remove('is-active');
    printJoke.textContent = "";
    printNumber.textContent = "";
    init();
});