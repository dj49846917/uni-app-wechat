<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS-NVUE
			// 引入iconfont
			const domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				fontFamily: 'iconfont',
				src: "url('https://at.alicdn.com/t/font_2199095_voz8fueyab.ttf')"
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/css/uni-nvue.css";
	@import "./common/css/common.css";
	/* #ifndef APP-PLUS-NVUE */
	@import "./common/css/icon.css";
	/* #endif */
</style>
