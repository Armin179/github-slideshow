let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.pop();
secretMessage.push('to')

let changeWord = secretMessage.indexOf('easily');
secretMessage[changeWord] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');

let removeElement = secretMessage.indexOf('get');
let removeLastEl = secretMessage.indexOf('time');
console.log(removeElement);
console.log(removeLastEl);
let deletePoints = removeLastEl - removeElement + 1;
secretMessage.splice(removeElement, deletePoints, 'know');

console.log(secretMessage.join(' '));
