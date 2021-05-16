const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { User } = require('../models/models')

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('invalid email or password'))
    }

  }

  async login(req, res) {

  }

  async check(req, res, next) {
    const {id} = req.query
    if (!id) {
      return next(ApiError.badRequest('id not found'))
    }
    res.json(id)
  }
}

module.exports = new UserController()