const express = require('express')

const server = express()

server.use(express.json())

const cursos = ['Backend', 'Frontend', 'Fullstack']

// CRUD - create, read, update and delete

// retorna um cursos(read)
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params

  return res.json(cursos[index])
})

//retorna todos os cursos(read)
server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

// criar um novo curso(creater)
server.post('/cursos', (req, res) => {
  const { name } = req.body
  cursos.push(name)

  return res.json(cursos)
})

// atualizar um curso(update)
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body

  cursos[index] = name

  return res.json(cursos)
})

// deletar algum curso(delete)
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params

  cursos.splice(index, 1)
  return res.json({ message: 'O cursos foi deletado' })
})

server.listen(3000)
