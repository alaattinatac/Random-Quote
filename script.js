let jim = 'Beware of what you become in pursuit of what you want. - Jim Rohn';
let epic = 'It\'s not what happens to you, but how you react to it that matters. - Epictetus';
let frank = 'The best revenge is massive success. - Frank Sinatra';
let wayne = 'You miss 100% of the shots you don\'t take. - Wayne Gretzy';
let nelson = 'Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela';
let elbert = 'Do not take life too seriously. You will not get out alive. - Elbert Hubbard';

let quote = [jim, epic, frank, wayne, nelson, elbert];
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function generateQuote() {
    let i = Math.floor(Math.random() * quote.length);
    let a = Math.floor(Math.random() * days.length);
    console.log(`Today is ${days[a]} and todays quote is: "${quote[i]}"`);
}
document.getElementById("btn").addEventListener("click", generateQuote);