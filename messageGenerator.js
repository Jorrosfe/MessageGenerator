const message = {
   sign : ['water', 'air', 'earth', 'fire', 'ice'],
   having : ['good luck', 'too much estress', 'bad day', 'back luck', 'good feelings', 'faith'],
   should : ['enjoy your life', 'expend more money', 'learn something new', 'go for adventure']
}
console.log('Your sign is: ' + message.sign[Math.floor(Math.random()*message.sign.length)]);
console.log('Your are having ' + message.having[Math.floor(Math.random()*message.having.length)]);
console.log('Your should ' + message.should[Math.floor(Math.random()*message.should.length)]);
