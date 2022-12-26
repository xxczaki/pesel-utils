# Pesel Utils

> Bunch of utilities useful when working with PESEL numbers

[![Build Status](https://travis-ci.org/xxczaki/pesel-utils.svg?branch=master)](https://travis-ci.org/xxczaki/pesel-utils)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![install size](https://packagephobia.now.sh/badge?p=pesel-utils)](https://packagephobia.now.sh/result?p=pesel-utils)

## Highlights

- Simple API
- Zero dependencies
- Well tested
- Uses 4-step PESEL validation (length + year + month + checksum)
- Written in TypeScript

## Install

```
npm install pesel-utils
```

or

```
yarn add pesel-utils
```

## Usage

Add utils to your project

```js
const { isValidPesel, checkGender, getDateOfBirth } = require("pesel-utils");
```

or

```js
import { checkGender, getDateOfBirth, isValidPesel } from "pesel-utils";
```

then

```js
isValidPesel("371340514609"); // => false
checkGender("69021818876"); // => 'male'

getDateOfBirth("75040373939"); // => '1975/04/03'
// You can also specify a separator
getDateOfBirth("75040373939", "-"); // => '1975-04-03'
// or get it as array
getDateOfBirth("75040373939", null); // => ['1975', '04', '03']
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

### getDateOfBirth(pesel, separator?)

Returns a `string` with date of birth, extracted from PESEL in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format by default.

You can specify custom separator or get it as array (just set `null`).

##### pesel

Type: `string`

PESEL you want to check.

##### separator

Type: `string`

Default is `/`. If you want to get Array, set it to `null`.

## License

MIT © [Antoni Kepinski](https://kepinski.me)
