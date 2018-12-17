export const Amount = function(val) {
	if(val) {
		return val.split("").map(ele => {
			if(ele != "￥" && ele != "," && ele != "undefined") {
				return ele;
			}
		}).join("").replace(".00", "")
	}
}