import { User } from '../db/model/index.js'

async function findUsersForAgent(agentId) {
  return User.findAll({
    where: {agent: agentId}
  })
}

async function findById(id) {
  return User.findOne({
    where: { id }
  })
}

async function getBookingsForUser(id) {
  return User.findOne({
    where: { id: 1 }
  })
}

export default { 
  findUsersForAgent, 
  findById,
  getBookingsForUser
}