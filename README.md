ISO Country Codes Converter
======

The following script is to convert 2-digit country codes (ISO alpha-2) to 3-digit country codes (ISO alpha-3), and visa-versa.

The ISO country code are internationally recognized codes that designates for each country and most of the dependent areas a two letter combination or a three letter combination, an abbreviation, that stands for a country.

### Documentation

#### Installation

	npm install

Note: you may want to install the package dependencies globally if you don't have them already...

	npm install -g babel-cli
	npm install -g browserify
	npm install -g jasmine

#### Getting Started

###### Building the project

The following command will transpile the ES6 module to ES5, minify the JS, then run the unit tests.

	npm run all

###### Running the project

The script is simple - initially you need include the JS and call one of the two publically accessible methods for the country code conversion.

##### Convert from 2 digit (ISO alpha-2) to 3-digit country codes (ISO alpha-3):

countryCodeConverter.convertTwoDigitToThree('US'); // Returns 'USA'

-----

##### Convert from 3 digit (ISO alpha-3) to 2-digit country codes (ISO alpha-2):

countryCodeConverter.convertThreeDigitToTwo('USA'); // Returns 'US'


