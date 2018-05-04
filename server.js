const express = require('express')
const app = express();
const actions = require('./RouteHandlers/actionsroutes')
const projects = require('./RouteHandlers/projectroute');

app.use(express.json())


app.use('/api/actions', actions)
app.use('/api/projects', projects)


app.get('/', (req, res) => {
  res.send('API running')
})


app.listen(8000, () => console.log('\n== API Running on port 8000 ==\n'))
