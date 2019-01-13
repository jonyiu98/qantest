'use strict';

const createProfiles = require('./model.js').createProfiles;
const CrmDAO = require('../util/crm-dao.js');
const ProfilesController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
	const profiles = createProfiles(event, callback);
	const crmDAO = new CrmDAO();
	const controller = new ProfilesController(crmDAO);
	controller.createProfiles(profiles, callback);
};
