import express from 'express'
import { isUuid } from 'uuidv4'

const app = express()
const PORT = 3000

interface INotes{
  title: string,
  description: string
}

const notes:Array<INotes>  = []

app.use(express.static('www'))

// metodo GET: lista todas as anotações
app.get('/notes', (req, res) => {
  const s = isUuid
  res.json(s)
})

// metodo POST: cria um nova anotação
app.post('/notes', (req, res)=>{
  // const title = req.body.title
  // const description = req.body.description

//   if(!title){
//     return res.status(400).json({message: 'Informe o campo  title!'})
//   }

//   if(!description){
//     return res.status(400).json({ message: 'Informe  o campo  description'})
//   }

 

})





app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
})
