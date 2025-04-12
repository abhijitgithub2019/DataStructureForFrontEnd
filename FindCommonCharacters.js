// 1002. Find Common Characters
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

let m = new Map();
    let minHash;
    let c = 0;
    words.forEach((w) => {
        for (let c of w) {
            if (!m.has(c)) {
                m.set(c, 1)
            } else {
                m.set(c, m.get(c) + 1);
            }
        }
        if (c !== 0) {
            minHash.forEach((v, k) => {
                if (m.has(k)) {
                    minHash.set(k, Math.min(m.get(k), minHash.get(k)));
                } else {
                    minHash.delete(k);
                }

            })
        } else {
            minHash = new Map(m);

        }
        c++;
        m.clear();
    });
    let arr = [];
    minHash.forEach((v, key) => {
        while (v !== 0) {
            arr.push(key);
            v--;
        }
    })
    return arr;