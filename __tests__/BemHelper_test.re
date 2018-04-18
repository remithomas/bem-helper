open Jest;
open Expect;
open BemHelper;

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

  test("it should create classNames for block and modifier with string modifier and boolean modifier", () => {
    let myBemClassNames = bem(~block="my-block", ~modifiers=[String("big"), Boolean("active", true)], ());
    let expectedClassName = "my-block my-block--big my-block--active";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });

  test("it should create classNames for block element and modifier with string modifier and boolean modifier", () => {
    let myBemClassNames = bem(~block="my-block", ~element="element", ~modifiers=[String("big"), Boolean("active", true)], ());
    let expectedClassName = "my-block__element my-block__element--big my-block__element--active";

    expect(myBemClassNames) |> toBe(expectedClassName);
  });
});
