'use strict';

const updateAddresses = require('./model.js').updateAddresses;
const CrmDAO = require('../../util/crm-dao.js');
const AddressesController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
	console.log(event.pathParameters.profileId);
	const addresses = updateAddresses(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new AddressesController(crmDAO);
	controller.updateAddresses(addresses, callback);
};

