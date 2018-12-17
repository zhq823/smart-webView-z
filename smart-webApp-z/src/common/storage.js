// /**
//  * 这个方法应该移走，统一使用iStorage
//  * 
//  */
// export default {
//     _parse: function (value) {
//         if (value === undefined || value === null) {
//             return null;
//         }
//         var type = typeof (value);
//         return (type == "string" || type == "number" || type == "boolean") ? value : JSON.stringify(value);
//     },
//     set2local: function (key, value) {
//         var val = this._parse(value);
//         if (val === null) {
//             return;
//         }
//         window.localStorage.setItem(key, val);
//     },
//     set2session: function (key, value) {
//         var val = this._parse(value);
//         if (val === null) {
//             return;
//         }
//         window.sessionStorage.setItem(key, val);
//     },
//     get: function (key) {
//         var val = window.sessionStorage.getItem(key) || window.localStorage.getItem(key);
//         if (val === null) {
//             return null;
//         }
//         if (val == "true" || val == "false") {
//             return val == "true";
//         }
//         if (/(^{.*}$)|(^\[.*\]$)/.test(val)) {
//             return JSON.parse(val);
//         }
//         return val;
//     },
//     remove: function (key) {
//         window.sessionStorage.removeItem(key);
//         window.localStorage.removeItem(key);
//     },
//     clear: function () {
//         window.sessionStorage.clear();
//         window.localStorage.clear();
//     }
// }