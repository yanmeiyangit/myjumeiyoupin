var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minfyCss = require("gulp-minify-css");
var imagemin = require("gulp-imagemin");

//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html").pipe(gulp.dest("D:\\PHPTutorial\\WWW\\myjumeiyoupin"));
});
gulp.task("css",function(){
	gulp.src('css/**/*')
	.pipe(gulp.dest('D:\\PHPTutorial\\WWW\\myjumeiyoupin\\css'));
});

gulp.task("img",function(){
	gulp.src('img/**/*')
	.pipe(gulp.dest('D:\\PHPTutorial\\WWW\\myjumeiyoupin\\img'));
});
gulp.task("logimg",function(){
	gulp.src('logimg/**/*')
	.pipe(gulp.dest('D:\\PHPTutorial\\WWW\\myjumeiyoupin\\img'));
});

gulp.task("build",["copy-html","css","img","logimg"],function(){
	console.log("ok");
});
gulp.task('copyallfile',function(){
	gulp.src('*/**/*')
	.pipe(gulp.dest('D:\\PHPTutorial\\WWW\\myjumeiyoupin'));
});

//监听
gulp.task("watchall",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/**/*",["css"]);
	gulp.watch("img/**/*",["img"]);
	gulp.watch("logimg/**/*",["logimg"]);
	
});
