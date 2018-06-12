# reBEM Helper [![CircleCI](https://circleci.com/gh/remithomas/rebem-helper.svg?style=svg)](https://circleci.com/gh/remithomas/rebem-helper) 

[![npm version](https://img.shields.io/npm/v/rebem-helper.svg?style=flat-square)](https://www.npmjs.com/package/rebem-helper) [![Coverage Status](https://coveralls.io/repos/github/remithomas/rebem-helper/badge.svg?branch=reorder_readme)](https://coveralls.io/github/remithomas/rebem-helper?branch=reorder_readme)

> A simple BEM helper using [ReasonMl](http://reasonml.github.io)

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

## How to use

```reason
open ReBemHelper;

/* Write my-block my-block--active */
let isActive = true;
let myBemClassNames = bem(~block="my-block", ~modifiers=[Boolean("active", isActive)], ());
```

```reason
open ReBemHelper;

/* Write class names: my-block my-block--small */
let mySizeBemClassNames = bem(~block="my-block", ~modifiers=[String("small")], ());
```

```reason
open ReBemHelper;
/* Write class names: my-block my-block--active my-block--small my-block--disable */
let mySizeBemClassNames = bem(
  ~block="my-block",
  ~modifiers=[
    String("small"),
    Boolean("active", isActive),
    Switch("enable", "disable", false)
  ],
  ()
);
```

```reason
open ReBemHelper;
/* Write class names: my-block__element my-block__element--small some-other-class */
let mySizeBemClassNames = bem(~block="my-block", ~element="element", ~modifiers=[String("small")], ~others="some-other-class", ());
```

### Modifier list

- `String(modifierName)` String(string)
- `Boolean(modifierName, shouldShowModifierName)` Boolean(string, bool)
- `Switch(activeModifierName, unactiveModifierName, isActiveModifierName)` Switch(string, string, bool)

## Examples

See more examples in [examples folder](./examples):

## Development

Install and code.

```bash
yarn install
yarn start
```

Run tests

```bash
yarn test
```

Run tests (on watch)

```bash
yarn test:dev
```

## How to contribute

Please feel free to write an issue/PR if you see/want somethings.
