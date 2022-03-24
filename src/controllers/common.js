import service from '../services/common'

import{ sendFailureResponse, sendSuccessResponse } from '../utils/apiResponse'


const getUsers = async function (req, res, next) {
  const agentId = req.header('X-Agent-Id')
  try {

    console.log({ agentId})
    const users = await service.getUsersForAgent(agentId)

    console.log({ users })

    sendSuccessResponse(res, 'operation successful', users)
    // res.status(200).json({ body: users })

  } catch (err) {
    sendFailureResponse(err)
  }
}

export default { getUsers }