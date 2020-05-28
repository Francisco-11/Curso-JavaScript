
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch( jokeUrl ).then( resp => {
    // Forma 1:
    // resp.json().then(data => {
        // console.log(data.id);
        // console.log(data.value);
    // });

    // Forma 2:
    // resp.json().then(({id,value}) => {
        // console.log(id);
        // console.log(value);
    // })
// });



// Pro - Tip

fetch(jokeUrl)
    .then(resp => resp.json())
    .then(({id,value})=>{
        console.log(id,value);
    });






