# Pesel Utils

> Bunch of utilities useful when working with PESEL numbers

[![Build Status](https://travis-ci.org/xxczaki/pesel-utils.svg?branch=master)](https://travis-ci.org/xxczaki/pesel-utils) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Highlights

- Simple API
- Lightweight
- Well tested
- Uses 4-step PESEL validation (lenght + year + month + checksum)
- Written in TypeScript

## Install

```
$ npm install pesel-utils
```

## Usage

```js
const {isValidPesel, checkGender, getDateOfBirth} = require('pesel-utils');

isValidPesel('371340514609'); //=> false
checkGender('69021818876'); //=> 'male'
getDateOfBirth('75040373939'); //=> '1975/04/03'
```

## API

### isValidPesel(pesel)

Returns a `boolean` of whether the provided PESEL is valid or not.

##### pesel

Type: `string`

PESEL you want to check.

### checkGender(pesel)

Returns a `string` with gender (`male` or `female`).

##### pesel

Type: `string`

PESEL you want to check.

### getDateOfBirth(pesel)

Returns a `string` with date of birth, extracted from PESEL (in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format).

##### pesel

Type: `string`

PESEL you want to check.

## License

MIT © [Antoni Kepinski](https://kepinski.me)
