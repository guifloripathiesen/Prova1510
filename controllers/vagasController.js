// Importar a conexão do banco de dados
import { Vaga } from "../models/Vaga.js"

const criarVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade  } = req.body
        if (!titulo || !descricao || !cargo || !cidade) {
            // Faltam dados
            return res.status(404).send({ mensagem: 'Favor informar titulo, descricao, cargo, cidade' })
        }

        // Montar comando de INSERT
        // await conexao.query(`INSERT INTO filmes (titulo, categoria) VALUES ('${titulo}', '${categoria}')`)
        const vaga = await Vaga.create({ titulo, descricao, cargo, cidade  })

        res.status(201).send({ vaga })

    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVaga = async (req, res) => {
    try {
        // Rodar um comando de SELECT no banco de dados
        const resultado = await Vaga.findAll()
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagaPorDescricao= async (req, res) => {
    try {
        const Id = req.params.Id
        // const { categoria } = req.params
        // Rodar um comando de SELECT no banco de dados
        // const resultado = await conexao.query(`SELECT * FROM filmes WHERE categoria = '${categoria}'`)
        const resultado = await Vaga.findAll({ where: { Id }})
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagaPorId= async (req, res) => {
    try {
        const Id = req.params.Id
        // const { categoria } = req.params
        // Rodar um comando de SELECT no banco de dados
        // const resultado = await conexao.query(`SELECT * FROM filmes WHERE categoria = '${categoria}'`)
        const resultado = await Vaga.findAll({ where: { Id }})
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagaPorCargo= async (req, res) => {
    try {
        const Id = req.params.Id
        // const { categoria } = req.params
        // Rodar um comando de SELECT no banco de dados
        // const resultado = await conexao.query(`SELECT * FROM filmes WHERE categoria = '${categoria}'`)
        const resultado = await Vaga.findAll({ where: { Id }})
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagaPorLocalizacao= async (req, res) => {
    try {
        const Id = req.params.Id
        // const { categoria } = req.params
        // Rodar um comando de SELECT no banco de dados
        // const resultado = await conexao.query(`SELECT * FROM filmes WHERE categoria = '${categoria}'`)
        const resultado = await Vaga.findAll({ where: { Id }})
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}
const atualizarVaga = async (req, res) => {
    try {
        const id = req.params.id
        const { titulo, descricao, cargo, cidade  } = req.body
        // const resultado = await conexao.query(`UPDATE filmes SET titulo = '${titulo}', categoria = '${categoria}' WHERE id = ${id}`)
        const resultado = await Filme.update({ titulo, descricao, cargo, cidade  }, { where: { id } })
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const apagarVaga = async (req, res) => {
    try {
        const id = req.params.id
        // await conexao.query(`DELETE FROM filmes WHERE id = ${id}`)
        await Vaga.destroy({ where: { id }})
        res.status(200).send({ mensagem: 'Filme apagado com sucesso' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

// Exportar controllers para importar nas rotas
export { criarVaga, listarVagaPorLocalizacao, listarVagaPorCargo, listarVagaPorId, listarVaga, listarVagaPorDescricao, atualizarVaga, apagarVaga }