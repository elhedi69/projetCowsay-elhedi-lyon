const dotenv = require("dotenv").config();
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${process.env.MY_NAME} from ${process.env.MY_CAMPUS}`,
    e : "oO",
    T : "U "
}));
