const gulp = require('gulp');
constsource = require("vinyl-source-stream");
const sass = require('gulp-sass')(require('sass'));
const tsc = require('gulp-typescript');

gulp.task('styles', function () {
    // pipe nos permite agregar colas de tareas
    return gulp.src('src/sass/**/*.scss') // fuente de donde vienen los archivos fuente
        .pipe(sass()) // proceso de transformación
        .pipe(gulp.dest('assets/styles')); // dónde los queremos guardar
});

gulp.task('scripts', function () {
    const configFile = tsc.createProject('tsconfig.json'); // ya existe nuestro archivo de configuración
    return configFile.src() // fuente de donde vienen los archivos fuente
        .pipe(configFile()) // proceso de transformación
        .pipe(gulp.dest('assets/scripts')); // dónde los queremos guardar
});

// npm run serve
gulp.task('serve', function (done) {
    // para correr todas las funciones
    const allTasks = gulp.parallel('styles:watch', 'scripts:watch');
    allTasks();
    done();
});

// para estar escuchando cada que hay un cambio y no tener que correr el cmd
// nodemon de scripts
gulp.task('scripts:watch', gulp.series('scripts', function (done) {
    // cada que se detecten cambios aquí, se corre el watch:
    // cuando se escuchen cambios, ejecutamos la tarea scripts
    gulp.watch('src/scripts/**/*.ts', gulp.series('scripts'));
    done();
}));

gulp.task('styles:watch', gulp.series('styles', function (done) {
    // cada que se detecten cambios aquí, se corre el watch:
    // cuando se escuchen cambios, ejecutamos la tarea scripts
    gulp.watch('src/styles/**/*.ts', gulp.series('styles'));
    done();
}));

// el parallel/series nos permite decirle el orden en que se ejecute todo
gulp.task('default', gulp.parallel('styles', 'scripts', function (done) {
    console.log('hey, u');
    done();
}));
