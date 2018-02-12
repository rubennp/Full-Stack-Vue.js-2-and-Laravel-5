import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		saved: []
	},
	mutations: {
		toogleSaved(state, id) {
			let index = state.saved.findIndex(saved => saved === id);
			index === -1 ? state.saved.push(id) : state.saved.splice(index, 1);
		}
	}
});