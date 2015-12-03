'use strict';

app.factory('cardsFactory', [function() {
    var cardsFactory = {};
    var cardNames = {
        'Values' : [
            'ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'
        ],
        'Forms'  : [
            'clubs', 'diamonds', 'hearts', 'spades'
        ]
    };

    // Fisher-Yates (aka Knuth) Shuffle algorithm
    var shuffle = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    cardsFactory.getShuffledDeck = function(){
        var cards = [],
            valuesLength = cardNames.Values.length*2,
            formsLength = cardNames.Forms.length;

        for(var i=0; i < valuesLength; i++) {
            var realValueIndex = Math.floor(i/2);
            for(var j=0; j < formsLength; j++) {
                cards.push({
                    'name' : cardNames.Values[realValueIndex] + ' ' + cardNames.Forms[j],
                    'image': cardNames.Values[realValueIndex] + '_of_' + cardNames.Forms[j] + '.svg'
                });
            }
        }

        return shuffle(cards);
    };

    return cardsFactory;
}]);

