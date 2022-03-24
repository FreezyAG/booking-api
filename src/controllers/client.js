import moment from 'moment-timezone'

import service from '../services/client'
import commomService from '../services/common'

import { sendFailureResponse, sendSuccessResponse, JsonResponse } from '../utils/apiResponse'

const getBookings = async function (req, res) {
  const { user } = req
  const { week = moment.utc() } = req.query

  try {

    const bookings = await service.getBookingsInWeekForUser(user.id, week)
    sendSuccessResponse(res, 'operation successful', bookings)

  } catch (err) {
    sendFailureResponse(err)
  }
}

const createBooking = async function (req, res) {
  const { user, body } = req
  try {

    const userToBeBooked = await commomService.getUser(body.userId)
    if (!userToBeBooked) JsonResponse(res, 404, 'User not found')

    // validate that startAt and finishAt are not in the past
    // validate that finishAt is after startAt

    const params = {
      ...body,
      agentId: user.id
    }

    const booking = await service.createBooking(params)
    const aa = await commomService.linkUserToAgent(user.id, body.userId)

    console.log({aa})

    JsonResponse(res, 201, 'booking successful', booking)

  } catch (err) {
    sendFailureResponse(err)
  }
}

const deleteBooking = async function (req, res) {

  try {

    const bookingId = req.params.id

    await service.deleteBooking(bookingId)
    JsonResponse(res, 202)

  } catch (err) {
    sendFailureResponse(err)
  }
}

export default { 
  getBookings, 
  deleteBooking, 
  createBooking
}
