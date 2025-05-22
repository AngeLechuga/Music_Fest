// -- extraer sass desde el gulp
import { src, dest } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);


// -- compilar Sass
export function css(done) {
    // -- ubicanco archivo
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
    
    done();
}
/* export function hola( done ) {
    console.log('Hola desde gulpfile.js');

    done();
}; */