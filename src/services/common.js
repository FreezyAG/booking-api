import userRepository from '../repository/user'

async function getUsersForAgent(agentId) {
  return userRepository.findUsersForAgent(agentId)
}

async function getBookingsForUser(agentId) {
  return userRepository.getBookingsForUser(agentId)
}

export default { getUsersForAgent, getBookingsForUser }