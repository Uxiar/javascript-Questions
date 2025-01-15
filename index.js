// remove duplicate

// let arr = [12,22,11,22,33,55,99]
// let arr2 = []
// let ans = []
// for(let i = 0; i <arr.length ; i++){
//   if(!arr2.includes(arr[i])){
//     arr2.push(arr[i])
//   }else{
//     ans.push(arr[i])
//   }
// }
// console.log(ans);

//check pallindrome
// let str = "madam"
// let strReverse = str.split("").reverse().join("")
// if(strReverse===str){
//   console.log("is pallindrome");
// }
// else{
//   console.log("is not pallindrome");

// }

//largest number
// let arr= [12,33,44,77,99,100]
// let largest = -Infinity
// for(let i = 0 ; i < arr.length ; i++){
//   if(arr[i] > largest){
//     largest = arr[i]
//   }
// }
// console.log(largest);

// secound Largest
// let arr= [12,33,44,77,99,100]
// let largest = -Infinity
// let SecLargest = -Infinity
// for(let i = 0 ; i < arr.length ; i++){
//   if(arr[i] > largest){
//     SecLargest = largest
//     largest = arr[i]
//   }
// }
// console.log(largest);
// console.log(SecLargest);

//email validation
// let email = "uzairtagala120@gmail.com"
// let validation = "@gmail.com"
// if(email.includes(validation)){
//   console.log("email s valid");
// }
// else{
//   console.log("email is in valid");
// }

//prime number
// let num = 4
// for(let i = num ; i <= num ; i++){
//   let isprime = true
//   for(let j = 2 ; j < i ;j++){
//     if(i % j === 0){
//       isprime= false
//       console.log(i,"not prime");
//       break;
//     }
//   }
//   if(isprime===true){
//     console.log(i," prime");
//   }
// }

// let arr = [1,2,33,2,33,2,7,1,9,88,66,88]
// let obj = {}
// for(let i = 0 ; i < arr.length ; i++){
//   if(obj[arr[i]]){
//     obj[arr[i]]+=1
//   }else{
//     obj[arr[i]] = arr[i]
//   }
// }
// console.log(obj);

// let arr = [12,333,22,34,5,66]
// let ans = arr.reduce((acc,cur)=>{
//   return acc + cur
// })
// console.log(ans)

//factorail
// let num = 9
// let arr = []
// for(let i = 1 ; i <= num ; i++){
//   arr.push(i)
// }
// let ans = arr.reduce((acc,cur)=>{
//   return acc * cur
// })
// console.log(ans);

//fabinacci series
// let num = 9
// let PrevNum = 0
// let curNum = 1
// let series = [PrevNum,curNum]
// for(let i = 0 ; i<=num ; i++){
//   let NextNum = PrevNum + curNum
//   series.push(NextNum)
//   PrevNum = curNum
//   curNum = NextNum
// }
// console.log(series);

// let str = "almaaz"
// let str2 = "maazla"
// let sort2  =str.split("").sort().join("")
// let sort  = str2.split("").sort().join("")
// if(sort===sort2){
//   console.log("is anagram");
// }
// else{
//   console.log("is not anagrams");
// }

//vowels
// let str = "ofuiaoiagabqweuoie7yqurgbjsbvmsdvggweurtaiufyah"
// let arr = str.split("")
// let vowels = ["a","e","i","o","u"]
// let obj = {}
// for(let i = 0 ;i <arr.length ; i++){
//   if(vowels.includes(arr[i])){
//     if(obj[arr[i]]){
//       obj[arr[i]] += 1
//     }else{
//       obj[arr[i]] = 1
//     }
//   }
// }
// console.log(obj);

// let str = "almaaz"
// let str2 = "usama"
// let str3 = str.split("")
// let str4 = str2.split("")
// let str5 = [...str3,...str4]
// let ans= []
// let opt = []
// for(let i = 0 ;i < str5.length ; i++){
//     if(!opt.includes(str5[i])){
//         opt.push(str5[i])
//     }
//     else{
//         ans.push(str5[i])
//     }
// }
// console.log(ans);

// let str = "today is tuesday"
// let arr= str.split(" ")
// let res = -Infinity
// console.log(arr);
// for(let i = 0 ;i < arr.length ; i++){
//     console.log(i);
// }

// let str = "hii aftab here"
// let str2 = str.split(" ")
// let arr = []
// for(let i=0 ; i < str2.length ; i++){
//   let value = str2[i][0].toUpperCase() + str2[i].slice(1,str2[i].length)
//   arr.push(value)
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddMedian = "";
// let evenMedainNum = "";
// let evenMedainNum2 = "";
// if (arr.length % 2 === 0) {
//   let diviede = arr.length / 2;
//   evenMedainNum = arr[diviede];
//   evenMedainNum2 = arr[diviede - 1];
//   console.log("median", evenMedainNum, evenMedainNum2);
// } else {
//   let diviede = Math.floor(arr.length / 2);
//   oddMedian = arr[diviede];
//   console.log("median", oddMedian);
// }

// let a = 1;
// let b = 2;
// let c = a;
// a = b;
// b = c;
// console.log(a, b);

// let num = 4;
// for (let i = 1; i <= 10; i++) {
//   console.log(num, "*", i, "=", num * i);
// }

// let year = 2028;
// if (year % 4 === 0) {
//   console.log(year, "it is leap yaer");
// } else {
//   console.log(year, "it is not leap year");
// }


//20
// let arr = [];
// let arr2 = [];
// let nestedArr = [];
// for (let i = 0; i <= 5; i++) {
//   arr.push(i);
// }
// for (let i = 5; i <= 10; i++) {
//   arr2.push(i);
// }
// nestedArr.push(arr, arr2);
// console.log(nestedArr);



