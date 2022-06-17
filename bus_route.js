function route(input1, input2, input3) {
    debugger;
	let startingOptions = [];
    for (let i = 0; i < input2; i++) {
        if (input3[i][0] === 0 && input3[i][1] !== 0) {
            startingOptions.push(input3[i]);
        } else if (input3[i][1] === input1) {
            return i;
        }
    }
    if (startingOptions.length === 0) {
        return -1;
    }
    else {
        // for each of the starting input's ending point, say A,
        // compatible route with starting point less than or equal to A needs to be picked up
        // calculate time considering if bus changed or not
        // keep iterating until total hits input1 - 1
        let minTime = [];
        for (let j=0; j<startingOptions.length; j++){
            minTime.push(0);
        }

        for (let j=0; j<startingOptions.length; j++){
            // think recusrion
            // skip routes that are part of startingOptions - optimisation
            function routeRecursion(startingOption) {
                // base case
                for (let k=0; k<input2; k++){
                    // the base case
                    if(startingOption[1] === input1 - 1) {
                        minTime[j] = 1;
                        return minTime[j];
                    }
                    // the recursive case
                    if (input3[k][0] === startingOption[1] && input3[k][1] !== startingOption[0]) {
                        if (input3[k][2] != startingOption[2]){
                            // minTime[j] = 1 + input3[k][0] - startingOption[0] + routeRecursion(input3[k]);
                            minTime[j] = 1 + 1 + routeRecursion(input3[k]);
                            return minTime[j];
                        } else {
                            // minTime[j] = input3[k][0] - startingOption[0] + routeRecursion(input3[k]);
                            minTime[j] = 1 + routeRecursion(input3[k]);
                            return minTime[j];
                        }
                    }
                    // if not able to reach the end
                    if (k === input2 - 1 && startingOption[1] !== input1 - 1) {
                        minTime[j] = 999; // very large number
                        return minTime[j];
                    }
                }
            }
            routeRecursion(startingOptions[j]);
        }
        
        let min = minTime[0];        
        for (let m=1; m<minTime.length; m++){
            if(minTime[m]<min) {
                min=minTime[m];
        }
        if(minTime>=999) {
            return -1;
        } else { 
            return minTime;
        }
        
    }
    // Expected return type  :
        // output1 As Number eg:- 23
    // Write code here...
    throw "UnsupportedException route(input1,input2,input3)";
    }
}