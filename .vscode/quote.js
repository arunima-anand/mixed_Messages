var quotes = ['The journey of a thousand miles begins with one step. - Lao Tzu', 
'That which does not kill us makes us stronger. - Friedrich Nietzsche', 
'Life is what happens when you’re busy making other plans. - John Lennon',
'When the going gets tough, the tough get going. - Joe Kennedy',
'You only live once, but if you do it right, once is enough. - Mae West',
'Tough times never last but tough people do. - Robert H. Schuller', 
'Get busy living or get busy dying. - Stephen King',
'Whether you think you can or you think you can’t, you’re right. - Henry Ford',
'Tis better to have loved and lost than to have never loved at all - Alrded Lord Tennyson'
];

function newQuote()
{
    var randomNumber = Math.floor(Math.random() *quotes.length);
    document.getElementById('quote1').innerHTML = quotes[randomNumber];
}

