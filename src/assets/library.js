/*  создаем глобальные переменные */

let first_number;
let second_number;
let sign;
let result;

/*-------------------------*/
// level 1 +/- up 10
// level 2 +/- up 100
//level 3 table multiplication in limit 100
// level 4 multiplication in limit 1000
// level 5 division in limit 1000
// level 6 multiplication in limit 400


export function getTask(level){

		result = get_Result(level)
		first_number = get_First_number(level,result)
		sign = get_Sign(level,first_number,result)
		second_number = get_Second_number(result,sign,first_number,level)
		return [first_number,second_number,sign]

}


function get_Result(level){
	let result;
	switch(level){
		case 1: result = Math.ceil(Math.random()*10);
			break;
		case 2: result = Math.ceil(Math.random()*100);
			break;
		case 6: result = Math.ceil(Math.random()*199);
			break;
		default: result = 1;
	}
	return result
}

function get_First_number(level,result = 0){
	let first_number;
	if(level === 1) first_number = Math.ceil(Math.random()*9);		
	if(level === 2) first_number = Math.ceil(Math.random()*99);		
	if(level === 3) first_number = Math.ceil(Math.random()*9);		
	if(level === 4) first_number = Math.ceil(Math.random()*19);		
	if(level === 5) first_number = Math.ceil(Math.random()*100);		
	if(level === 6){
			do{
			first_number = Math.ceil(Math.random()*1000);	
	//			console.log('first_number: '+ first_number + 'res: ' + result + ' %: ' + first_number%result)	
			}
			while(first_number%result !== 0)

	}

	return first_number;
}





function get_Second_number(result,sign,first_number,level){
	let second_number;
	if(level === 3) second_number = Math.ceil(Math.random()*9);	
	if(level === 4) second_number = Math.ceil(Math.random()*19);	

	if(level === 5) {
		do {
		second_number = Math.ceil(Math.random()*99);
		}
		while(second_number*first_number > 1000);
	}
	if(level === 6) second_number = first_number/result;
	if (level === 1 || level === 2) {	
		if(sign === '+') second_number = result - first_number;
		if(sign === '-') {second_number = first_number - result; 

	}
		if(sign === '*' || sign === '/') second_number = result/first_number;
	}

	return second_number;
}

function get_Sign(level = 1,first_number,result = 0){
	let sign; 

	if(level <= 2) {
		if(first_number > result) sign = '-';
			else sign = '+';
	} 
	if(level === 3 || level === 5 || level === 4) sign = '*';
	if(level === 6) sign = '/';

	return sign;
}

export function right_res(number1,number2,sign,result){
	let right_result;
	switch(sign){
		case '+': right_result=number1+number2;
			break;
		case '-': right_result=number1-number2;
			break;
		case '*': right_result=number1*number2;
			break;
		case '/': right_result=number1/number2;
			break;
		default: result = '+';

	}
	if(result === right_result) return true;
	return false;
}

