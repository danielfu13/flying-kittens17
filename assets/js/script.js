// variables from html page
var jokeButton = document.getElementById('joke-btn');
var numberButton = document.getElementById('number-btn');

// universal variables
var jokesOut;
var numbersOut;
var factOut;

// numbers   to show up we will need to get the 'number' AND the 'text'
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
        // console.log(responseData.number)
        // console.log("HEY HEY " + numbers);

        factOut = responseData.text;
        // console.log(fact);
        // console.log(numbersOut + " is " + factOut);
    })
    .catch(err => console.error(err));



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
        // console.log(responseData.joke)
        // console.log(jokesOut);
    })
    .catch(err => console.error(err));


// what happens when clicking on the joke button
jokeButton.addEventListener("click", function () {
    // console.log("hey it works" + jokesOut);
    console.log(jokesOut);

})


// what happens when clicking on the number button
numberButton.addEventListener("click", function () {
    // console.log("Hey it works" + numbersOut + " is " + factOut);
    console.log(numbersOut + " is " + factOut);
})


// make a display function to be called during button click one for numberbutton one for jokebutton


// make a function to save results to local storage for each one

// make a function to call saved results for each one