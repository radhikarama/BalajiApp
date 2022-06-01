const mongoose = require('mongoose');
mongoose.connect(global.config.Connection, {
 useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true, useCreateIndex: true
}).then(() => {
 console.log('con')
})
 .catch((err) => {
  console.log(err, 'err')
 })