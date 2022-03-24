import service from '../services/common'

import{ sendFailureResponse, sendSuccessResponse } from '../utils/apiResponse'

const getUsers = async function (req, res) {
  const agentId = req.header('X-Agent-Id')

  try {

    const users = await service.getUsersForAgent(agentId)
    sendSuccessResponse(res, 'operation successful', users)

  } catch (err) {
    sendFailureResponse(err)
  }
}

const getAgents = async function (req, res) {

  try {

    const agents = await service.getAgents()
    sendSuccessResponse(res, 'operation successful', agents)

  } catch (err) {
    sendFailureResponse(err)
  }
}

export default { getUsers, getAgents }
