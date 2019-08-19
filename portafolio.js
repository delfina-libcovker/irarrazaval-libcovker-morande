var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Descripción de la imagen",
    title: "Pass",
    about: "Texto simulado de descripción de primer trabajo"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Esquilarte",
    about: "Texto simulado de descripción de segundo trabajo"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "PAD",
    about: "Texto simulado de descripción de tercer trabajo"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Kurve",
    about: "Texto simulado de descripción de cuarto trabajo"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "OXOFLEX",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "África",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
  figure: "media/trabajo-07-materiales.jpg",
  alt: "Descripción de la imagen",
  title: "Loconta.wer",
  about: "Texto simulado de descripción de séptimo trabajo"
}, {
  figure: "media/trabajo-07-materiales.jpg",
  alt: "Descripción de la imagen",
  title: "Conalma",
  about: "Texto simulado de descripción de séptimo trabajo"
}, {
  figure: "media/trabajo-07-materiales.jpg",
  alt: "Descripción de la imagen",
  title: "Alba",
  about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
