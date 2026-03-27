/**
 * @param {string} pesel - PESEL you want to check.
 * @return {boolean} Whether the provided PESEL is valid or not.
 */
const isValidPesel = (pesel: string): boolean => {
	// Basic validation.
	if (!/^[0-9]{11}$/u.test(pesel)) {
		return false;
	}

	const monthWithCentury = Number(pesel.substring(2, 4));

	// Century is encoded in month: https://en.wikipedia.org/wiki/PESEL.
	if (!monthWithCentury || monthWithCentury % 20 > 12) {
		return false;
	}

	// Validate day.
	const day = Number(pesel.substring(4, 6));
	if (!day || day < 1 || day > 31) {
		return false;
	}

	const times = [1, 3, 7, 9];
	const digits: number[] = `${pesel}`
		.split('')
		.map(digit => Number.parseInt(digit, 10));

	const [dig11] = digits.splice(-1);

	const control = digits.reduce((previousValue, currentValue, index) =>
		previousValue + currentValue * times[index % 4] as number
	) % 10;

	return 10 - (control === 0 ? 10 : control) === dig11;
};

/**
 * @param {string} pesel - PESEL you want to check.
 * @return {('male'|'female')} Gender (`male` or `female`).
 */
const checkGender = (pesel: string): 'male' | 'female' => {
	const arr = pesel.split('').map(Number);

	const genderIdentifier = arr[9];

	if (genderIdentifier % 2 === 0) {
		return 'female';
	}

	return 'male';
};

/**
 * @param {string} pesel - PESEL you want to check.
 * @param {string} separator - default is `/`. If you want to get Array, set it to `null`.
 * @return {string | array} Date of birth, extracted from PESEL in ISO 8601 format by default, also you can add custom separator. If separator is `null` it returns Array.
 */
const getDateOfBirth = (
	pesel: string,
	separator: string | null = '/',
): string | string[] => {
	const arr = pesel.split('').map(Number);

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

	const birthDate: string[] = [
		`${firstDigitsofTheYear}${year}`,
		`${formattedMonth < 10 ? `0${formattedMonth}` : formattedMonth}`,
		`${day}`,
	];

	return separator ? birthDate.join(separator) : birthDate;
};

export {isValidPesel, checkGender, getDateOfBirth};
