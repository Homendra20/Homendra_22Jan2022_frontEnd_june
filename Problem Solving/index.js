// https://leetcode.com/problems/merge-sorted-array/

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

function margeSortArray(nums1, nums2) {
     let merged = [];
    let i = 0;
    let j = 0;
    let k = 0;
     while (k < (nums1.length + nums2.length)) {
        let isnums1 = i >= nums1.length;
        let isnums2 = j >= nums2.length;
        if (!isnums1 && (isnums2 || (nums1[i] < nums2[j]))) {
            merged[k] = nums1[i];
            i++;
        } else {
            merged[k] = nums2[j];
            j++
        }
        k++
    }
    return merged;
}
const result =margeSortArray([1, 2, 3, 0, 0, 0], [2, 5, 6]);
console.log(result);


//////////////////////////////


function sortColors(arr) {

   for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    return arr;
}
const store=sortColors( [2,0,2,1,1,0]);
console.log(store);

///////////////////////////

// https://leetcode.com/problems/longest-consecutive-sequence/

function sortArray(arr) {
    count = 1;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1] === arr[i] + 1){
            count = count + 1;
        }
    }
return count;
}
const res =sortArray([0,3,7,2,5,8,4,6,0,1]);
 console.log(res);

////////////////////////////////


// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

function maxprofit(prices) {
    let totalProfit = 0;
    let perdayProfit;

    for (let i = 0; i < prices.length; i++) {
        perdayProfit = prices[i + 1] - prices[i];
        if (prices[i + 1] - prices[i] > 0) {
            totalProfit = totalProfit + perdayProfit;
        }
    }
    return totalProfit;
}

const getPrice=maxprofit([7, 1, 5, 3, 6, 4]);
console.log(getPrice);

/////////////////////////////////

function rightRotate(arr, n) {
    let empty = [];
    for (let i = n - 1; i < arr.length; i++) {
        empty.push(arr[i]);
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < n) {
            empty.push(arr[j]);
        }
    }
    return empty;
}
const rotate =rightRotate([1, 2, 3, 4, 5], 3);
console.log("empty", rotate);

//////////////////////////

// https://leetcode.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function(nums, k) {
    let temp;
   for(let a = 1; a < nums.length; a++){
       for(let b = a; b < nums.length; b++){
            if(nums[a] < nums[b]){
                temp = nums[a];
                nums[a] = nums[b]
                nums[b] = temp
            }
     }
   }

   return nums[k - 1];
};

const largest=findKthLargest([3,2,1,5,6,4], 2)
console.log(largest);



// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]



function threeSum(nums) {
    var results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] != nums[j] != nums[k]) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                            results.push([nums[i],nums[j],nums[k]]);
                            results[results.length-1]
                    }
                }
            }
        }
    }
    return results;
};

const getSum=threeSum( [-1, 0, 1, 2, -1, -4]);
console.log(getSum);

/////////////////////////////


