const express = require("express")
const router = express.Router()
const pokemons = require("./data")

router.get("/pokemons", function (req, res) {
  res.json(pokemons)
})

router.get("/pokemons/:name", function (req, res) {
  const { name } = req.params
  res.json(pokemons[name] || null)
})

router.post("/pokemons", function (req, res) {
  const { name } = req.body
  pokemons[name] = req.body
  res.redirect("/pokemons")
})

router.delete("/pokemons/:name", function (req, res) {
  const { name } = req.params
  delete pokemons[name]
  res.redirect("/pokemons")
})

module.exports = router
