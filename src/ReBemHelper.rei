type modifier = String(string) | Boolean(string, bool);
type modifiersList = list(modifier);
let join: (string, list(string)) => string;
let getModifierClassNames: (list(modifier), string) => list(string);
let bem:
  (~block: string=?, ~element: string=?, ~modifiers: modifiersList=?,
  unit) => string;
let default:
  (~block: string=?, ~element: string=?, ~modifiers: modifiersList=?,
  unit) => string;
