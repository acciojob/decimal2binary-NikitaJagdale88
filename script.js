// function threeSum(arr, target){
// }
// module.exports = threeSum;

function decToBin(num){

	let pow=1;
	let bin=0;

	while(num!=0){
		let rem=num%2;
		bin=bin+rem*pow;
		pow=pow*10;
		num=parseInt(num/2);
	}
	return bin;
}

module.exports=decToBin;