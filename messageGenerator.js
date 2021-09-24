const message = {
   sign : ['water', 'air', 'earth', 'fire', 'ice'],
   having : ['good luck', 'too much estress', 'bad day', 'back luck', 'good feelings', 'faith'],
   should : ['enjoy your life', 'expend more money', 'learn something new', 'go for adventure']
}

function randomValue(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

let messageArr =[];

for (el in message){
    console.log(el);
    switch (el) {
        case 'sign':
            messageArr.push(randomValue(message[el]));
            break;
        case 'having':
            messageArr.push(randomValue(message[el]));
            break;
        case 'should':
            messageArr.push(randomValue(message[el]));
            break;
        default:
            break;
    } 

}

console.log(messageArr);

console.log('Your sign is: ' + message.sign[Math.floor(Math.random()*message.sign.length)]);
console.log('Your are having ' + message.having[Math.floor(Math.random()*message.having.length)]);
console.log('Your should ' + message.should[Math.floor(Math.random()*message.should.length)]);
