const Router = require('express')
const router = new Router()
const participantController = require('../controllers/participantsController')

router.post('/participants', participantController.pushParticipant)
router.get('/participants', participantController.getParticipants)

module.exports = router