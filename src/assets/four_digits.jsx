
const generate_Arr_numerator = () => {
  let arr = [];
  for (let i = 0; i < 100; i++) { // 100 for example
    let item = Math.floor(Math.random() * 10);
    if (item!==0){arr.push(item);}
  };
  return arr;
}
 /* 
const generate_Arr_Second_numerator = () => {
  let arr = [];
  for (let i = 0; i < 100; i++) { // 100 for example
    let item = Math.floor(Math.random() * 10);
    if (item!==0){arr.push(item);}
  };
  return arr;
}
*/

const generate_Arr_denomerator = (first_numerator) => {
  let arr = [];
  for (let i = 0; i < 100; i++) { // 100 for example
    let item = Math.floor(Math.random() * 10);
    if (item !== 0 && item !== 1 && first_numerator%item !== 0){arr.push(item);}
  };
  return arr;
}


function getSample(arr){
  const indx = Math.floor(Math.random() * arr.length);
return arr[indx]
}



 const get_Numerator = () => {
  let arr = generate_Arr_numerator();
  let first_number = getSample(arr)
  
return first_number;
}


 const get_Denominator = (first_number) => {
  let arr = generate_Arr_denomerator(first_number)
  let second_number = getSample(arr)

return second_number;
}




 export function get_Fraction(){
  let fraction = '';
  let numerator
   numerator =  get_Numerator()
   fraction = numerator+'/'+get_Denominator(numerator)

   return fraction

}


