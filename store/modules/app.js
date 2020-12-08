const App = {
	namespaced: true,
	state: {
		tipBarHeight: 0,		// 状态栏的高度
		height: 0,				// 屏幕的高度
		keyBoardHeight: 0,		// 键盘唤起的高低压
	},
	mutations: {
		setTipBarHeight: (state, payload) => { // 获取状态栏的高度
			state.tipBarHeight = payload
		},
		setWindowHeight: (state, payload) => { // 获取视图的高度
			state.height = payload
		},
		setKeyBoardHeight: (state, payload) => { // 获取键盘的高度
			state.keyBoardHeight = payload
		}
	},
	actions: {

	}
}

export default App
