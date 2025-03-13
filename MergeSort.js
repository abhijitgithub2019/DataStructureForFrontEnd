//Merge Sort is a divide and conquers algorithm
let arr=[4,2,1,6,7, 9, 12, 21, 10, 3];
//Time Complexity: O(nlogn) 

function merge(arr) {
    if(arr.length <2 ) {
        return arr;
    }
    //find out the mid of the array
    const mid = Math.floor(arr.length/2);
    // now divide the array into left and rigfh
    const lSideArr = merge(arr.slice(0,mid));
    const rSideArr = merge(arr.slice(mid, arr.length));
    return mergeSort(lSideArr, rSideArr) // sort the array

}

function mergeSort(l , r) {
    if(l && r) {
        let c =[];
        while(l.length && r.length) {
            if(l[0] < r[0]) {
                c.push(l.shift()) 
                // It will pop the first value of l
            } else {
                c.push(r.shift()) 
            }
        }
        while(l.length) {
            c.push(l.shift()) 
        }

        while(r.length) {
            c.push(r.shift()) 
        }
        return c;
    }
}

console.log(merge(arr));