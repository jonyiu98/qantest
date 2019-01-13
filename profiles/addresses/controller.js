'use strict';

const Addresses = require('./model.js');

module.exports = class AddressesController {
	constructor(crmDAO) {
		this.crmDAO = crmDAO;
	}
	
	createAddresses(addresses, callback) {
		 this.crmDAO.createAddress(addresses, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	readAddresses(addresses, callback) {
		 this.crmDAO.readAddress(addresses, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	updateAddresses(addresses, callback) {
		 this.crmDAO.updateAddress(addresses, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	deleteAddresses(addresses, callback) {
		 this.crmDAO.deleteAddress(addresses, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	readAddressesList(addresses, callback) {
		 this.crmDAO.readAddressList(addresses, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
}
