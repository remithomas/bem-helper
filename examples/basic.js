'use strict';

var Block = require("bs-platform/lib/js/block.js");
var ReBemHelper = require("../src/ReBemHelper.js");

var myActiveBemClassNames = ReBemHelper.bem(/* Some */["my-block"], /* None */0, /* Some */[/* :: */[
        /* Boolean */Block.__(1, [
            "active",
            true
          ]),
        /* [] */0
      ]], /* () */0);

ReBemHelper.bem(/* Some */["my-block"], /* None */0, /* Some */[/* :: */[
        /* String */Block.__(0, ["small"]),
        /* [] */0
      ]], /* () */0);

ReBemHelper.bem(/* Some */["my-block"], /* None */0, /* Some */[/* :: */[
        /* String */Block.__(0, ["small"]),
        /* :: */[
          /* Boolean */Block.__(1, [
              "active",
              true
            ]),
          /* [] */0
        ]
      ]], /* () */0);

var mySizeBemClassNames = ReBemHelper.bem(/* Some */["my-block"], /* Some */["element"], /* Some */[/* :: */[
        /* String */Block.__(0, ["small"]),
        /* [] */0
      ]], /* () */0);

var isActive = true;

exports.isActive = isActive;
exports.myActiveBemClassNames = myActiveBemClassNames;
exports.mySizeBemClassNames = mySizeBemClassNames;
/* myActiveBemClassNames Not a pure module */
