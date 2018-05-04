const express = require('express')
const db = require('../data/helpers/projectModel')
const router = express.Router()


router.get('/', (req, res) => {
    db
      .get()
      .then(users => {
          res.json(users)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    db
        .get(id)
        .then(users => {
            res.json(users)
        })

})

router.post('/', (req, res) => {
    const projectInfo = req.body

    db
        .insert(projectInfo)
        .then(response => {
            db
                .get()
                .then(users => {
                    res.json(users)
                })
        })

})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const update = req.body

    db
        .update(id, update)
        .then(response => {
            db.get()
                .then(users => {
                    res.json(users)
                })
        })

})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    db
        .remove(id)
        .then(response => {
            db.get()
                .then(users => {
                    res.json(users)
                })
        })

})

module.exports = router
