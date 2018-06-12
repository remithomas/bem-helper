open ReBemHelper;

/* Write class names: my-block my-block--active */
let isActive = true;
let myActiveBemClassNames = bem(~block="my-block", ~modifiers=[Boolean("active", isActive)], ());

/* Write class names: my-block my-block--small */
let mySizeBemClassNames = bem(~block="my-block", ~modifiers=[String("small")], ());

/* Write class names: my-block my-block--active my-block--small */
let mySizeBemClassNames = bem(
  ~block="my-block",
  ~modifiers=[
    String("small"),
    Boolean("active", isActive)
  ],
  ()
);

/* Write class names: my-block__element my-block__element--small */
let mySizeBemClassNames = bem(~block="my-block", ~element="element", ~modifiers=[String("small")], ());

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

/* Write class names: my-block__element my-block__element--small some-other-class */
let mySizeBemClassNames = bem(~block="my-block", ~element="element", ~modifiers=[String("small")], ~others="some-other-class", ());
