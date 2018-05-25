const sendResponse = require('./sendResponse');
const {personsController} = require('./people');

const applicationRoutes = (params, queryParams) => {
    switch(params) {
        case '/people':
            const data = personsController(route, queryParams);
            return sendResponse(data, headers);
            break;
    }
}


module.exports.routes = applicationRoutes;


