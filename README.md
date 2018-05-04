# reBEM Helper [![CircleCI](https://circleci.com/gh/remithomas/rebem-helper.svg?style=svg)](https://circleci.com/gh/remithomas/rebem-helper)

[![npm version](https://img.shields.io/npm/v/rebem-helper.svg?style=flat-square)](https://www.npmjs.com/package/rebem-helper)

> A simple BEM helper using `ReasonMl`

## How to install

1. Install `reBEM Helper`

```bash
npm install rebem-helper
```

or

```bash
yarn add rebem-helper
```

2. Add `rebem-helper` to "bs-dependencies" section of bsconfig.json

## Development

```bash
yarn start
```

## How to use

```reason
open ReBemHelper;

/* Write my-block my-block--active */
let isActive = true;
let myBemClassNames = bem(~block="my-block", ~modifiers=[Boolean("active", isActive)], ());
```

## Examples

See usage examples in [examples folder](./examples):

## How to contribute

Please feel free to write an issue/PR if you see/want somethings.
