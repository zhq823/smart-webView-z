export const formatTime = function () {
    var date = new Date();
    var Hours = date.getHours() >= 10 ? date.getHours() : ("0" + date.getHours());
    var Minutes = date.getMinutes() >= 10 ? date.getMinutes() : ("0" + date.getMinutes())
    return Hours + ':' + Minutes;
};