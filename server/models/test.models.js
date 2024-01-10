const {mongoose} = require('mongoose');
//const Schema = mongoose.Schema

//creating schema
// const testSchema = new Schema({
//     username: { type: String, required: true },
//     score: {type: String, required: true},
// },
// {
//     timestamp: true
// })

// //creating model
// const Test =  mongoose.model('Test',testSchema);

// module.exports = Test;


const scoreSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    domain: String,
    score: Number
  },
  {
    timestamp: true
  });

  const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;