type modifier =
    String(string)
  | Boolean(string, bool)
  | Switch(string, string, bool);
type modifiersList = list(modifier);

let bem:
  (~block: string=?, ~element: string=?, ~modifiers: modifiersList=?,
  ~others: string=?, unit) => string;
let default:
  (~block: string=?, ~element: string=?, ~modifiers: modifiersList=?,
  ~others: string=?, unit) => string;
