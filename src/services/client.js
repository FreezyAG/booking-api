import bookingRepository from '../repository/booking.js'

async function getBookingsInWeekForUser(userId, week) {
  return bookingRepository.getBookingsInWeekForUser(userId, week)
}

async function createBooking(booking) {
  return bookingRepository.create(booking)
}

async function deleteBooking(bookingId) {
  return bookingRepository.deleteBookingById(bookingId)
}

export default { 
  getBookingsInWeekForUser, 
  deleteBooking,
  createBooking
}
