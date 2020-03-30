# Eat-Da-Burger!

![mainburger](https://user-images.githubusercontent.com/54419873/77934958-6ab25180-7276-11ea-9bca-5858ed5225be.png)
An application built with Node.js/Express/MySQL/Handlebars/Materialize

## Description

This application a simple full stack application..  It was implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as *available* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

## Demo

The demo of the burger eating application can be found [here](https://limitless-escarpment-61314.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/ShannenGrimes/burger.git
	
Next, install the application dependencies.

	cd burger
	npm install
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

## Technology used
- node.js - [https://nodejs.org/en/](https://nodejs.org/en/)
- heroku-cli NPM Package - [https://www.npmjs.com/package/heroku-cli](https://www.npmjs.com/package/heroku-cli)
- body-parser NPM Package - [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser)
- express NPM Package - [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
- path NPM Package - [https://www.npmjs.com/package/path](https://www.npmjs.com/package/path)


**Enjoy and have a burger!**
