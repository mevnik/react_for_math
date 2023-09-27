const useTask = (level) => {
	let sign,first_number,second_number;
	if(level === 1) {
		sign = Sign(2);
		first_number = First_number(6);
		second_number = Second_number(9);

	return [first_number,second_number,sign]
	}
	else return []

}