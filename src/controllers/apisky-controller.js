const mongoose = require('mongoose');
const ApiskyModel = mongoose.model('Apisky');


// list
exports.listUser = async (req, res) => {
  try {
    const data = await ApiskyModel.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar usuario.'});
  }
};

// create
exports.createUser = async (req, res) => {
  try {
    const apisky = new ApiskyModel(req.body);
   
    console.log("apisky")

   await apisky.save();

    res.status(201).send({message: 'Salvo com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar.' + e });
  }
};