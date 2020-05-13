import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/dist/axios.min'
import users from './users'
import progects from './progects'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: null, // или в кэш
		csrf: '',
		userData: {}
	},
	mutations: {
		recordDataUser(s, data){
			s.userData = data;
		},
		setToken(s, token) {
			s.token = token;
		},
		clearToken(state) {
			state.token = null;
		},
		clearDataUser(state) {
			state.user = null;
		},
		setCsrf(s, csrf) {
			s.csrf = csrf;
		},
	},
	actions: {
		setCsrf({ commit }) {
			axios.post(`http://localhost:3000/csrf`)
				.then((res) => {
					commit('setCsrf', res.data);
				})
				.catch((e) => {
					console.log(e);
				})
		},
		login({ commit }, params) {
			return axios.post(`http://localhost:3000/login`, params)
			.then((res) =>{
				commit('recordDataUser', res.data);
				commit('setToken', 'truetoken');
			})
			.catch((e) =>{
				throw e;
			})
		},
		logout({ commit }) {
			commit('clearToken');
			commit('clearDataUser');
		},
		registration({ commit }, params){
			axios.post(`http://localhost:3000/registration`, params)
			.then((res) =>{
				commit('recordDataUser', res.data);
				commit('setToken', 'truetoken');
			})
			.catch((e) =>{
				throw e;
			})
		},
	},
	getters:{
		hasToken: s => !!s.token,
		csrf: s => s.csrf,
	},
	modules: {
		progects,
		users,
	}
})
