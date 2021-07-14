
window.addEventListener('DOMContentLoaded' , function() {

    let data;
    let time = '12:50' ;
    let where = 'SAPPORO';

    data = where+time;

    let html = '<tr><th>' + time + '</th><th>' + where + '</th></hr>';

    document.querySelector('#output').innerHTML = html ;

});