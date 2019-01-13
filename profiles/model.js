'use strict';

const uuid = require('uuid');

class Profiles {
	constructor(profile_id, firstName, lastName, dateOfBirth, phone, email){
		this.profile_id = profile_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.phone = phone;
		this.email = email;
	}
}

const createProfiles = (event, callback) => {
	//validateAttributes(event, callback);
	const body = JSON.parse(event.body);
	const profile_id = uuid.v1();	
	const firstName = body.firstName;
	const lastName = body.lastName;
	const dateOfBirth = body.dateOfBirth;
	const phone = body.phone;
	const email = body.email;
	return new Profiles(profile_id, firstName, lastName, dateOfBirth, phone, email);
}

const readProfiles = (event, callback) => {
	validateId(event, callback);
	const profile_id = event.pathParameters.profileId;
	return new Profiles(profile_id);
}

const updateProfiles = (event, callback) => {
	validateId(event, callback);
	validateAttributes(event, callback);
	const profile_id = event.pathParameters.profileId;
	const body = JSON.parse(event.body);		
	const firstName = body.firstName;
	const lastName = body.lastName;
	const dateOfBirth = body.dateOfBirth;
	const phone = body.phone;
	const email = body.email;
	return new Profiles(profile_id, firstName, lastName, dateOfBirth, phone, email);
}

const deleteProfiles = (event, callback) => {
	validateId(event, callback);
	const profile_id = event.pathParameters.profileId;	
	return new Profiles(profile_id);
}

// Private attributes-validation functions
const validateAttributes = (event, callback) => {
	const body = JSON.parse(event.body);
	if  (body.firstName && typeof body.firstName !== 'string'){
		console.error('Validation Failed');
		callback(new Error('Body did not contain a text property of type string.'));
		process.exit(1);
	}
	//Todo: other validations depends on business requirement
}

//Private id-validation functions
const validateId = (event, callback) => {
	const profileId = event.pathParameters.profileId;
	//const body = JSON.parse(event.body);
	//if  (body.profile_id && typeof body.profile_id !== 'string'){
	if  (profileId && typeof profileId !== 'string'){
		console.error('Validation Failed');
		callback(new Error('Body did not contain a profile_id property of type string.'));
		process.exit(1);
	}
	//Todo: other validations depends on business requirement
}

module.exports = {
	Profiles: Profiles,
	createProfiles: createProfiles,
	readProfiles: readProfiles,
	updateProfiles: updateProfiles,
	deleteProfiles: deleteProfiles
}
