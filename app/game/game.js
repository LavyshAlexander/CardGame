'use strict';

app.controller(
    'GameCtrl', ['$scope', 'cardsFactory', function($scope, cardsFactory) {
        $scope.cards = cardsFactory.getShuffledDeck();
        $scope.selectedCards = [];
        $scope.totalFount = 0;
        $scope.backcover = 'resources/images/backcovers/' + Math.floor(Math.random() * 5) + '.svg';

        /*
        * Function checkCard - shows face of the clicked card and check all upped cards
        * */
        $scope.checkCard = function(id, $event){
            if($scope.selectedCards.length === 2){
                clearSelected();
            }
            var selectedCardElement = document.getElementById(id, $event),
                selectedCard = {
                    'element'      : selectedCardElement,
                    'name'         : selectedCardElement.getAttribute('data-card-name'),
                    'image'        : selectedCardElement.getAttribute('data-card-image'),
                    'imageElement' : selectedCardElement.getElementsByTagName('img')[0]
                };

            // miniGod mode
            if ($event.altKey){
                selectedCard.imageElement.src = selectedCard.image;
                return;
            }

            selectedCard.imageElement.src = selectedCard.image;
            $scope.selectedCards.push(selectedCard);

            checkSelected();
        };

        function clearSelected(){
            angular.forEach($scope.selectedCards, function(item){
               item.imageElement.src = $scope.backcover;
            });
            $scope.selectedCards = [];
        }

        function checkSelected(){
            if($scope.selectedCards.length === 2
                && $scope.selectedCards[0].name === $scope.selectedCards[1].name
                && $scope.selectedCards[0].element.id !== $scope.selectedCards[1].element.id
            ){
                angular.forEach($scope.selectedCards, function(item){
                    setOpacity(item.imageElement, 50);
                });
                $scope.selectedCards = [];
                $scope.totalFount += 2;
                if( $scope.totalFount === $scope.cards.length ){
                    alert('Congratulations! You win!');
                    setTimeout(function(){
                        document.location.reload();
                    }, 100);
                }
            }
        }

        function setOpacity( imageElement, opacity ) {
            imageElement.style.opacity = ( opacity / 100 );
            imageElement.style.MozOpacity = ( opacity / 100 );
            imageElement.style.KhtmlOpacity = ( opacity / 100 );
            imageElement.style.filter = 'alpha(opacity=' + opacity + ')';
        }
}]);