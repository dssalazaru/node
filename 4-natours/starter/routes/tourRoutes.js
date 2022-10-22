const express = require('express')
const controller = require('./../controllers/tourConstroller')

// Router

const router = express.Router()

router
  .route('/top-5')
  .get(controller.topPrice, controller.list)

router
  .route('/')
  .get(controller.list)
  .post(controller.create)

router
  .route('/:id')
  .get(controller.retrieve)
  .patch(controller.update)
  .delete(controller.delete)

module.exports = router