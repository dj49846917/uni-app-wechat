import {
	chatBottomMenuList,
	chatList
} from '@/static/data/chatDetail.js';

const chatDetail = {
	namespaced: true,
	state: {
		chatList: [],   // 聊天列表数据
	},
	mutations: {
		setList(state, payload) {
			state.chatList = payload
		},
		pushList(state, payload) {
			state.chatList.push(payload)
		}
	},
	actions: {
		// 获取聊天列表
		getList({commit}, payload) {
			const list = chatList
			commit("setList", list)
		},
		// 发送添加列表
		addMessage({commit}, payload) {
			commit("pushList", payload)
		},
		// 发送图片
		sendImg({commit}, payload) {
			commit("pushList", payload)
		},
		// 发送地图
		sendMap({commit}, payload) {
			commit("pushList", payload)
		},
	}
}

export default chatDetail
