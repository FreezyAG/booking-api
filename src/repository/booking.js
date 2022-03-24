import moment from 'moment-timezone'

import { Op } from 'sequelize'

import { Booking } from '../db/model/index.js'

async function getBookingsInWeekForUser(userId, week) {
  return Booking.findAll({
    where: { 
      agentId: userId,
      startAt: {
        [Op.gte]: moment(week).startOf('week').toDate()
      },
      finishAt: {
        [Op.lte]: moment(week).endOf('week').toDate()
      }
     },
    include: 'booked'
  }, {
  })
}


export default {
  getBookingsInWeekForUser
}