const express = require("express");
const controller = require("../controllers/homecontroller.js");
const router = express.Router();

router.use("/bron", controller.bron);
router.use("/contact", controller.contact);
router.use("/menu", controller.menu);
router.use("/gallery", controller.gallery);
router.use("/cold", controller.cold);
router.use("/hot", controller.hot);
router.use("/desserts", controller.desserts);
router.use("/bar", controller.bar);

const urlencodedParser = express.urlencoded({extended: false});

router.get("/", controller.index);
router.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});






module.exports = router;