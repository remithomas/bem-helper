open Jest;
open Expect;
open ReBemHelper;

describe("BEM helper", () => {
  test("it should create a className for block", () => {
    let myBemClassNames = bem(~block="my-block", ());
    let expectedClassName = "my-block";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create a className for element", () => {
    let myBemClassNames = bem(~element="my-element", ());
    let expectedClassName = "my-element";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block and element", () => {
    let myBemClassNames = bem(~block="my-block", ~element="element", ());
    let expectedClassName = "my-block__element";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block and modifier with truthly boolean modifier", () => {
    let isActive = true;
    let myBemClassNames = bem(~block="my-block", ~modifiers=[Boolean("active", isActive)], ());
    let expectedClassName = "my-block my-block--active";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block and modifier with falsy boolean modifier", () => {
    let isActive = false;
    let myBemClassNames = bem(~block="my-block", ~modifiers=[Boolean("active", isActive)], ());
    let expectedClassName = "my-block";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });
  
  test("it should create classNames for block and modifier with string modifier", () => {
    let myBemClassNames = bem(~block="my-block", ~modifiers=[String("big")], ());
    let expectedClassName = "my-block my-block--big";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block and modifier with switch modifier", () => {
    let isActive = false;
    let myBemClassNames = bem(~block="my-block", ~modifiers=[Switch("active", "inactive", isActive)], ());
    let expectedClassName = "my-block my-block--inactive";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block and modifier with string modifier and boolean modifier", () => {
    let myBemClassNames = bem(~block="my-block", ~modifiers=[String("big"), Boolean("active", true)], ());
    let expectedClassName = "my-block my-block--big my-block--active";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block element and modifier with string modifier and boolean modifier", () => {
    let myBemClassNames = bem(
      ~block="my-block",
      ~element="element",
      ~modifiers=[
        String("big"),
        Boolean("active", true),
        Switch("enable", "disable", false)
      ],
      ()
    );
    let expectedClassName = "my-block__element my-block__element--big my-block__element--active my-block__element--disable";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block and modifier with string modifier and others CSS", () => {
    let myBemClassNames = bem(
      ~block="my-block",
      ~modifiers=[String("big")],
      ~others="my-super-other-class",
      ()
    );
    let expectedClassName = "my-block my-block--big my-super-other-class";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });
});
