const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const del = require('del')
const browserSync = require('browser-sync').create()

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css',
  },
  html: {
    src: 'src/*.html',
    dest: 'dist/',
  },
  images: {
    src: 'src/images/**',
  },
  fonts: {
    src: 'src/fonts/**',
  },
  favicon: {
    rootIcon: 'src/favicon.ico',
    config: 'src/*.{xml,webmanifest}',
    icons: 'src/images/favicon/*.{png,svg}',
  },
  base: 'src',
  dest: 'dist',
}

// CSS task
const style = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on(
      'error',
      notify.onError(error => 'Problem here: ' + error.message)
    )
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())
}

// HTML task
const html = () => {
  return gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest)).pipe(browserSync.stream())
}

// BrowserSync Reload
const reload = done => {
  browserSync.reload()
  done()
}

// Watch files
const watch = () => {
  browserSync.init({
    server: {
      baseDir: paths.dest,
    },
    notify: false,
  })

  gulp.watch(paths.styles.src, style)
  gulp.watch(paths.html.src, html)
}

const clean = () => {
  return del(paths.dest)
}

const copy = () => {
  return gulp
    .src(
      [
        paths.images.src,
        paths.fonts.src,
        paths.favicon.rootIcon,
        paths.favicon.config,
        paths.favicon.icons,
      ],
      { base: paths.base }
    )
    .pipe(gulp.dest(paths.dest))
}

const build = gulp.series(clean, copy, style, html)

gulp.task('default', gulp.series(build, watch))

exports.watch = watch
exports.reload = reload
exports.style = style
exports.html = html
exports.clean = clean
exports.copy = copy
exports.build = build
