'use strict';

const readAddresses = require('./model.js').readAddresses;
const readAddressesList = require('./model.js').readAddressesList;
const CrmDAO = require('../../util/crm-dao.js');
const AddressesController = require('./controller.js');

module.exports.handler = (event, context, callback) => {	
	const addresses = readAddresses(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new AddressesController(crmDAO);
	controller.readAddresses(addresses, callback);
};

module.exports.listHandler = (event, context, callback) => {
	const addresses = readAddressesList(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new AddressesController(crmDAO);
	controller.readAddressesList(addresses, callback);
};
