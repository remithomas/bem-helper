'use strict';

var Block = require("bs-platform/lib/js/block.js");
var ReBemHelper = require("../src/ReBemHelper.js");

var myActiveBemClassNames = ReBemHelper.bem("my-block", undefined, /* :: */[
      /* Boolean */Block.__(1, [
          "active",
          true
        ]),
      /* [] */0
    ], undefined, /* () */0);

ReBemHelper.bem("my-block", undefined, /* :: */[
      /* String */Block.__(0, ["small"]),
      /* [] */0
    ], undefined, /* () */0);

ReBemHelper.bem("my-block", undefined, /* :: */[
      /* String */Block.__(0, ["small"]),
      /* :: */[
        /* Boolean */Block.__(1, [
            "active",
            true
          ]),
        /* [] */0
      ]
    ], undefined, /* () */0);

ReBemHelper.bem("my-block", "element", /* :: */[
      /* String */Block.__(0, ["small"]),
      /* [] */0
    ], undefined, /* () */0);

ReBemHelper.bem("my-block", undefined, /* :: */[
      /* String */Block.__(0, ["small"]),
      /* :: */[
        /* Boolean */Block.__(1, [
            "active",
            true
          ]),
        /* :: */[
          /* Switch */Block.__(2, [
              "enable",
              "disable",
              false
            ]),
          /* [] */0
        ]
      ]
    ], undefined, /* () */0);

var mySizeBemClassNames = ReBemHelper.bem("my-block", "element", /* :: */[
      /* String */Block.__(0, ["small"]),
      /* [] */0
    ], "some-other-class", /* () */0);

var isActive = true;

exports.isActive = isActive;
exports.myActiveBemClassNames = myActiveBemClassNames;
exports.mySizeBemClassNames = mySizeBemClassNames;
/* myActiveBemClassNames Not a pure module */
