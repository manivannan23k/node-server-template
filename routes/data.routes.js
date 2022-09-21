
const dataController = require('../controllers/data.controller')

module.exports = (app) => {

    app.get('/test', [], dataController.test)

}