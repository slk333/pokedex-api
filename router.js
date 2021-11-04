const express = require("express")
const router = express.Router()
const { pokemons, pokemonNameList } = require("./data")

router.get("/pokemons", function (req, res) {
  res.json(pokemons)
})

router.get("/pokemons/:name", function (req, res) {
  const { name } = req.params
  res.json(pokemons[name] || null)
})

router.post("/pokemons", function (req, res) {
  const { name } = req.body
  if (pokemonNameList.includes(name.toLowerCase())) {
    pokemons[name] = req.body
    res.send("ok")
  } else {
    res.status(400).json({ message: "this pokemon doesn't exist!" })
  }
})

router.delete("/pokemons", function (req, res) {
  Object.keys(pokemons).map(key => {
    delete pokemons[key]
  })
  res.send("deleted all")
})

router.delete("/pokemons/:name", function (req, res) {
  const { name } = req.params
  delete pokemons[name]
  res.send("deleted one")
})

module.exports = router
