const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// Setting the flag to "a" will make it append to the existing file instead of overwriting
writeFileSync('./content/result-sync.txt', 
            `Here is the result ${first}, ${second}`,
            {
                flag:'a'
            }
);