import { Noticias } from './noticias.js';
const noticia = new Noticias();
let searchQ = '';
// noticia.getTopNews('us').then(response => {
//     let news = response.data;
//     console.log(news);
// }).catch(err => {
//     console.log('news error1: ' + err);
// })
document.getElementById('search').addEventListener('change', function () {
    searchQ = $(this).val().toString();
    if (searchQ != null) {
        $('#btnSubmit').removeAttr('disabled');
    }
    console.log(searchQ);
});
if (searchQ != null) {
    $('#btnSubmit').removeAttr('disabled');
    document.getElementById('btnSubmit').addEventListener('click', function (e) {
        e.preventDefault();
        noticia.getNewsQuery(searchQ.toString()).then(response => {
            const news = response.data;
            console.log(news);
            // get articles
            let articles = news.articles;
            console.log(articles);
            let templateSource = $('#entry-template').html();
            let template = Handlebars.compile(templateSource);
            $('.row').html(template(news));
        }).catch(err => {
            let templateSource = $('#entry-template').html();
            let template = Handlebars.compile(templateSource);
            $('.row').html(template({ title: 'Error', description: 'No hay resultados para tu búsqueda' }));
            console.log('news error: ' + err);
        });
    });
}
jQuery(document).ready(function () {
    $('#btnSubmit').prop('disabled', true);
});
