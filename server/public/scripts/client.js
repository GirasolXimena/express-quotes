$(document).ready(onReady);
console.log('js');
let quotesArray = [];
class Quote {
    constructor(qtext, author) {
        this.qtext = qtext;
        this.author = author;
    }
};


function addQuote(qtext, author) {
console.log('in addQuote');
    qtext = $(`#qtextIn`).val();
    author = $(`#authorIn`).val();
    let objectToSend = new Quote (qtext, author);
    quotesArray.push(objectToSend);
    $.ajax({
        method: 'POST',
        url: `/quote`,
        data: objectToSend
    }).then(function (response){
        console.log('back from server with: ', response);
        getQuotes();
        
    })//end AJAX
    console.log('sending object', objectToSend);
    
};

function displayQuotes(quotes) {
    let el = $(`#appendHere`);
    el.empty();
    for (quote of quotesArray) {
    el.append(`<blockquote class="blockquote"><p class="mb-0"> Quote: ${quote.qtext} </blockquote>
    <footer class= "blockquote-footer"> Author: ${quote.author}</footer></cite>`);
    }
}

function getQuotes () {
    console.log('in getQuotes');

    $.ajax({
        method: 'GET',
        url: '/quote'
    }).then(function (response) {
        console.log('back from server with:', response);
        displayQuotes(response);
        
    })//end AJAX
    
} //end getQuotes
function onReady() {
    console.log('jq');
    $(`#submitButton`).on(`click`, addQuote)
    getQuotes();
   
}
