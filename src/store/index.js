import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';

//GLOBALS
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

//MODULES
import todos from './modules/todos';


const debug = process.env.NODE_ENV !== 'production';
const persistedStateCfg = {key: 'store'};

const logger = createLogger();
const persistedState = createPersistedState(persistedStateCfg);

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {todos},

    state,
    actions,
    getters,
    mutations,
    plugins: debug ? [logger, persistedState] : []
});