var express=require("express");
var app=express();

app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});
app.get("/products",function(req,res){
	res.render("product");
});
app.listen(3000,function(){
	console.log("server is listening ");
});

/*at first   in your windows command Prompt*/

/*    C:Users\win7\Desktop\ctelaEjs>npm init              */
/*     >npm install express --save                               */
/*     >npm install ejs --save                                       */
/*     >node app.js                                                     */
/*     check the output in your localhst:3000                 */
