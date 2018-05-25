const people = require('../data.json');

const filterObject = (object, keys) => {
    const finalObject = {};
    keys.forEach((data) => finalObject[data] = object[data] );
    return finalObject;
}


const findListOfAllPeoples = ({fields}) => {
    try{
        if(Array.isArray(fields) && fields.length!==0){
            //process the data and get the specific fields data
            people.map((person) => ({...filterObject(person, fields)}));
        }
        else{
           //return all the data
           return people;
        }
    }
    catch(exception){
        return {
            data: [], 
            error: {
                message: exception.message
            }
        }
    }
}

const getSpecificPerson = ({key, value}) => people.filter((person) => persons.hasOwnProperty(key) && person[key] === value );


const personsController = (route , params, method) => {
    const data = '';    
    switch(route) {
        case '/':
            data =  findListOfAllPeoples({...params});
            break;
        default:
            data =  getSpecificPerson({...route});
    }
    return data;

}


module.exports = {
    personsController
}