const { series, src, dest, watch }= require("gulp");
const sass = require('gulp-sass')(require('dart-sass'));

// Funcion que compila SASS
function compilarSASS(){
    return src("src/scss/app.scss")
        .pipe( sass({
            outputStyle:'expanded',
            indentWidth: 4
        }) )
        .pipe( dest("./build/css") )    
}
function minificarCSS(){
    return src("src/scss/app.scss")
        .pipe( sass({
            outputStyle:'compressed',
        }) )
        .pipe( dest("./build/css") )    
}

function watchFiles(){
    watch("src/scss/**/*.scss",compilarSASS);
}



exports.compilarSASS=compilarSASS;
exports.minificarCSS=minificarCSS;
exports.watchFiles=watchFiles;