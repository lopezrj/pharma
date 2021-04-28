const Farmaco = require("../../models/farmaco")

module.exports = {
    articles: async () => {
      try {
        const farmacosFetched = await Farmacos.find()
        return farmacosFetched.map(farmaco => {
          return {
            ...farmaco._doc,
            _id: farmaco.id
          }
        })
      } catch (error) {
        throw error
      }
    }
}