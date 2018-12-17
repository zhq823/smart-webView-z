import { formatDate } from './formatDate.js';
//true == 会议已经开始
//false == 会议还未开始(包含会议当天)
export const contrastDate = function(val){
	var currentDate = formatDate(new Date());
	var eventDate = formatDate(val);
	if(new Date(currentDate) <= new Date(eventDate)){
		return false
	}
	return true
}
//true == 会议已经开始
//false == 会议还未开始(不包含会议当天)
export const contrastDate2 = function(val){
	var currentDate = formatDate(new Date());
	var eventDate = formatDate(val);
	if(new Date(currentDate) < new Date(eventDate)){
		return false
	}
	return true
}
