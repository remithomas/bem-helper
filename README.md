# reBEM Helper

[![CircleCI](https://circleci.com/gh/remithomas/rebem-helper.svg?style=svg)](https://circleci.com/gh/remithomas/rebem-helper)

> A simple BEM helper using `ReasonMl`

## How to install

```bash
npm install rebem-helper
```

or

```bash
yarn add rebem-helper
```

## Development

```bash
yarn start
```

## How to use

```re
/* Write my-block my-block--active */
let isActive = true;
let myBemClassNames = bem(~block="my-block", ~modifiers=[Boolean("active", isActive)], ());
```

## Examples

See usage examples in [examples folder](./examples):

## How to contribute

Please feel free to write an issue/PR if you see/want somethings.

## Todos

- [X] Add some examples
- [ ] How to install
