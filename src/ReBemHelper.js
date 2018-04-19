'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$String = require("bs-platform/lib/js/string.js");

function join(separator, strings) {
  return $$String.trim($$String.concat(separator, strings));
}

function getModifierClassNames(modifiers, base) {
  return List.map((function (item) {
                if (item.tag) {
                  if (item[1]) {
                    return base + ("--" + item[0]);
                  } else {
                    return "";
                  }
                } else {
                  return base + ("--" + item[0]);
                }
              }), modifiers);
}

function bem(block, element, modifiers, _) {
  var classNames;
  if (block) {
    var block$prime = block[0];
    if (element) {
      var element$prime = element[0];
      if (modifiers) {
        var className = block$prime + ("__" + element$prime);
        classNames = List.append(/* :: */[
              className,
              /* [] */0
            ], getModifierClassNames(modifiers[0], className));
      } else {
        classNames = /* :: */[
          block$prime + ("__" + element$prime),
          /* [] */0
        ];
      }
    } else {
      classNames = modifiers ? List.append(/* :: */[
              block$prime,
              /* [] */0
            ], getModifierClassNames(modifiers[0], block$prime)) : /* :: */[
          block$prime,
          /* [] */0
        ];
    }
  } else if (element) {
    var element$prime$1 = element[0];
    classNames = modifiers ? List.append(/* :: */[
            element$prime$1,
            /* [] */0
          ], getModifierClassNames(modifiers[0], element$prime$1)) : /* :: */[
        element$prime$1,
        /* [] */0
      ];
  } else {
    classNames = /* [] */0;
  }
  return $$String.trim($$String.concat(" ", classNames));
}

var $$default = bem;

exports.join = join;
exports.getModifierClassNames = getModifierClassNames;
exports.bem = bem;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* No side effect */
