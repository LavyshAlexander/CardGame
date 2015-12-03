# CardGame — A demo project of using AngularJS

This project is an application based on [AngularJS](http://angularjs.org/) framework.

A memory game works like this:
* There is a deck of cards where each card has a pair (there are at least 2x of each card in the deck)
* Cards are laid out face-down in a grid in random order
* User can flip two cards at a time. If flipped card faces match, they stay face up. If cards don't match, they are placed face down again
* User wins when all cards are facing up

After winning page reloads in 100 ms, so you can play again!)
 
Also: there is miniGod mode so you can play a little bit easier.

## Getting Started

To get you started you can simply clone the CardGame repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:
* Edit loom/cardgame.dev.nc with your paths
* Copy || Symlink loom/cardgame.dev.nc to yours Nginx enabled dir
* Restart local Nginx server
* Edit your hosts file, add there line: 127.0.0.1	cardgame.dev
* Open your browser with link (http://cardgame.dev)[http://cardgame.dev]


Or:

```
npm start
```

Now browse to the app at (http://localhost:8000/app/)[http://localhost:8000/app/].



## Directory Layout

```
loom/					--> configuration files for external services
  cardgame.dev.nc		--> Nginx configuration file
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  factories/			--> all factories of application
  	cards/
  		cards.js		--> cardsFactory - generates shuffled deck of cards
  game/                 --> the game view template and logic
    game.html           --> the partial template
    game.js             --> the controller logic
    game_test.js        --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Contact

Please if you have any question about this example - contact me via creating new Issues in this repository.
For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
