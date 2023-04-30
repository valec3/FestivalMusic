const { series, src, dest, watch }= require("gulp");
const sass = require('gulp-sass')(require('dart-sass'));
const imagemin = require('gulp-imagemin')
const notify = require("gulp-notify");
const webp = require("gulp-webp");

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

function images(){
    return src("src/img/**/*")
        .pipe(imagemin())
        .pipe(dest("./build/img"))
}

function verWebp(){
    return src("src/img/**/*")
        .pipe(webp())
        .pipe(dest("./build/img"))
        .pipe(notify({message:"Version webp lista"}))
}

function watchFiles(){
    watch("src/scss/**/*.scss",compilarSASS);
}



exports.compilarSASS=compilarSASS;
exports.minificarCSS=minificarCSS;
exports.images=images;
exports.watchFiles=watchFiles;
exports.verWebp=verWebp;
// exports.default= series(compilarSASS,webp,watchFiles);