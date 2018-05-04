const express = require('express')
const app = express();
const actions = require('./RouteHandlers/actionsroutes')

app.use(express.json())


app.use('/api/actions', actions)

app.get('/', (req, res) => {
  res.send('API running')
})


app.listen(8000, () => console.log('\n== API Running on port 8000 ==\n'))
