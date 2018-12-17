//这是搜索时间的处理方法 
export const formatDate = function (strTime) {
    if (!strTime) {
        return null;
    }
    var date = new Date(strTime);
    var month = (date.getMonth() + 1);
    month = month >= 10 ? month : ("0" + month);
    var day = date.getDate();
    day = day >= 10 ? day : ("0" + day);
    return date.getFullYear() + "-" + month + "-" + day;
};