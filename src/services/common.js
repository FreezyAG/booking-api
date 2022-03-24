import userRepository from '../repository/user'

async function getUser(userId) {
  return userRepository.getUser(userId)
}

async function getAgents() {
  return userRepository.getAgents()
}

async function getUsersForAgent(agentId) {
  return userRepository.findUsersForAgent(agentId)
}

async function getBookingsForUser(agentId) {
  return userRepository.getBookingsForUser(agentId)
}

async function linkUserToAgent(agentId, userId) {
  return userRepository.linkUserToAgent(agentId, userId)
}

export default { 
  getUser, 
  getUsersForAgent, 
  getBookingsForUser,
  linkUserToAgent,
  getAgents
}