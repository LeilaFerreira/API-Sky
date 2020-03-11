const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Id: {
        Type: Number,
    },
        nome: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefones: [
        {
            numero:
            {
                Type: Number,    
            },
            ddd:
            {
                Type: Number,    
            },
        }
    ]
          
});

module.exports = mongoose.model('Apisky', schema);