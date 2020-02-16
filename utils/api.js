const axios = require("axios");
require("dotenv").config();

const api = {
	getUser(username) {
		const queryUrl = `https://api.github.com/users/${username}`;
		return axios.get(queryUrl).catch(err => {
			
			console.log("User not found");
		
		});
	},



	data(username) {
		const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
		return axios.get(queryUrl).then(res => {
			return res.data
		});
	}
};

module.exports = api;

  
// api access token 1beb0186fd52f6f6247c8f5cd1e6fc67713ff12c