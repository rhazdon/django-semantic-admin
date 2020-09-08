const { src, dest, series, watch} = require("gulp");
const cleanCSS = require("gulp-clean-css");
const concatCss = require("gulp-concat-css");
const merge = require("merge-stream");
const uglify = require("gulp-uglify");

const CSS_DIRECTORY = "./semantic_admin/static/django-semantic-admin/css/"
const JS_DIRECTORY = "./semantic_admin/static/django-semantic-admin/js/"

const VENDOR_CSS = "vendor.css"

function vendorCSS() {
    return merge(
        src("./node_modules/semantic-ui-css/themes/default/assets/fonts/*")
            .pipe(dest(CSS_DIRECTORY + "themes/default/assets/fonts/")),
        src("./node_modules/semantic-ui-css/themes/default/assets/images/*")
            .pipe(dest(CSS_DIRECTORY + "themes/default/assets/images/")),
        src("./node_modules/semantic-ui-css/semantic.css")
            .pipe(cleanCSS())
            .pipe(concatCss(VENDOR_CSS), { rebaseUrls: false})
            .pipe(cleanCSS())
            .pipe(dest(CSS_DIRECTORY))
    )
}

function vendorJS() {
    return merge(
        src("./node_modules/jquery/dist/jquery.js")
            .pipe(uglify())
            .pipe(dest(JS_DIRECTORY)),
        src("./node_modules/semantic-ui-css/semantic.js")
            .pipe(uglify())
            .pipe(dest(JS_DIRECTORY))
    )
}

exports.default = series(vendorCSS, vendorJS);
