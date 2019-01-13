'use strict';

//Todo: Implementation operations and data-access to CRM backend.
module.exports = class CrmDAO {
	constructor() {		
	}

create(model, callback) {	  
	  if  (model.firstName && typeof model.firstName !== 'string'){
		  console.error('Validation Failed');
		  callback(new Error('Body did not contain a firstName property.'));
		  return;
	  }
	  console.log(model.firstName);
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      profile_id: model.profile_id,
	      message: 'Successfully Created profile for ' + model.firstName +" "+ model.lastName
	    }),
	  };
	  callback(null, response);
}

read(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      profile_id: model.profile_id,
	      firstName: 'Jon',
	      lastName: 'Yiu',
	      dateOfBirth: '15101985',	
	      phone: '61411989624',
	      email: 'jonyiu98@gmail.com',
	      message: 'Successfully Read profile'
	    }),
	  };
	  callback(null, response);
}

update(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      profile_id: model.profile_id,
	      message: 'Successfully Updated profile'
	    }),
	  };
	  callback(null, response);
}

delete(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      profile_id: model.profile_id,
	      message: 'Deleted profile'
	    }),
	  };
	  callback(null, response);
}

readList(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      profile_ids: ["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10","P11","P12","P13","P14","P15","P16","P17","P18","P19","P20"],
	      message: 'Successfully Read 20 most recently created profiles'
	    }),
	  };
	  callback(null, response);
}

createAddress(model, callback) {	  
	  if  (model.addressType && typeof model.addressType !== 'string'){
		  console.error('Validation Failed');
		  callback(new Error('Body did not contain an addressType property.'));
		  return;
	  }
	  console.log(model.addressType);
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      address_id: model.address_id,
	      profile_id: model.profile_id,
	      message: 'Successfully Created address for a profile'
	    }),
	  };
	  callback(null, response);
}

readAddress(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      address_id: model.address_id,
	      addressType: 'home',
	      street: '80 George Street',
	      city: 'Sydney',
	      state: 'NSW',
	      country: 'AUS',
	      postcode: '2000',
	      message: 'Successfully Read address'
	    }),
	  };
	  callback(null, response);
}

updateAddress(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      address_id: model.address_id,
	      message: 'Successfully Updated address'
	    }),
	  };
	  callback(null, response);
}

deleteAddress(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      address_id: model.address_id,
	      profile_id: model.profile_id,
	      message: 'Successfully Deleted address for a profile'
	    }),
	  };
	  callback(null, response);
}

readAddressList(model, callback) {
	  const response = {
	    statusCode: 200,
	    body: JSON.stringify({
	      profile_id: model.profile_id,	
	      address_ids: ["A1","A2","A3"],
	      message: 'Successfully Read all addresses ids for a profile'
	    }),
	  };
	  callback(null, response);
}
}
