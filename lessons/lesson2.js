
let str = 'hello,dear.friend! nice,to.see you!'
//final output should be -> hello dear friend! nice to see you!
//replace each dot and comma with space
//Using for loop

//Using for loop
for (let i = 0; i < str.length; i++) {
 if (str[i] === ',' || str[i] === '.') {
    // str = str.slice(0, i) + ' ' + str.slice(i + 1);
 }
}

console.log(str);

let finalStr = '';

for (let char of str) {
 if (char !== ',' && char !== '.') {
    finalStr += char;
 } else {
    finalStr += ' ';
 }
}

console.log("using for..loop -> ",finalStr);
