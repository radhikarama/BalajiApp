
const Restaurantdata = require('../Models/userRestaurantSchema')

function services() {

  this.restaurantData = async (request) => {
    let response = [], error = true;
    try {
      let params = new Restaurantdata({
        id: request.id,
        categoryName: request.categoryName,
        itemName: request.itemName,
        url: request.url,
        price: request.price,
        amount: request.amount
      })
      const data = await params.save()

        .then(async (data) => {
          response = data;
          error = false
        })
        .catch((error) => {
          console.log('error', error)
          error = error
        })
    }
    finally {

    }

    return [error, response]
  }

  this.getData = async (request) => {
    let response = [], error = true;
    await Restaurantdata.find({}).then((data) => {
      response = data;
      error = false
    }).catch((err) => {
      error = true
    })
    return [error, response]
  }
}
module.exports = services;