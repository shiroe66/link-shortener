const express = require("express")
const shortid = require("shortid")
const router = express.Router()
const Link = require("../models/link")

router.post("/short", async (req, res) => {
  const { link } = req.body

  try {
    const url = await Link.findOne({ link })

    if (url) {
      return res.json(url)
    }

    const code = shortid.generate()
    const shortURL = `localhost:3000/links/${code}`

    url = new Link({
      code,
      source: link,
      short: shortURL,
    })
    await url.save()
    return res.json(url)
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: e,
    })
  }
})

router.get("/:code", (req, res) => {})

module.exports = router
