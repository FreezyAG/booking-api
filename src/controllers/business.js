import service from '../services/common'

import { sendFailureResponse, sendSuccessResponse } from '../utils/apiResponse'


const getBookings = async function (req, res, next) {
  try {

    const 

    console.log({ agentId })
    const users = await service.getUsersForAgent(agentId)

    sendSuccessResponse(res, 'operation successful', users)
    // res.status(200).json({ body: users })

  } catch (err) {
    sendFailureResponse(err)
  }
}

export default { getUsers }