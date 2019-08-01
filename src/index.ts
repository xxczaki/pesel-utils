'use strict';

import isOdd from 'is-odd';

const isValidPesel = (pesel: string): boolean => {
	// Basic validation
	if (pesel === null || pesel.length !== 11) {
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

const checkGender = (pesel: string): 'male' | 'female' => {
	const arr = pesel.split('').map(e => Number(e));

	const genderIdentifier = arr[9];

	if (isOdd(genderIdentifier)) {
		return 'male';
	}

	return 'female';
};

const getDateOfBirth = (pesel: string): string => {
	const arr = pesel.split('').map(e => Number(e));

	const year = `${arr[0]}${arr[1]}`;
	const month = Number(`${arr[2]}${arr[3]}`);
	const day = `${arr[4]}${arr[5]}`;

	// Get first digits of the year using month
	let firstDigitsofTheYear: number | undefined;

	if (month >= 81 && month <= 92) {
		firstDigitsofTheYear = 18;
	}

	if (month >= 1 && month <= 12) {
		firstDigitsofTheYear = 19;
	}

	if (month >= 21 && month <= 32) {
		firstDigitsofTheYear = 20;
	}

	if (month >= 41 && month <= 52) {
		firstDigitsofTheYear = 21;
	}

	if (month >= 61 && month <= 72) {
		firstDigitsofTheYear = 22;
	}

	// Format month
	let formattedMonth: number = month;

	if (month >= 81 && month <= 92) {
		formattedMonth = month - 80;
	}

	if (month >= 21 && month <= 32) {
		formattedMonth = month - 20;
	}

	if (month >= 41 && month <= 52) {
		formattedMonth = month - 40;
	}

	if (month >= 61 && month <= 72) {
		formattedMonth = month - 60;
	}

	return `${firstDigitsofTheYear}${year}/${formattedMonth < 10 ? `0${formattedMonth}` : formattedMonth}/${day}`;
};

export {
	isValidPesel,
	checkGender,
	getDateOfBirth
};
