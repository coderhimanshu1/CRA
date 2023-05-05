import "./index.css";
import { choice, remove } from "./helpers";
import Fruits from "./Foods";

let fruit = choice(Fruits);
console.log(`I’d like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);
let remaining = remove(Fruits, `${fruit}`);
console.log(`I'm sorry, we're all out. We have ${remaining} left`);
