import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Vaga = sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING    
    },
    descricao: {
        type: DataTypes.STRING    
    },
    cargo: {
        type: DataTypes.STRING    
    },
    cidade: {
        type: DataTypes.STRING    
    },
    cidade: {
        type: DataTypes.STRING    
    },
}, {
    createdAt: false, updatedAt: false, tableName: 'filmes'
})

export { Vaga }