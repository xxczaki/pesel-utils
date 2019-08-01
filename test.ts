import test from 'ava';

import {isValidPesel, checkGender, getDateOfBirth} from './dist';

test('pesel too short', t => {
	t.is(isValidPesel('1'), false);
});

test('pesel too long', t => {
	t.is(isValidPesel('111111111111'), false);
});

test('invalid pesel', t => {
	t.is(isValidPesel('371340514609'), false);
});

test('valid pesel', t => {
	t.is(isValidPesel('54022856499'), true);
});

test('check gender (male)', t => {
	t.is(checkGender('69021818876'), 'male');
});

test('check gender (female)', t => {
	t.is(checkGender('58081476249'), 'female');
});

test('get date of birth (19th century)', t => {
	t.is(getDateOfBirth('00840345828'), '1800/04/03');
});

test('get date of birth (20th century)', t => {
	t.is(getDateOfBirth('75040373939'), '1975/04/03');
});

test('get date of birth (21st century)', t => {
	t.is(getDateOfBirth('13240376213'), '2013/04/03');
});

test('get date of birth (22nd century)', t => {
	t.is(getDateOfBirth('00440345653'), '2100/04/03');
});
test('get date of birth (23rd century)', t => {
	t.is(getDateOfBirth('00640345653'), '2200/04/03');
});
