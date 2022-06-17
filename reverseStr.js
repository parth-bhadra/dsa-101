function reverseStr (str) {
    /* console.log(str);
    console.log(str.length);
    console.log(str[0]); */
    let revStr=[];
    for(let i=0; i<str.length-1; i++)
        revStr[i] = str[str.length-1-i];
    return revStr.join('');
}

console.log(reverseStr('hi I am Parth'));