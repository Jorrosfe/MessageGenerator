//Define the parts of the message
const message = {
   sign : ['water', 'air', 'earth', 'fire', 'ice'],
   having : ['good luck', 'too much estress', 'bad day', 'back luck', 'good feelings', 'faith'],
   should : ['enjoy your life', 'expend more money', 'learn something new', 'go for adventure']
}

//Function that return a random value of the parameter arr
function randomValue(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

//messageArr will be an array of three elementes with the random values
let messageArr =[];

//loop in the elements of the object message and add a random value of each to the messageArr
for (el in message){
    switch (el) {
        case 'sign':
            messageArr.push('Your sign is: ' + randomValue(message[el]));
            break;
        case 'having':
            messageArr.push('Your are having ' + randomValue(message[el]));
            break;
        case 'should':
            messageArr.push('Your should ' + randomValue(message[el]));
            break;
        default:
            break;
    } 

}

//log to console the result adding the escape character \n to get a line break
console.log(messageArr.join('\n'));

//easier solution without loop
/*
console.log('Your sign is: ' + message.sign[Math.floor(Math.random()*message.sign.length)]);
console.log('Your are having ' + message.having[Math.floor(Math.random()*message.having.length)]);
console.log('Your should ' + message.should[Math.floor(Math.random()*message.should.length)]);
*/