const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const router = require("./router")
app.use(router)

router.get("/", (req, res) => {
  res.redirect("/pokemons")
})

app.listen(8080, () => console.log("server up on http://localhost:8080"))
