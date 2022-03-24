import bookingRepository from '../repository/booking.js'

async function getBookingsInWeekForUser(userId, week) {
  console.log({ userId })
  return bookingRepository.getBookingsInWeekForUser(userId, week)
}

export default { getBookingsInWeekForUser }