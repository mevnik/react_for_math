import {Levels} from './exercises';
import {get_Numerator,get_Denominator} from './two_digits';
import {get_Fraction} from './four_digits';




/*  создаем глобальные переменные */

let first_number;
let second_number;
let sign;
let result;

/*-------------------------*/
/*
	{id:1,text:"lev 1  -,+  < 10",ceil:2,floor:1},
  {id:2,text:"lev 2  -,+  < 100",ceil:3,floor:2},
  {id:3,text:'lev 3  *  < 100',ceil:4,floor:3},
  {id:4,text:"lev 4  /  <100",ceil:5,floor:4},
  {id:5,text:'lev 5  *  < 700',ceil:6,floor:5},
  {id:6,text:'lev 6  *  < 1000',ceil:7,floor:6},
  {id:7,text:"lev 7   /  < 1000",ceil:8,floor:7},
  {id:8,text:"lev 8   * , /   mix <1000",ceil:8,floor:5},
  {id:9,text:"lev 9  -,+  decimal <100",ceil:10,floor:9},
  {id:10,text:"lev 10  * decimal <100",ceil:11,floor:10},
 	{id:11,text:"lev 11  fractions", ceil:12,floor:11},

*/

const levelRange = (level) => {

  let ceil = Levels.find((item) => item.id === level).ceil;
  let floor = Levels.find((item) => item.id === level).floor;
  return[ceil,floor]
}


export function getTask(level){
       
       const range = levelRange(level)

		const exercise = Math.floor(Math.random() * (range[0]-range[1])) + range[1];
		//здесь мы для некоторых уровней упражнение выбираем случайным образом из нескольких возможных

if(exercise === 11){
	first_number = get_Fraction()
	second_number = get_Fraction()
	sign = get_Sign(exercise,first_number,second_number)
		return [first_number,second_number,sign]

}

		result = get_Result(exercise)
		//first_number = get_First_Number(exercise,result)
		first_number = get_First_Number(exercise)
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
			//result нужен только в упражнениях с + и - ;
			//в остальных случаях значения не имеет, поэтому 1 это чисто формальное значение
	}

	return result
}

//function get_First_Number(level,result = 0){
function get_First_Number(level){

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
	}
	if(level === 9) {
		if(sign === '+') second_number = (result*10 - first_number*10)/10;
		if(sign === '-') second_number = (first_number*10 - result*10)/10;
		
	}
	if(level === 10) second_number = Math.ceil(Math.random()*9);	

	return second_number;
}

function get_Sign(level = 1,first_number,result = 1){
	let sign; 

	if(level <= 2 || level === 9) {
		if(first_number > result) sign = '-';
			else sign = '+';
	} 
	if(level === 3 || level === 6 || level === 5 || level === 10) sign = '*';
	if(level === 7 || level === 4) sign = '/';
	if(level === 11){
		if (Number(first_number[0])/Number(first_number[2]) < Number(result[0])/Number(result[2])) sign = '+'
			else {
					let probe = Math.floor(Math.random()*4);
					if(probe === 0) sign = '+'
						else sign = '-'
			}
	}

	return sign;
}

export function right_res(number1,number2,sign,result){
	let right_result;
	switch(sign){
		case '+': right_result=Number((number1+number2).toFixed(1));
			break;
		case '-': right_result=Number(((number1*10-number2*10)/10).toFixed(1));
			break;
		case '*': right_result=Number((number1*number2).toFixed(1));
			break;
		case '/': right_result=Number((number1/number2).toFixed(1));
			break;
		default: right_result = 1;

	}
	if(Number((result.toFixed(1))) === right_result) return true;
	return false;
}

