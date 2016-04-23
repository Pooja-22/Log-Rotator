/**
 * Created by pooja on 13/4/16.
 */

module.exports = function (app) {

    //  routes

    app.use('/api/backUp', require('./server/api'));
};
