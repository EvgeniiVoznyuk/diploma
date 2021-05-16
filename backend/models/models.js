const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Participant = sequelize.define('participant', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING },
  secondName: { type: DataTypes.STRING },
  status: { type: DataTypes.BOOLEAN },
})

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER'}
})

module.exports = {
  Participant,
  User
}