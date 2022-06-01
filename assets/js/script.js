// variables from html page






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
        var numbers = responseData.number;
        // console.log(responseData.number)
        // console.log("HEY HEY " + numbers);

        var fact = responseData.text;
        // console.log(fact);
        console.log(numbers + " is " + fact);
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
        var jokes = responseData.joke;
        // console.log(responseData.joke)
        console.log(jokes);
    })
    .catch(err => console.error(err));