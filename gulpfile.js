const { src, dest, watch, parallel } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

const paths = {
    styles: {
        src: "styles/course/*.scss",
        dest: "styles/",
    },
    html: {
        src: "pages/*.html",
    },
};

function styles() {
    // Импортирует сжатую версию в CSS
    return src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
        .pipe(concat("course.css"))
        .pipe(scss({ outputStyle: "compressed" }))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// таск для просмотра исходника проекта
function browsersync() {
    browserSync.init({
        server: {
            baseDir: "pages/",
        },
    });
}

// Таск для отслеживания изменений в файлах проекта
function watching() {
    watch([paths.styles.src], styles);
    watch([paths.html.src]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;

exports.default = parallel(styles, browsersync, watching);
