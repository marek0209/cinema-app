var Movie = require('../models/movie-model');

var movies = [new Movie({
    name:'Ad Astra',
        description:'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.' ,
        releaseDate:'2019',
        orign:'en',
        time:'2 godziny 2 min' ,
        imgSrc:'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',
        seanses:[{
            day:'02.01.2020',
            hours:  ['17:00', '19:00', '21:00']
        }]
}),
new Movie({
    name:'Ad Astra',
        description:'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.' ,
        releaseDate:'2019',
        orign:'en',
        time:'2 godziny 2 min' ,
        imgSrc:'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',
        seanses:[{
            day:'02.01.2020',
            hours:  ['17:00', '19:00', '21:00']
        }]
}),
new Movie({
    name:'Ad Astra',
        description:'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.' ,
        releaseDate:'2019',
        orign:'en',
        time:'2 godziny 2 min' ,
        imgSrc:'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',
        seanses:[{
            day:'02.01.2020',
            hours:  ['17:00', '19:00', '21:00']
        }]
})
];

var done = 0;

for (var i=0; i< movies.length;i++){
    movies[i].save(function(err, result){
        done++;
        if (done === movies.length){
            exit();
        }
    });
}
function exit(){
mongose.disconnect();
}