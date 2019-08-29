'use strict';

/**
* @param {string} pesel PESEL you want to check.
* @return {boolean} Whether the provided PESEL is valid or not.
*/
const isValidPesel = (pesel: string): boolean => {
	// Basic validation
	if (pesel.length !== 11) {
		return false;
	}

	const arr = pesel.split('').map(e => Number(e));

	const year = Number(`${arr[0]}${arr[1]}`);
	const month = Number(`${arr[2]}${arr[3]}`);

	// Year validation
	if (year <= 0o0 || year > 99) {
		return false;
	}

	// Month validation
	if (month <= 0o0 || month > 72) {
		return false;
	}

	const validate = ((9 * arr[0]) + (7 * arr[1]) + (3 * arr[2]) + arr[3] + (9 * arr[4]) + (7 * arr[5]) + (3 * arr[6]) + arr[7] + (9 * arr[8]) + (7 * arr[9]));
	const lastDigit = Number(validate.toString().split('').pop());

	// Checksum check
	if (lastDigit === arr[10]) {
		return true;
	}

	return false;
};

/**
* @param {string} pesel PESEL you want to check.
* @return {('male'|'female')} Gender (`male` or `female`).
*/
const checkGender = (pesel: string): 'male' | 'female' => {
	const arr = pesel.split('').map(e => Number(e));

	const genderIdentifier = arr[9];

	if (genderIdentifier % 2 === 0) {
		return 'female';
	}

	return 'male';
};

/**
* @param {string} pesel PESEL you want to check.
* @return {string} Date of birth, extracted from PESEL (in ISO 8601 format).
*/
const getDateOfBirth = (pesel: string): string => {
	const arr = pesel.split('').map(e => Number(e));

	const year = `${arr[0]}${arr[1]}`;
	const month = Number(`${arr[2]}${arr[3]}`);
	const day = `${arr[4]}${arr[5]}`;

	// Get first digits of the year & format month
	let firstDigitsofTheYear: number | undefined;
	let formattedMonth: number = month;

	if (month >= 81 && month <= 92) {
		firstDigitsofTheYear = 18;
		formattedMonth = month - 80;
	}

	if (month >= 1 && month <= 12) {
		firstDigitsofTheYear = 19;
	}

	if (month >= 21 && month <= 32) {
		firstDigitsofTheYear = 20;
		formattedMonth = month - 20;
	}

	if (month >= 41 && month <= 52) {
		firstDigitsofTheYear = 21;
		formattedMonth = month - 40;
	}

	if (month >= 61 && month <= 72) {
		firstDigitsofTheYear = 22;
		formattedMonth = month - 60;
	}

	return `${firstDigitsofTheYear}${year}/${formattedMonth < 10 ? `0${formattedMonth}` : formattedMonth}/${day}`;
};

export {
	isValidPesel,
	checkGender,
	getDateOfBirth
};
