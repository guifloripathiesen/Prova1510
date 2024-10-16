// Importar o express, para utilizar o Router
import express from 'express'
import {  criarVaga, listarVaga, listarVagaPorId, atualizarVaga, apagarVaga, listarVagaPorCargo, listarVagaPorLocalizacao } from '../controllers/vagasController.js'
const router = express.Router()

router.get('/vagas', listarVaga)
router.get('/vagas/:categoria', listarVagaPorId)
router.post('/vagas', criarVaga)
router.put('/vagas/:id', atualizarVaga)
router.delete('/vagas/:id', apagarVaga)
router.delete('/vagas/:id', apagarVaga)
router.get('/vagas/:categoria', listarVagaPorCargo)
router.get('/vagas/:categoria', listarVagaPorLocalizacao)
// Exportar o router pra importar no app
export default router