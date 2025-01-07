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
let str = "ofuiaoiagabqweuoie7yqurgbjsbvmsdvggweurtaiufyah"
let arr = str.split("")
let vowels = ["a","e","i","o","u"]
let obj = {}
for(let i = 0 ;i <arr.length ; i++){
  if(vowels.includes(arr[i])){
    if(obj[arr[i]]){
      obj[arr[i]] += 1
    }else{
      obj[arr[i]] = 1
    }
  }
}
console.log(obj);



