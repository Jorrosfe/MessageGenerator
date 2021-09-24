const sign = ['water', 'air', 'earth', 'fire', 'ice'];
const having = ['good luck', 'too much estress', 'bad day', 'back luck', 'good feelings', 'faith'];
const should = ['enjoy your life', 'expend more money', 'learn something new', 'go for adventure'];

console.log('Your sign is: ' + sign[Math.floor(Math.random()*sign.length)]);
console.log('Your are having ' + having[Math.floor(Math.random()*having.length)]);
console.log('Your should ' + should[Math.floor(Math.random()*should.length)]);
