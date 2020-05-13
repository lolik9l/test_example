import axios from 'axios/dist/axios.min'

const state = {
    progects: [],
    dataProgect: {},
}
const mutations = {
    showProgects(s, data){
        s.progects.push(...data); 
    },
    showProgect(s, data){
        s.dataProgect = data;
    },
    resetCurrentData(s) {
		s.dataProgect = {};
	},
}
const actions = {
    async getProgects({ commit }){
        await axios.get(`http://localhost:3000/get-progects`)
            .then(function (res) {
                commit('showProgects', res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    async getProgect({ commit }, id){
        await axios.get(`http://localhost:3000/get-progect/${id}`)
            .then(function (res) {
                commit('showProgect', res.data)
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
    progects: s => s.progects,
    startId: s => s.startId,
	dataProgect: s=> s.dataProgect,	
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}