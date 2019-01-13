'use strict';

const updateProfiles = require('./model.js').updateProfiles;
const CrmDAO = require('../util/crm-dao.js');
const ProfilesController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
	console.log(event.pathParameters.profileId);
	const profiles = updateProfiles(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new ProfilesController(crmDAO);
	controller.updateProfiles(profiles, callback);
};

