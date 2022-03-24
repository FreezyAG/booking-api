import moment from 'moment-timezone'

import service from '../services/client'
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

const deleteBooking = async function (req, res) {

  try {

    const bookingId = req.params.id

    await service.deleteBooking(bookingId)
    JsonResponse(res, 202)

  } catch (err) {
    sendFailureResponse(err)
  }
}

export default { getBookings, deleteBooking }
