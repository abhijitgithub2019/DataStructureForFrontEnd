let nums = [-1,0,1,2,-1,-4] , target = 0, duplicateObj= {};

nums.sort((a,b)=> a-b);
let arr =[];
for(let i =0; i< nums.length; i++) {
    let m = new Map();
    let d = target - nums[i]; //1 
    for(j= i+1; j < nums.length; j++) {
        let d1 = d-nums[j]; // 
        let key = nums[i].toString() + nums[j].toString() + d1.toString();
        if(m.has(d1) && duplicateObj[key] === undefined) {
            arr.push([nums[j], nums[i], d1] );
            duplicateObj[key] = 1;
        } else {
            m.set(nums[j], j)
        }
    }
}

console.log(arr);
