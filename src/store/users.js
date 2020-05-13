import axios from 'axios/dist/axios.min'

const state = {
	users: [],
	dataUser: {}
}
const mutations = {
	showUsers(s, data){
		s.users.push(...data); 
	},
	showUser(s, data){
		s.dataUser = data;
	},
	resetCurrentData(s) {
		s.dataUser = {};
	},
}
const actions = {
	async getUsers({ commit }){
		await axios.get(`http://localhost:3000/get-users`)
			.then(function (res) {
				commit('showUsers', res.data)
			})
			.catch(function (error) {
				console.log(error);
			})
	},
	async getUser({ commit }, id){
		await axios.get(`http://localhost:3000/get-user/${id}`)
			.then(function (res) {
				commit('showUsers', res.data)
			})
			.catch(function (error) {
				console.log(error);
			})
	},
	resetCurrentData({ commit }){
		commit('resetCurrentData');
	},
}
const getters = {
    users: s=> s.users,
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}