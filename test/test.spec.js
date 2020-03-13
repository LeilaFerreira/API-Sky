const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

const index = require('../src/models/apisky'); // Arquivo a ser testado

chai.use(http);
chai.use(subSet);

// O atributo do objeto será testado para verificar se ele existe
// O atributo recebe uma função, e ela deve retornar true para o teste passar
const usuarioSchema = {
    nome: nome => nome,
   
    
};

describe('Teste das funcoes', () => {

    it('addUsuario', () => {
        const usuario = index.addUsuario('leila');

        // Verifica se as caracteristicas do objeto usuario é igual ao usuarioSchema
        chai.expect(usuario).to.containSubset(usuarioSchema);
    });
    it('getUsuarios', () => {

        index.addUsuario('le');
        index.addUsuario('lili');
        const usuarios = index.getUsuarios();
        
        chai.expect(usuarios.length).to.be.equals(3);
        // Primeiro se verifica se está retornando um array
        // Verifica se as caracteristicas dos objetos no array é igual ao UsuarioSchema
        chai.expect(alunos).to.containSubset([usuarioSchema]);
    });

});
