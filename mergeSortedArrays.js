function mergeSortedArrays(a1, a2) {
    let a3 = [];
    let i, j;
    for (i = 0, j = 0; i < a1.length && j < a2.length;) {
        if (a1[i] <= a2[j]) {
            a3.push(a1[i]);
            i++;
            if(i == a1.length) a3.push(a2[j])
        } else {
            a3.push(a2[j])
            j++;
            if(j == a2.length) a3.push(a1[i])
        }
    }
    console.log(a3);

}
mergeSortedArrays( [4, 6, 30], [0, 3, 4, 31]);