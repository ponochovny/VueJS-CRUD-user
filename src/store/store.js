import Vue from 'vue';
import Vuex from 'vuex';

import bots from './modules/bots';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		bots,
	},
});
