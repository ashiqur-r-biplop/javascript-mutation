import { produce } from "immer";
let demonSlayers = [
  "Tanjiro",
  "Rengoku",
  "Tengen", 
  "Opennai",
  "Mitsuri",
  "Shinobu",
];

demonSlayers.push("Zenetsu"); 

const nextState = produce(demonSlayers, (draft) => {
  draft.push("Zenetsu");
});
console.log(demonSlayers);
console.log(nextState);