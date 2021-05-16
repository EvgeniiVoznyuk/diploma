const { Participant } = require('../models/models')
const ApiError = require('../error/ApiError')

class ParticipantController {
  async pushParticipant(req, res) {
    const { firstName, secondName, status } = req.body
    const type = await Participant.create({ firstName, secondName, status })

    return res.json(type)
  }

  async getParticipants(req, res) {
    const participants = await Participant.findAll()

    return res.json(participants)
  }
}

module.exports = new ParticipantController()