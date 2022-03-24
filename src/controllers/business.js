import { JsonResponse } from '../utils/apiResponse'

const getBookings = async function (_, res) {
  console.log('heree')
  JsonResponse(res, 501, 'Not Implemented')
}

export default { getBookings }
