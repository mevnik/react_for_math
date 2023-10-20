
const generate_Arr_First_numbers = (maxNumber) => {
  let arr = [];
  for (let i = 0; i < maxNumber; i++) {
    let item = Math.ceil(Math.random() * maxNumber);
    if(!isSimple(item)) arr.push(item);
  };
  return arr;
}
  
const generate_Arr_Second_numbers = (first_number) => {
  let arr = [];
  for (let i = 2; i < first_number; i++) {
    if(first_number%i === 0)arr.push(i)
  }
  return arr;
}

function getSample(arr){
  const indx = Math.floor(Math.random() * arr.length);
return arr[indx]
}

const isSimple  = (number) => {
  for (let i = 2; i < number; i++){
    if (number%i === 0) return false;
  }
return true;
}

export const get_Numerator = (maxNumber) => {
  let x = generate_Arr_First_numbers(maxNumber);
  let first_number = getSample(x)
  
return first_number;
}


export const get_Denominator = (first_number) => {
  let x = generate_Arr_Second_numbers(first_number)
  let second_number = getSample(x)

return second_number;
}


