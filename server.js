const express = require('express')
const nunjucks = require('nunjucks')

const card = require('./data')
const about = require('./about')

const server = express()

server.use(express.static('public/css'))
server.use(express.static('public/img'))
server.use(express.static('public/js'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.listen(5000, () => {
    console.log('server running')
})

// Rotas
server.get("/", (req, res) => res.render("index", { cards: card }))
server.get("/about", (req, res) => res.render("about", { items: about }))
server.get("/recipe", (req, res) => res.render("recipe", { cards: card }))