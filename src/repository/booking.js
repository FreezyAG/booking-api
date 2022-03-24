import moment from 'moment-timezone'

import { Op } from 'sequelize'

import { Booking } from '../db/model/index.js'

async function getBookingsInWeekForUser(userId, week) {
  return Booking.findAll({
    where: { 
      agentId: userId,
      startAt: {
        [Op.gte]: moment.utc(week).startOf('week').toDate()
      },
      finishAt: {
        [Op.lte]: moment.utc(week).endOf('week').toDate()
      }
     },
    include: 'booked'
  }, {})
}

async function create(booking) {
  return Booking.create(booking)
}

async function deleteBookingById(bookingId) {
  return Booking.destroy({
    where: {
      id: bookingId
    }
  })
}

export default {
  getBookingsInWeekForUser,
  deleteBookingById,
  create
}