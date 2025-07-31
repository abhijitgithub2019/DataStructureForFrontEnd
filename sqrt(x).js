function sqrt(x) {
    if(x< 2) return x;
    let low = 1;
    let high = x/2 // EX: 16 , then maximum high is half the the number
    let res = 0;
    while(low<=high) {
        let mid = Math.floor((low+high)/2);
        let v = mid*mid;
        if(v === x) return mid;
        if(v < x) {
            low = mid+1;
            res = mid;
        } else {
            high = mid-1;
        }
    }
    return res;
}

sqrt(16);