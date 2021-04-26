const express = require('express')
const router = express.Router()
const History = require('../models/History')

// Getting all
router.get('/', async (req, res) => {
  try {
    const historys = await History.find()
    res.json(historys)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Creating one
router.post('/create', async (req, res) => {
    const history = new History({
      menu: req.body.menu,
      topping: req.body.topping,
      size: req.body.size,
      numberofglass: req.body.numberofglass,
      price: req.body.price
    })
    try {
        console.log(history)
      const newHistory = await history.save()
      res.status(201).json(newHistory)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

// Deleting One
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params
    try {
        const removed = await History.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router