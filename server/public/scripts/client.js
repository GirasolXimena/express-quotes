$(document).ready(onReady);
console.log('js');

class Quote {
    constructor(qtext, author) {
        this.qtext = qtext;
        this.author = author;
    }
};
function clickButton() {
    console.log('clicky');
    
}

function addQuote(qtext, author) {
console.log('in addQuote');
    qtext = $(`#qtextIn`).val();
    author = $(`#authorIn`).val();
    let objectToSend = new Quote (qtext, author)   
    $.ajax({
        method: 'POST',
        url: `/quotes`,
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
    el.append(`<li> Quote: ${quote.qtext} Author: ${quote.author}`);
    }
}

function getQuotes () {
    console.log('in getQuotes');

    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function (response) {
        console.log('back from server with:', response);
        displayQuotes(response);
        
    })//end AJAX
    
} //end getQuotes
function onReady() {
    console.log('jq');
    $(`#submitButton`).on(`click`, addQuote)
}
