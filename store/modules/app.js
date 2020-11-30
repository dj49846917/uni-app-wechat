const App = {
	namespaced: true,
	state: {
		tipBarHeight: 0,		// 状态栏的高度
		height: 0,				// 屏幕的高度
	},
	mutations: {
		setTipBarHeight: (state, payload) => {
			state.tipBarHeight = payload
		},
		setWindowHeight: (state, payload) => {
			state.height = payload
		},
	},
	actions: {

	}
}

export default App
