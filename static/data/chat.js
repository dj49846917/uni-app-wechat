const chatFuncMenu = [
	{
		id: Math.random(),
		avatar: "/static/images/friend.png",
		val: "新的朋友"
	},
	{
		id: Math.random(),
		avatar: "/static/images/group.png",
		val: "群聊"
	},
	{
		id: Math.random(),
		avatar: "/static/images/tag.png",
		val: "标签"
	},
	{
		id: Math.random(),
		avatar: "/static/images/gzh.png",
		val: "公众号"
	},
]

const chatListData = [
	{
		title: "↑",
	},
	{
		title: "A",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "amy",
				username: "amy"
			}
		]
	},
	{
		title: "B",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "爸",
				username: "爸"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "BossL",
				username: "BossL"
			},
		]
	},
	{
		title: "C",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "蔡杰",
				username: "蔡杰"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "长运-张毅",
				username: "长运-张毅"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "陈波",
				username: "陈波"
			},
		]
	},
	{
		title: "D",
		list: [
			{
				avatar: "",
				id: Math.random(),
				user_id: Math.random(), 
				val: "大姨",
				username: "大姨"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "邓丁",
				username: "邓丁"
			},
		]
	},
	{
		title: "E",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "二",
				username: "二"
			}
		]
	},
	{
		title: "F",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "飞哥",
				username: "飞哥"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "肥头儿",
				username: "肥头儿"
			}
		]
	},
	{
		title: "G",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(),
				val: "高雪",
				username: "高雪"
			}
		]
	},
	{
		title: "H",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "海尔斯健身",
				username: "海尔斯健身"
			}
		]
	},
	{
		title: "I",
		list: []
	},
	{
		title: "J",
		list: []
	},
	{
		title: "K",
		list: [
			{
				avatar: "",
				id: Math.random(),
				user_id: Math.random(), 
				val: "科长",
				username: "科长"
			}
		]
	},
	{
		title: "L",
		list: [
			{
				avatar: "",
				id: Math.random(),
				user_id: Math.random(), 
				val: "兰夏",
				username: "兰夏"
			},
			{
				avatar: "",
				id: Math.random(),
				user_id: Math.random(), 
				val: "李强",
				username: "李强"
			},
			{
				avatar: "",
				id: Math.random(),
				user_id: Math.random(), 
				val: "李天映",
				username: "李天映"
			}
		]
	},
	{
		title: "M",
		list: [
			{
				avatar: "",
				id: Math.random(),
				user_id: Math.random(), 
				val: "妈",
				username: "妈"
			},
			{
				avatar: "",
				id: Math.random(),
				user_id: Math.random(), 
				val: "马丽",
				username: "马丽"
			}
		]
	},
	{
		title: "N",
		list: []
	},
	{
		title: "O",
		list: []
	},
	{
		title: "P",
		list: []
	},
	{
		title: "Q",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "前程",
				username: "前程"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "群聊“商社时代 菜鸟驿站社区”的王阿姨",
				username: "群聊“商社时代 菜鸟驿站社区”的王阿姨"
			}
		]
	},
	{
		title: "R",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "人参",
				username: "人参"
			}
		]
	},
	{
		title: "S",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "洪胜宇",
				username: "洪胜宇"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "宋桂霞",
				username: "宋桂霞"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "孙欢",
				username: "孙欢"
			}
		]
	},
	{
		title: "T",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "唐良强",
				username: "唐良强"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "田涛",
				username: "田涛"
			},
		]
	},
	{
		title: "U",
		list: []
	},
	{
		title: "V",
		list: []
	},
	{
		title: "W",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "王龙雨",
				username: "王龙雨"
			}
		]
	},
	{
		title: "X",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "小洪",
				username: "小洪"
			},
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "小明",
				username: "小明"
			}
		]
	},
	{
		title: "Y",
		list: [
			{
				avatar: "/static/images/userpic.jpg",
				id: Math.random(),
				user_id: Math.random(), 
				val: "杨哥",
				username: "杨哥"
			}
		]
	},
	{
		title: "Z",
		list: []
	},
	{
		title: "#",
		list: []
	},
]

const chatCategory = ["↑", "☆", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"]

export {
	chatFuncMenu,
	chatListData,
	chatCategory
}