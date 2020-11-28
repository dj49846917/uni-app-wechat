import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from "./modules/home.js"
import app from "@/store/modules/app.js"

export default new Vuex.Store({
	modules:{
		app,
		home
	}
})