'use strict';

const deleteProfiles = require('./model.js').deleteProfiles;
const CrmDAO = require('../util/crm-dao.js');
const ProfilesController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
	
	const profiles = deleteProfiles(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new ProfilesController(crmDAO);
	controller.deleteProfiles(profiles, callback);
};