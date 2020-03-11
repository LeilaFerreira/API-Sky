const mongoose = require('mongoose');
const ApiskyModel = mongoose.model('Apisky');

// list
exports.listMentions = async (req, res) => {
  try {
    const data = await Mentions.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// create
exports.createMention = async (req, res) => {
  try {
    const apisky = new ApiskyModel({
      nome= req.body.nome,
      email= req.body.email,
      senha= req.body.senha,
    //   telefones.numero = req.body.telefone.numero,
    //   telefones.ddd = req.body.telefone.ddd,
    });

    console.log(mention)

    await mention.save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};