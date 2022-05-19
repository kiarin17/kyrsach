var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get("/", function(request, response)  {
   
    response.render("main");
});

app.get("/gallery", function(request, response)  {
   
    response.render("Галерея");
});

app.get("/menu", function(request, response)  {
   
    response.render("Меню");
});

app.get("/contacts", function(request, response)  {
   
    response.render("Контакты");
});

app.get("/reservation", function(request, response)  {
   
    response.render("Бронирование");
});

app.get("/cold", function(request, response)  {
   
    response.render("Холодные закуски");
});

app.get("/hot", function(request, response)  {
   
    response.render("Горячие блюда");
});

app.get("/desserts", function(request, response)  {
   
    response.render("Десерты");
});

app.get("/bar", function(request, response)  {
   
    response.render("Бар");
});