#1: Prerequisite to setup

	#1: Install npm globally
	    |
	    -- npm version (3.8.6) -  Stick to this version unless any other dependencies needs to be installed higher version to support project
	    |
	    -- node version (5.12.0) - Stick to this version unless any other dependencies needs to be installed higher version to support project. 

	#2: Install react, react-dom, babel-core, babel-loader,babel-preset-es2015, babel-preset-react, sass-loader and other related dependencies locally
		|
		-- npm install react react-dom --save-dev
		-- npm i babel babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

	#3: Install webpack and webpack-dev-server globally 
		|
		-- npm install webpack webpack-dev-server -g



#2: Steps to setup:

	Go to project folder, follow below steps:

	 1. PS project/folder/path> npm intall ( This will install package in project folder as per "package.json")
	 2. PS project/folder/path> npm start 
	    - For dev purpose, this will execute http://localhost:8080 - default port number; 
	    - Devloper can see changes on fly without page refresh (hard) and 
	    - Below PROD CLI need to run once Dev confirm for build package for production.
			########################
			# PROD - npm run build #
			########################


Referece:
   React Chrome Dev tool - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

React resources:
	https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html 