
type modifiersList = list((string, bool));


let join = (separator, strings) => {
  let rec run = (acc, strings) =>
    switch strings {
    | [] => acc
    | [x] => acc ++ x
    | [x, ...xs] when List.hd(xs) !== "" => run(acc ++ x ++ separator, xs)
    | [x, ...xs] when List.hd(xs) === "" => run(acc ++ x, xs)
    };
  run("", strings);
};

let getModifierClassNames = (modifiers, base) => {
  List.map(item => {
    let (modifier, value) = item;

    switch value {
    | true => base ++ "--" ++ modifier
    | false => ""
    }
  }, modifiers);
};

let bem = (~block: option(string)=?, ~element: option(string)=?, ~modifiers: option(modifiersList)=?, ()): string => {
  let classNames = switch (block, element, modifiers) {
  | (None, Some(element'), Some(modifiers')) => element' |> (className) => List.append([className], getModifierClassNames(modifiers', className))
  | (Some(block'), None, Some(modifiers')) => block' |> (className) => List.append([className], getModifierClassNames(modifiers', className))
  | (Some(block'), Some(element'), Some(modifiers')) => block' ++ "__" ++ element' |> (className) => List.append([className], getModifierClassNames(modifiers', className))
  | (Some(block'), Some(element'), None) => [block' ++ "__" ++ element'] 
  | (Some(block'), None, None) => [block']
  | (None, Some(element'), None) => [element']
  | (None, None, Some(_modifiers)) => []
  | (None, None, None) => []
  };

  join(" ", classNames);
};

let default = bem;
