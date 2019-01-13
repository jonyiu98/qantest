'use strict';

const uuid = require('uuid');

class Addresses {
	constructor(profile_id, address_id, addressType, street, city, state, country, postcode){
		this.profile_id = profile_id;
		this.address_id = address_id;
		this.addressType = addressType;
		this.street = street;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postcode = postcode;
	}
}

const createAddresses = (event, callback) => {
	validateAttributes(event, callback);
	validateProfileId(event, callback);
	const profile_id = event.pathParameters.profileId;
	const body = JSON.parse(event.body);
	const address_id = uuid.v1();	
	const addressType = body.addressType;
	const street = body.street;
	const city = body.city;
	const state = body.state;
	const country = body.country;
	const postcode = body.postcode;
	return new Addresses(profile_id, address_id, addressType, street, city, state, country, postcode);
}

const readAddresses = (event, callback) => {
	validateAddressId(event, callback);
	const address_id = event.pathParameters.addressId;
	return new Addresses(null, address_id, null, null, null, null, null, null);
}

const readAddressesList = (event, callback) => {
	validateProfileId(event, callback);
	const profile_id = event.pathParameters.profileId;
	return new Addresses(profile_id, null, null, null, null, null, null, null);
}

const updateAddresses = (event, callback) => {
	validateAddressId(event, callback);
	validateAttributes(event, callback);
	const address_id = event.pathParameters.addressId;
	const body = JSON.parse(event.body);		
	const addressType = body.addressType;
	const street = body.street;
	const city = body.city;
	const state = body.state;
	const country = body.country;
	const postcode = body.postcode;
	return new Addresses(null, address_id, addressType, street, city, state, country, postcode);
}

const deleteAddresses = (event, callback) => {
	validateAddressId(event, callback);
	validateProfileId(event, callback);
	const profile_id = event.pathParameters.profileId;
	const address_id = event.pathParameters.addressId;	
	return new Addresses(profile_id, address_id, null, null, null, null, null, null);
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
const validateAddressId = (event, callback) => {
	const addressId = event.pathParameters.addressId;
	//const body = JSON.parse(event.body);
	//if  (body.address_id && typeof body.address_id !== 'string'){
	if  (addressId && typeof addressId !== 'string'){
		console.error('Validation Failed');
		callback(new Error('Body did not contain a address_id property of type string.'));
		process.exit(1);
	}
	//Todo: other validations depends on business requirement
}

//Private id-validation functions
const validateProfileId = (event, callback) => {
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
	Addresses: Addresses,
	createAddresses: createAddresses,
	readAddresses: readAddresses,
	updateAddresses: updateAddresses,
	deleteAddresses: deleteAddresses,
	readAddressesList: readAddressesList
}
