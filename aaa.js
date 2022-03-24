const a = 'docker - compose run app npx sequelize - cli init'
const b = 'docker-compose run app npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,type:string,role:string,agentId:integer'
const c = 'docker-compose run app npx sequelize-cli model:generate --name Booking --attributes userId:integer,agentId:integer,startAt:date,finishAt:date'
const d = 'docker-compose run app npx sequelize-cli db:migrate'
const e = 'docker-compose run app npx sequelize-cli db:seed:all'


