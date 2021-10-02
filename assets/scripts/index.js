let Noticias = require('./noticias');
// let myVar = require('./help');
const noticia = new Noticias();
let Handlebars = require('handlebars');
// const templateSource = document.getElementById('entry-template').innerHTML;
// const template = Handlebars.compile(templateSource);
// document.getElementById('news-container').innerHTML = template({
//     news: news
// });
noticia.getTopNews('us').then(response => {
    let news = response.data;
    // get articles
    let articles = news.articles;
    console.log(articles);
    articles.forEach(a => {
        // let templateSource = document.getElementById('entry-template').innerHTML;
        // let template = Handlebars.compile(templateSource);
        // let context = { title: a.title, body: a.description };
        // let html = template(context);
    });
}).catch(err => {
    console.log('news error: ' + err);
});
// noticia.getNewsQuery('bitcoin').then(response => {
//     const news = response.data;
//     console.log(news);
// }).catch(err => {
//     console.log('news error: ' + err);
// })
