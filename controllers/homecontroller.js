const db = require("../config/db.config");
const Sequelize = require("sequelize");

exports.menu = function (request, response){
    response.render("Меню.hbs");
};
exports.gallery = function(request, response){
    response.render("Галерея.hbs");
};

exports.contact = function (request, response) {
    response.render("Контакты.hbs");
};
exports.bron = function (request, response) {
    response.render("Бронирование.hbs");
};
exports.index = function (request, response) {
    response.render("main.hbs");
};

exports.cold = function (request, response) {
    response.render("cold.hbs");
};

exports.hot = function (request, response) {
    response.render("hot.hbs");
};

exports.desserts = function (request, response) {
    response.render("desserts.hbs");
};

exports.bar = function (request, response) {
    response.render("bar.hbs");
};

exports.request = function(request, response) {
    console.log("Пришли в метод");
    const name = request.body.name;
    const lastname = request.body.last_name;
    const middlename = request.body.middle_name;
    const birthday = request.body.birthday;
    const phone_number = request.body.phone_number;
    const email = request.body.email;
    const table_number = request.body.table_number;

    console.log("Готовы к созданию");

    
    db.order.create({
        name: name,
        lastname: lastname,
        middlename: middlename,
        birthday: birthday,
        phone_number: phone_number,
        email: email,
        table_number: table_number
    }).then(res=>{
        const order = {id: res.id, name: res.name}
        console.log(order);
        response.render("/bron.hbs");
    }).catch(err=>console.log(err));
}