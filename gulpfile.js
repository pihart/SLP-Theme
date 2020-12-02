"use strict";

const fs = require("fs");

const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const gulp = require("gulp");
const header = require("gulp-header");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const uglify = require("gulp-terser");

const css = () =>
  gulp
    .src("./slp.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest((file) => file.base));

const js = () =>
  gulp
    .src("./SLPTheme.js")
    .pipe(
      replace(/{{ aviReplace (.+?) }}/gs, (_, $1) =>
        fs.readFileSync($1).toString()
      )
    )
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest((file) => file.base));

const bookmark = () =>
  gulp
    .src("./SLPTheme.min.js")
    .pipe(header("javascript:"))
    .pipe(rename("bookmark.txt"))
    .pipe(gulp.dest((file) => file.base));

const jsVersionJS = () =>
  gulp
    .src(["./colorMaps.js", "./main.js"])
    .pipe(concat("jsVersion.min.js"))
    .pipe(
      replace(/{{ aviReplace (.+?) }}/gs, (_, $1) =>
        fs.readFileSync($1).toString()
      )
    )
    .pipe(uglify())
    .pipe(gulp.dest("."));

const jsVerisonBookmark = () =>
  gulp
    .src("./jsVersion.min.js")
    .pipe(header("javascript:"))
    .pipe(rename("bookmarkjs.txt"))
    .pipe(gulp.dest((file) => file.base));

const build = gulp.series(css, js, bookmark);

exports.jsVersion = gulp.series(jsVersionJS, jsVerisonBookmark);
exports.build = build;
exports.default = build;
