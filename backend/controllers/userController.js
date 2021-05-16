const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generetaJWT = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('invalid email or password'))
    }

    const candidate = await User.findOne({where: {email}})
    if (candidate) {
      return next(ApiError.badRequest('a user with this email was found'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
    const token = generetaJWT(user.id, user.email, user.role)

    return res.json({token})

  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({where: {email}})

    if (!user) {
      return next(ApiError.internal('User was not found'))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)
    console.log(comparePassword)

    if (comparePassword) {
      const token = generetaJWT(user.id, user.email, user.role)

      return res.json({token})
    } else {
      return res.json({message: 'invalid data'})
    }
  }

  async check(req, res, next) {
    const token = generetaJWT(req.user.id, req.user.email, req.user.role)

    return res.json({token})
  }
}

module.exports = new UserController()