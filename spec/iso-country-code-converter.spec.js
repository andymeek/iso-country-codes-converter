'use strict';

var isoCountryCodeConverter = require('../src/iso-country-code-converter').isoCountryCodeConverter;

describe('ISO Country Code Converter', function () {

	it('SHOULD return a 3-digit (ISO-Alpha 3) when the method convertTwoDigitToThree is called with a valid 2-digit (ISO-Alpha 2) code...', function () {
		var test = isoCountryCodeConverter.convertTwoDigitToThree('us');
		expect(test).toBe('USA');
	});

	it('SHOULD return a 2-digit (ISO-Alpha 2) when the method convertThreeDigitToTwo is called with a valid 3-digit (ISO-Alpha 3) code...', function () {
		var test = isoCountryCodeConverter.convertThreeDigitToTwo('usa');
		expect(test).toBe('US');
	});

});