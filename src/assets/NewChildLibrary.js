/*  создаем глобальные переменные */

let writen_first_number;
let writen_second_number;
let writen_sign;


/*-------------------------*/




export function first_number_Chloe(){
	//alert('first_Chloe');
	writen_first_number = Math.floor((Math.random() * 6) + 3);
	//alert('gen wf='+writen_first_number);
	console.log('first_number'+ writen_first_number)

	return writen_first_number;
}



export function second_number_Chloe(){
	
	writen_second_number = Math.floor((Math.random() * 9) + 3);
	//alert('gen ws='+writen_second_number);
	console.log('second number'+writen_second_number)
	return writen_second_number;
}

	
export function sign_Chloe(){
	
	let sign=Math.floor((Math.random()*4) + 1);
	if(sign===1){
		writen_sign = "+";
		//document.write("+");
	}
	else if(sign===2){
		writen_sign = "-";
		//document.write("-");
	}
	else if(sign===3){
		writen_sign = "*";
		//document.write("*");
	}
	else{
		writen_sign = "/";
		//document.write("/");
	}
	return writen_sign;
}



export function right_res(number1,number2,sign,result){
let right_result;
if(sign==="+"){right_result=number1+number2;}
if(sign==="-"){right_result=number1-number2;}
if(sign==="*"){right_result=number1*number2;}
if(sign==="/"){right_result=number1/number2;}
console.log("right")

if(result === right_result) return true;
return false;
}



