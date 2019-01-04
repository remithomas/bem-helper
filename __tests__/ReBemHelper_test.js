'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var ReBemHelper = require("../src/ReBemHelper.js");

describe("BEM helper", (function () {
        Jest.test("it should create a className for block", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, undefined, undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-block", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create a className for element", (function (param) {
                var myBemClassNames = ReBemHelper.bem(undefined, "my-element", undefined, undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-element", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create classNames for block and element", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", "element", undefined, undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-block__element", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with truthly boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, /* :: */[
                      /* Boolean */Block.__(1, [
                          "active",
                          true
                        ]),
                      /* [] */0
                    ], undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-block my-block--active", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with falsy boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, /* :: */[
                      /* Boolean */Block.__(1, [
                          "active",
                          false
                        ]),
                      /* [] */0
                    ], undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-block", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with string modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, /* :: */[
                      /* String */Block.__(0, ["big"]),
                      /* [] */0
                    ], undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-block my-block--big", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with switch modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, /* :: */[
                      /* Switch */Block.__(2, [
                          "active",
                          "inactive",
                          false
                        ]),
                      /* [] */0
                    ], undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-block my-block--inactive", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with string modifier and boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, /* :: */[
                      /* String */Block.__(0, ["big"]),
                      /* :: */[
                        /* Boolean */Block.__(1, [
                            "active",
                            true
                          ]),
                        /* [] */0
                      ]
                    ], undefined, /* () */0);
                return Jest.Expect[/* toBe */2]("my-block my-block--big my-block--active", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        Jest.test("it should create classNames for block element and modifier with string modifier and boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", "element", /* :: */[
                      /* String */Block.__(0, ["big"]),
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
                return Jest.Expect[/* toBe */2]("my-block__element my-block__element--big my-block__element--active my-block__element--disable", Jest.Expect[/* expect */0](myBemClassNames));
              }));
        return Jest.test("it should create classNames for block and modifier with string modifier and others CSS", (function (param) {
                      var myBemClassNames = ReBemHelper.bem("my-block", undefined, /* :: */[
                            /* String */Block.__(0, ["big"]),
                            /* [] */0
                          ], "my-super-other-class", /* () */0);
                      return Jest.Expect[/* toBe */2]("my-block my-block--big my-super-other-class", Jest.Expect[/* expect */0](myBemClassNames));
                    }));
      }));

/*  Not a pure module */
