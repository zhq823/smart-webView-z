//节流函数(控制输入搜索时间间隔，超过ms毫秒没有输入就进行搜索，否则不搜索)
export const delaySearch = (function() {
	let timer = 0;
	return function(callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();