// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [
    {
        quote: "Life is about making an impact, not making an income.",
        source: "Kevin Kruse",
        citation: "http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3a216f626697",
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        source: "Napoleon Hill",
        citation: "http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3a216f626697",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        source: "Albert Einstein",
        citation: "http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3a216f626697",
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        source: "Robert Frost",
        citation: "http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3a216f626697",
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse",
        source: "Florence Nightingale",
        citation: "http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3a216f626697",
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        source: "Wayne Gretzky",
        citation: "http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3a216f626697",
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        source: "Amelia Earhart",
        citation: "http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3a216f626697",
    }
];

// blank array to hold quote index
var availableQuotes = [];

// fill availableQuotes with all the quote indexes
function getQuotes(quote,index){
    availableQuotes.push(index);
}

// run getQuotes function for every quote to increase availableQuotes array
quotes.forEach(getQuotes);

// picks a random quote object from the quotes array
// returns the randomly selected quote object
var getRandomQuote = function getRandomQuote() {

    // when availableQuotes is empty start over selection process
    if (availableQuotes.length < 1){
        quotes.forEach(getQuotes);
    }

    // pick a random number through array length
    var randomNumber = Math.floor(Math.random() * availableQuotes.length);

    // get amount left from the availableQuotes array
    var quoteIndex = availableQuotes[randomNumber];

    // lower number left from availableQuotes array as its used
    availableQuotes.splice(randomNumber, 1);

    return quotes[quoteIndex];

};

// put a random quote to the page
var printQuote = function printQuote(quoteObject) {

    var newQuote;

    if (quoteObject.source && quoteObject.citation && quoteObject.year) {
        newQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source  + '<span class="citation">' + quoteObject.citation  + '</span> <span class="year">' + quoteObject.year + '</span> </p>';
    } else if (quoteObject.source && quoteObject.citation) {
        newQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source  + '<span class="citation">' + quoteObject.citation  + '</span> </p>';
    } else if (quoteObject.source) {
        newQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source + '</span> </p>';
    } else {
        newQuote = '<p class="quote">' + quoteObject.quote  + '</p>';
    }

    document.getElementById('quote-box').innerHTML = newQuote;

};

// put a random rgb background color
var changeBackgroundColor = function changeBackgroundColor() {

    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    if (randomColor !== 'rgb(255,255,255)') {
        document.body.style.backgroundColor = randomColor;
    }
};

// interactivity event listener for mouse clicks on page
// when button clicked loadquote
document.getElementById('loadQuote').addEventListener("click",
    function() {
        printQuote(getRandomQuote());
        changeBackgroundColor();
    }, false);

// change quote and color every ten seconds randomly
setInterval(function () {
    printQuote(getRandomQuote());
    changeBackgroundColor();
}, 10000);