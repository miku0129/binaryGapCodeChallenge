# Binary Gap Coding Challenge
## Find longest sequence of zeros in binary representation of an integer.

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example 
* The number `9` has binary representation `1001` and contains a binary gap length of __2__. 
 
```
64  32  16  8   4   2   1   =   Binary Reference
-------------------------   
0   0   0   1   0   0   1   =   Binary Output
```

*  The number `529` has binary representation `1000010001` and contains two binary gaps: one of length __4__ and one of length __3__. 
*  The number `20` has binary representation `10100` and contains one binary gap of length __1__. 
*  The number `15` has binary representation `1111` and has no binary gaps. 
*  The number `32` has binary representation `100000` and has no binary gaps.
 
Write a function:

```js    
function solution(N) {
    // your code
}
```

that, given a positive integer N, returns the length of its longest binary gap. 

* The function should return __0__ if N doesn't contain a binary gap. 
* For example, given N = 1041 the function should return 5, 
* because N has binary representation `10000010001` and so its longest binary gap is of length __5__. 
* Given N = 32 the function should return __0__, because N has binary representation `100000` and thus no binary gaps. 

Write an efficient algorithm for the following assumptions:
* N is an integer within the range `[1..2,147,483,647]`.

__To Start:__ 
```
yarn install
```
__To Test:__ 
```
yarn test
```