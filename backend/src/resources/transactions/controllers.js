let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let transaction = {...req.body, transactionDate: new Date(req.body.transactionDate)}
  prisma.transactions.create({data: transaction})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.transactions.findMany({ 
    orderBy: {transactionDate: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.transactions.findUnique({
    include:{Cars: true},
    where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.transactions.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let transaction = req.body
  prisma.transactions.update({where: {id}, data: transaction})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


