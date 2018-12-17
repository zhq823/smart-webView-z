import accounting from 'accounting';
export const formatMoney = (val,num=2)=>{
	if(val == null){
		return null;
	}else{
		return accounting.formatMoney(val, "￥", num); // €4.999,99
	}
}
