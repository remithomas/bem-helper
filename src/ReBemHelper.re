type modifier =
  | String(string)
  | Boolean(string, bool)
  | Switch(string, string, bool);

type modifiersList = list(modifier);

let join = (separator, strings) => {
  String.concat(separator, strings) |> String.trim;
};

let getModifierClassNames = (modifiers, base) => {
  List.map(item => {
    switch item {
    | String(modifier') => base ++ "--" ++ modifier'
    | Boolean(modifier', true) => base ++ "--" ++ modifier'
    | Boolean(_modifier', false) => ""
    | Switch(active, _inactive, true) => base ++ "--" ++ active
    | Switch(_active, inactive, false) => base ++ "--" ++ inactive
    };
  }, modifiers);
};

let bem = (
  ~block: option(string)=?,
  ~element: option(string)=?,
  ~modifiers: option(modifiersList)=?,
  ~others = "",
  ()
): string => {
  let classNames = switch (block, element, modifiers) {
  | (None, Some(element'), Some(modifiers'))
    => element' 
    |> (className) => List.append([className], getModifierClassNames(modifiers', className))
  | (Some(block'), None, Some(modifiers'))
    => block' 
    |> (className) => List.append([className], getModifierClassNames(modifiers', className))
  | (Some(block'), Some(element'), Some(modifiers'))
    => block' ++ "__" ++ element' 
    |> (className) => List.append([className], getModifierClassNames(modifiers', className))
  | (Some(block'), Some(element'), None) 
    => [block' ++ "__" ++ element'] 
  | (Some(block'), None, None) 
    => [block']
  | (None, Some(element'), None) 
    => [element']
  | (None, None, Some(_modifiers)) => []
  | (None, None, None) => []
  };

  let bemClasses = List.append(classNames, [others]);

  join(" ", bemClasses);
};

let default = bem;
