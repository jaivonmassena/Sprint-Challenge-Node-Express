const express = require('express')
const router = express.Router()
const db = require('../data/helpers/actionModel.js')


router.get("/", (req, res) =>{
  db
    .get()
    .then(actions => {
      res.json(actions)
    })

})

router.get("/:id", (req, res)=>{
  const {id} = req.params
  db
    .get(id)
    .then(action => {
      res.json(action)
    })
    .catch(res.status(404).json({err: 'user does not exist' }))
})
router.post("/", (req, res)=>{
  // const projectInfo = req.body
  // const {project_id, description, notes } = req.body
  // const pids = []
  //
  // db
  //   .get()
  //   .then(projects => {
  //     projects.map()
  //   })

})
router.delete('/:id', (req, res) => {
  const { id } = req.params

  db
    .remove(id)
    .then(count => {
      if (count > 0) {
        db
          .get()
          .then(actions => {
            res.json(actions)
          })
          .error(error => {
            res.status(500).json(error)
          })
      } else {
        res.status(404).json({ message: `Project with that ${id}` })
      }
    })
    .catch(error => res.status(500).json(error))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  db
    .update(id, body)
    .then(updated => {
      if (updated === null) {
        res.status(400).json({ message: 'error' })
      } else {
        res.json(updated)
      }
    })
    .catch(error => res.status(500).json({message: 'error'}))
})


module.exports = router
