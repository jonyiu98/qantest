'use strict';

const createAddresses = require('./model.js').createAddresses;
const CrmDAO = require('../../util/crm-dao.js');
const AddressesController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
	const addresses = createAddresses(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new AddressesController(crmDAO);
	controller.createAddresses(addresses, callback);
};
