const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bankingtest').then(res=>{
  console.log("connected...")
}).catch(err=>{
  console.log("not connected...")
})

var userSchema = mongoose.Schema({
  username:String,
  name:String,
  password:String
})

mongoose.plugin(plm)

module.exports = mongoose.model("user",userSchema)

