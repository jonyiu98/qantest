'use strict';

const readProfiles = require('./model.js').readProfiles;
const CrmDAO = require('../util/crm-dao.js');
const ProfilesController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
	
	const profiles = readProfiles(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new ProfilesController(crmDAO);
	controller.readProfiles(profiles, callback);
};

module.exports.listHandler = (event, context, callback) => {
	const crmDAO = new CrmDAO();
	const controller = new ProfilesController(crmDAO);
	controller.readProfilesList(callback);
};
