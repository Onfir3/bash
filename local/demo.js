
var fs = require('fs')

var dirName = process.argv[2]//传的参数是从第二个开始的
fs.mkdirSync("./" + dirName) //相当于mkdir $1
process.chdir("./" + dirName)//相当于cd $1
fs.mkdirSync('css') //相当于mkdir css
fs.mkdirSync('js') //相当于mkdir js
fs.writeFileSync("index.html","<!DOCTYPE> <title>Hello<title> <h1>HI</h1>")
fs.writeFileSync("css/style.css","hi {color:red}")
fs.writeFileSync("js/main.js","var string = 'Hello World' alert(string)")

process.exit(0)