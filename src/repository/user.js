import { User } from '../db/model/index.js'

async function findUsersForAgent(agentId) {
  return User.findAll({
    where: { agentId }
  })
}

async function findById(id) {
  return User.findOne({
    where: { id, type: 'user' }
  })
}

async function getUser(id) {
  return User.findOne({
    where: { id, type: 'user' }
  })
}

async function getAgent(id) {
  return User.findOne({
    where: { id, type: 'agent' }
  })
}

async function getAgents() {
  return User.findAll({
    where: { type: 'agent' }
  })
}

async function getBookingsForUser(id) {
  return User.findOne({
    where: { id: 1 }
  })
}

async function linkUserToAgent(agentId, userId) {
  return User.update(
    { agentId },
    { where: { id: userId, type: 'user' } }
  )
}

export default { 
  findUsersForAgent, 
  findById,
  getBookingsForUser,
  linkUserToAgent,
  getAgent,
  getAgents,
  getUser
}