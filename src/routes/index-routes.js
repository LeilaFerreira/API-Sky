const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const apiskyController = require('../controllers/apisky-Controller');

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'API Sky',
    version: '1.0.0'
  });
});



router.post('/cadastro', [
  check('email').isEmail(),
  check('senha').isLength({ min: 6 }).withMessage("senha precisa ter no minimo 6 caracteres.")
], apiskyController.createUser );

router.post('/auth', apiskyController.postAuth);
router.get('/listarUsuarios', apiskyController.get);
router.get('/buscarUsuario/:id', apiskyController.getId);
router.get('/buscarUsuarioNome/:nome', apiskyController.getNomeUsuario);
router.get('/excluirUsuario/:id', apiskyController.deleteUsuarios);

  module.exports = router;