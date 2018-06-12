'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$String = require("bs-platform/lib/js/string.js");

function getModifierClassNames(modifiers, base) {
  return List.map((function (item) {
                switch (item.tag | 0) {
                  case 0 : 
                      return base + ("--" + item[0]);
                  case 1 : 
                      if (item[1]) {
                        return base + ("--" + item[0]);
                      } else {
                        return "";
                      }
                  case 2 : 
                      if (item[2]) {
                        return base + ("--" + item[0]);
                      } else {
                        return base + ("--" + item[1]);
                      }
                  
                }
              }), modifiers);
}

function bem(block, element, modifiers, $staropt$star, _) {
  var others = $staropt$star ? $staropt$star[0] : "";
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
  var bemClasses = List.append(classNames, /* :: */[
        others,
        /* [] */0
      ]);
  return $$String.trim($$String.concat(" ", bemClasses));
}

var $$default = bem;

exports.bem = bem;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* No side effect */
