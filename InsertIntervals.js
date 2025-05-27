// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]

// let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];

let intervals  =[[1,5]], newInterval = [5,7]


function getInsertIntervals(intervals, newInterval) {
    let i =0, n = intervals.length, arr =[];
    while(i<n && intervals[i][1]< newInterval[0]) {
        arr.push(intervals[i]);
        i++;
    }

    while(i<n && intervals[i][0]<= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++;
    }
    arr.push(newInterval);
    while(i<n) {
        arr.push(intervals[i]);
        i++;
    }

    console.log(arr);
}

getInsertIntervals(intervals, newInterval);