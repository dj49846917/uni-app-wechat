// 获取年月日时分秒
/**
 * @param {Object} timestamp: 时间戳
 */
export function timestampToTime(timestamp) {
	var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear();
	var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
	var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
	var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours());
	var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
	var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
	return {
		Y,
		M,
		D,
		h,
		m,
		s
	}
	
}

/**
 * @param {Object} val: 时间戳
 */
// 时间转换
export function parseTime(val) {
	const oneDay = 24 * 60 * 60 * 1000
	// 当前时间的时间戳
	const now = new Date().valueOf()
	// 获取前天0时0分0秒的时间
	const startLastDay = new Date(now - (2 * oneDay)).setHours(0, 0, 0, 0)
	// 获取昨天0时0分0秒的时间
	const startYesterday = new Date(now - oneDay).setHours(0, 0, 0, 0)
	// 获取今天0点0分0秒的时间
	const startToday = new Date().setHours(0, 0, 0, 0)
	// 获取今天23时59分59秒的时间
	const startTomorrow = new Date().setHours(23, 59, 59, 999)
	// 获取今年第一天的时间戳
	const startNowYear = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0).valueOf()
	
	const { Y, M, D, h, m, s } = timestampToTime(val)
	console.log("11")
	if(val < startNowYear) {
		return `${Y}年${M}月${D}日 ${h}:${m}:${s}`
	}
	
	if(val >= startNowYear && val < startYesterday) {
		return `${M}月${D}日 ${h}:${m}:${s}`
	}
	
	if(val >= startYesterday && val < startToday) {
		return "昨天 ${h}:${m}:${s}"
	}
		
	if(val >= startToday && val <= startTomorrow) {
		if(h < 12 && h >= 0) {
			return `早上${Number(h)}:${m}`
		} else if(h >= 12 && h < 13) {
			return `中午${Number(h)}:${m}`
		} else if(h >= 13 && h < 18) {
			return `下午${Number(h - 12)}:${m}`
		} else {
			return `晚上${Number(h - 12)}:${m}`
		}
	}
}
