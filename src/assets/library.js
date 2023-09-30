import {Levels} from './exercises';
import {get_Numerator,get_Denominator} from './two_numbers';




/*  создаем глобальные переменные */

let first_number;
let second_number;
let sign;
let result;

/*-------------------------*/
// level 1 +/- up 10
// level 2 +/- up 100
//level 3 table multiplication in limit 100
// level 4 division in limit 100
// level 5 multiplication in limit 700
// level 6 multiplication in limit 1000
// level 7 division in limit 1000
// level 8 mix lev 5-lev 7 in limit 1000
// level 9  +/- decimal in limit 1000
// level 10  *  decimal in limit 100

const levelRange = (level) => {

  let ceil = Levels.find((item) => item.id === level).ceil;
  let floor = Levels.find((item) => item.id === level).floor;
  return[ceil,floor]
}


export function getTask(level){
       
       const range = levelRange(level)

		const exercise = Math.floor(Math.random() * (range[0]-range[1])) + range[1];

		result = get_Result(exercise)
		first_number = get_First_Number(exercise,result)
		sign = get_Sign(exercise,first_number,result)
		second_number = get_Second_Number(result,sign,first_number,exercise)
		return [first_number,second_number,sign]

}


function get_Result(level){
	let result;
	switch(level){
		case 1: result = Math.ceil(Math.random()*10);
			break;
		case 2: result = Math.ceil(Math.random()*100);
			break;
		case 9: result = Math.ceil(Math.random()*100)/10;
			break;
		default: result = 1;
	}
console.log(result)

	return result
}

function get_First_Number(level,result = 0){

	let first_number;
	if(level === 1) first_number = Math.ceil(Math.random()*9);		
	if(level === 2) first_number = Math.ceil(Math.random()*99);		
	if(level === 3) first_number = Math.ceil(Math.random()*9);		
	if(level === 4) first_number = get_Numerator(100);
	if(level === 5) first_number = Math.ceil(Math.random()*19);		
	if(level === 6) first_number = Math.ceil(Math.random()*100);		
	if(level === 7) first_number = get_Numerator(1000);
	if(level === 9) first_number = Math.ceil(Math.random()*100)/10;	
	if(level === 10) first_number = Math.ceil(Math.random()*100)/10;	


	return first_number;
}





function get_Second_Number(result,sign,first_number,level){
	let second_number;
	if(level === 3) second_number = Math.ceil(Math.random()*9);	
	if(level === 5) second_number = Math.ceil(Math.random()*19);
	if(level === 4) second_number = get_Denominator(first_number)


	if(level === 6) {
		do {
		second_number = Math.ceil(Math.random()*99);
		}
		while(second_number*first_number > 1000);
	}
	if(level === 7) second_number = get_Denominator(first_number)
	if (level === 1 || level === 2) {	
		if(sign === '+') second_number = result - first_number;
		if(sign === '-') second_number = first_number - result; 
		if(sign === '*' || sign === '/') second_number = result/first_number;
	}
	if(level === 9) {
		if(sign === '+') second_number = (result*10 - first_number*10)/10;
		if(sign === '-') second_number = (first_number*10 - result*10)/10;
		
	}
	if(level === 10) second_number = Math.ceil(Math.random()*9);	

	return second_number;
}

function get_Sign(level = 1,first_number,result = 0){
	let sign; 

	if(level <= 2 || level === 9) {
		if(first_number > result) sign = '-';
			else sign = '+';
	} 
	if(level === 3 || level === 6 || level === 5 || level === 10) sign = '*';
	if(level === 7 || level === 4) sign = '/';

	return sign;
}

export function right_res(number1,number2,sign,result){
	let right_result;
	switch(sign){
		case '+': right_result=Number((number1+number2).toFixed(1));
			break;
		case '-': right_result=(number1*10-number2*10)/10;
			break;
		case '*': right_result=Number((number1*number2).toFixed(1));
			break;
		case '/': right_result=number1/number2;
			break;
		default: result = '+';

	}
//console.log(result+'---'+right_result + ' type1 ' +typeof result + ' type2 ' +typeof right_result)
	if(result === right_result) return true;
	return false;
}

