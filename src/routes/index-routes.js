const express = require('express');
const router = express.Router();
const apiskyController = require('../controllers/apisky-Controller');

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'API Sky',
    version: '1.0.0'
  });
});
router.get('/listar', apiskyController.listUser);
router.post('/cadastro', apiskyController.createUser);

module.exports = router;