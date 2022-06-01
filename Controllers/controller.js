const service = require('../Services/service')

function controller(objCollection) {
 var app = objCollection.app;
 const services = new service(objCollection);
 app.post('/' + 'postingItemsdata', async (req, res) => {
  let [err, result] = await services.restaurantData(req.body);
  if (!err) {
   res.json({
    status: 200,
    message: 'success',
    data: result
   })
  } else {
   res.json({
    status: 400,
    message: 'error',

    data: err
   })
   console.log(err.result)
  }
 })
 //get data
 app.get('/' + 'gettingItemsdata', async (req, res) => {
  let [err, result] = await services.getData(req.body);
  if (!err) {
   res.json({
    // status: 200,
    // message: 'success',
    data: result
   })
  } else {
   res.json({
    status: 400,
    message: 'error',

    data: err
   })
   console.log(err.result)
  }
 })



}

module.exports = controller;