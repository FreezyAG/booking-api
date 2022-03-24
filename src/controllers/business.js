import moment from 'moment-timezone'

import service from '../services/business'

import { sendFailureResponse, sendSuccessResponse } from '../utils/apiResponse'


const getBookings = async function (req, res) {
  const { user } = req
  const { week = new Date() } = req.query

  try {
    const bookings = await service.getBookingsInWeekForUser(user.id, week)

    sendSuccessResponse(res, 'operation successful', bookings)

  } catch (err) {
    sendFailureResponse(err)
  }
}

export default { getBookings }