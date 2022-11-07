const routes = require("express").Router();

routes.get('/', (req, res) => {
    return res.json({
        data: "a"
    })
})

module.exports = routes;