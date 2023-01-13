const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const MatriculasController = require('../controllers/MatriculasController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.pegaUmaMatricula)
  .get('/pessoas/:estudanteId/matricula', MatriculasController.pegaUmaMatricula)
  .get('/pessoas/matricula/:turmaId/confirmadas', MatriculasController.pegaMatriculasPorTurma)
  .get('/pessoas/matricula/lotada', MatriculasController.pegaTurmasLotadas)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.atualizaMatricula)
  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:estudanteId/matricula', MatriculasController.criaMatricula)
  .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculasController.restauraMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.apagaMatricula)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)

module.exports = router