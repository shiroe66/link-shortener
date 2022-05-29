const express = require("express")
const router = express.Router()

router.post("/short", (req, res) => {
  const { link } = req.body
})

router.get("/:code", (req, res) => {})

module.exports = router
