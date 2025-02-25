"use strict";

(() => {
    // pattern1: frequency counters
    // pattern2: multiple Pointers
    // pattern3: moving window




    // O(n^2) time complexity
    // function isSame(array1, array2) {
    //     if (array1.length === 0 || array2.length === 0) return false
    //     if (array1.length !== array2.length) return false
    //     for (let i = 0; i < array1.length; i++) {
    //         for (let j = 0; j < array2.length; j++) {
    //             if (array1[i] ** 2 === array2[j]) {
    //                 array2.splice(j, 1);
    //             }
    //         }
    //     }
    //     if (array2.length === 0) return true
    //     return false
    // }

    // const array1 = [1, 2, 3]
    // const array2 = [9, 1, 4]
    // console.log(isSame(array1, array2))

    // O(n) time complexity
    // function isSame(array1, array2) {
    //     if (array1.length !== array2.length) return false

    //     const frequencyCounter1 = {}
    //     const frequencyCounter2 = {}
    //     for (const val of array1) {
    //         console.log(frequencyCounter1[val])
    //         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    //     }
    //     for (const val of array2) {
    //         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    //     }
    //     for (let key in frequencyCounter1) {
    //         if (!(key ** 2 in frequencyCounter2)) {
    //             return false
    //         }
    //         console.log(frequencyCounter2[key ** 2])
    //         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
    //             return false
    //         }

    //     }
    //     console.log(frequencyCounter1)
    //     console.log(frequencyCounter2)
    //     return true
    // }
    // const array1 = [3, 5, 2, 5]
    // const array2 = [9, 25, 4, 25]
    // console.log(isSame(array1, array2))



    // another example for frequencyCounter


    // console.log(isAnagram(string1, string2))

    // function isAnagram(string1, string2) {
    //     if (string1.length !== string2.length) return false

    //     const frequencyCounter = {}

    //     for (const char of string1) {
    //         console.log(char)
    //         frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
    //     }
    //     console.log(frequencyCounter)

    //     for (const char of string2) {
    //         if (!(frequencyCounter[char] > 0)) {
    //             return false
    //         }
    //         frequencyCounter[char] -= 1
    //     }
    //     console.log(frequencyCounter)
    //     console.log(string2)

    //     return true
    // }

    // test cases: 
    // 1 - true
    // const string1 = 'iceman'
    // const string2 = 'cinema'

    // 2 false
    // const string1 = 'icemen'
    // const string2 = 'cinema'

    // 3 empty
    // const string1 = ''
    // const string2 = ''

    // 4 edge case
    // const string1 = 'aaz'
    // const string2 = 'zza'
    // console.log(isAnagram(string1, string2))


    // pattern2: Multiple Pointers: time complexity: O(n) space complexity: O(1)
    // works only on sorted arrays!

    // pseudo code
    // if array length is smaller than 2 return undefined 
    // create 2 pointers, 1 from index 0 1 from last index.
    // left = 0
    // right = n -1

    // while left < right:

    // let sum = left + right
    // if sum === 0
    // return array of [array[left], array[right]]

    // else if sum > 0
    // right --

    // else left ++

    // return the an array of the first pair or undefined


    // code example of Multiple Pointers
    // function isSumZero(array) {
    //     if (array < 2) return;

    //     let left = 0
    //     let right = array.length - 1
    //     while (left < right) {
    //         console.log(array[left], array[right])
    //         let sum = array[left] + array[right]
    //         if (sum === 0) {
    //             return [array[left], array[right]]
    //         }
    //         else if (sum > 0) {
    //             right--
    //         }
    //         else {
    //             left++
    //         }
    //     }
    // }
    // test cases:
    // case 1: true
    // const array1 = [-12, -10, -5, -3, 0, 1, 2, 5, 6, 7, 9, 11]

    // case 2: false
    // const array1 = [-3, -2, -1, 0]

    // case 3: empty
    // const array1 = []

    // case 4: edge case - not sorted array? ask the interviewer
    // const array1 = [-3, -2, -1, 0, 1, 2]
    // console.log(isSumZero(array1))

    // another example of countUniqueValues
    // we can use for loop as well!! instead of the while.
    // with j variable running on the whole array
    // function countUniqueValues(array) {
    //     if (array.length === 0) return 0
    //     if (array.length === 1) return 1

    //     let left = 0
    //     let right = 1
    //     while (right < array.length) {
    //         if (array[left] !== array[right]) {
    //             left++;
    //             array[left] = array[right]
    //             right++;

    //         } else {
    //             right++
    //         }
    //     }
    //     return left + 1
    // }
    // // test cases:
    // // 1 - normal
    // const array = [1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 6]

    // // 2- without duplication
    // // const array = [1, 2, 3, 4, 5, 6]

    // // 3- empty
    // // const array = []
    // console.log(countUniqueValues(array))


    // 3. moving window
    // example for moving window
    function maxSubarraySum(arr, num) {
        let maxSum = 0;
        let tempSum = 0;
        if (arr.length < num) return null

        for (let i = 0; i < num; i++) {
            maxSum += arr[i] 
        }
        tempSum = maxSum
        for (let j = num; j < arr.length; j++) {
            tempSum = tempSum - arr[j - num] + arr[j]
            maxSum = Math.max(tempSum, maxSum)
        }
        return maxSum
    }

    console.log(maxSubarraySum([1,2,3,4,5,6,7,6,6,5,4,3,2,4,5,6,7,8,9,6,5,3,4,5,6], 2))
})()