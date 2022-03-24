import { User } from '../db/model'

async function findUsersForAgent(agentId) {
  return User.findAll({
    where: {agent: agentId}
  })
}

async function findOne(id) {
  return User.findOne({
    where: { id}
  })
}

async function getBookingsForUser(id) {
  return User.findOne({
    where: { id: 1 }
  })
}

export default { 
  findUsersForAgent, 
  findOne,
  getBookingsForUser
}