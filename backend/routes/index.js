const Router = require('express')
const router = new Router()
const userRouter = require('./user')
const participantsRouter = require('./participants')

router.use('/participant', participantsRouter)
router.use('/user', userRouter)

module.exports = router