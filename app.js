// Inicialização do servidor
import express from 'express'
// Importar arquivo de rotas
import vagasRoutes from './routes/vagasRoutes.js'
import sequelize from './database.js'

// try{
// await sequelize.sync()
// console.log('sincronizou')
// }catch(err){
//     console.log(err)
//     console.log('erro ao sincronizador')

// }
const app = express()

// Permitir que a API receba JSON (substitui o body-parser)
app.use(express.json())
app.use(vagasRoutes)

app.listen(5000, () => console.log('Servidor rodando'))