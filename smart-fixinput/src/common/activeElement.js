// 解决键盘弹出后挡表单的问题
window.addEventListener('resize', function() {
	if(
		document.activeElement.tagName.toLocaleUpperCase() === 'INPUT' ||
		document.activeElement.tagName.toLocaleUpperCase() === 'TEXTAREA'
	) {
		window.setTimeout(function() {
			if('scrollIntoView' in document.activeElement) {
				document.activeElement.scrollIntoView();
			} else {
				document.activeElement.scrollIntoViewIfNeeded();
			}
		}, 0);
	}
});
//document.activeElement 的支持程度，
//发现四大浏览器safari除外, ie firefoxopera都提供了这个对象的支持。
//但是有点需要注意的，上面的例子中 opera 会把图片作为 可以 focus的对象。导致document.activeElement的结果不一致...