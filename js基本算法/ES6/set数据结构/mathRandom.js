define(['module'], function(module) {
	
	//利用set数据结构add方法不会重复添加数据特性
	function getNum1(n) {
		let s = new Set();
		while(s.size < 10) {
			let i = Math.floor(Math.random() * 10 + 1);
			s.add(i);
		}
		return Array.from(s);
	}
	
	//自定义函数
	function getNum2(n) {
		var arr = [],
			newArr = [];
		for(var i = 1; i < n + 1; i++) {
			arr.push(i);
		}
		for(var i = 0; i < n; i++) {
			let index = Math.floor(Math.random() * (arr.length));
			newArr[newArr.length] = arr[index];
			arr.splice(index, 1);
		}
		return newArr
	}

	//支持nodejs中导出模块内容的写法
	module.exports = {
		getNum1,
		getNum2
	}

})