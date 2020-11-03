/**
 * @Title Binary Gap Coding Challenge
 * @link https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 * @param {Number}
 * @returns {Number} 
 */

 //note num.toString(2) convert the number to binary number if the number is positive 
function solution(N) {
    // your code here
    //N is positive number. Convert N to binary number
    const binaryNum = N.toString(2)
    //exclude the case that end with 0 
    let counter = 0 
    for ( let i=binaryNum.length-1; i<binaryNum.length; i-=1 ){ 
        if(binaryNum[i]==="0"){
            counter +=1; 
            } else {
                break
            }
    }
    let slicedBinaryNum = binaryNum.slice(0, binaryNum.length-(counter+1));

    //split the string with "1"
    let tempArray = slicedBinaryNum.split("1"); 
    let lengthOfBinaryNums = tempArray.map(el => {return el.length});
    return result = Math.max(...lengthOfBinaryNums)
}

module.exports = {
    solution
}