'use strict';

const Profiles = require('./model.js');

module.exports = class ProfilesController {
	constructor(crmDAO) {
		this.crmDAO = crmDAO;
	}
	
	createProfiles(profiles, callback) {
		 this.crmDAO.create(profiles, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	readProfiles(profiles, callback) {
		 this.crmDAO.read(profiles, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	updateProfiles(profiles, callback) {
		 this.crmDAO.update(profiles, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	deleteProfiles(profiles, callback) {
		 this.crmDAO.delete(profiles, (error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
	
	readProfilesList(callback) {
		 this.crmDAO.readList(null,(error, result) => {
			 if (error) {
				 callback(errror);
			 }else{
				 callback(null, result);
			 }
		 });
	}
}
