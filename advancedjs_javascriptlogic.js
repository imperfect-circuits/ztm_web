/**
 * Question 1
 * Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
 * make a function that organizes these into individual array that is ordered. For
 * example answer(ArrayFromAbove) should
 * return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it
 * organizes strings differently from number types. i.e. [1, "2", "3", 2] should
 * return [[1,2], ["2", "3"]]
 * @param {(number|string)[]} inputArray
 * @param {boolean} doBonus
 *  */ 
function cleanTheRoom(inputArray, doBonus) {
    // exit if empty
    if (inputArray.length == 0) {
        return [];
    }
    // sort first
    inputArray.sort((a,b) => {
        if (typeof a == typeof b) {
            if (typeof a == "string") {
                let a_ = parseInt(a);
                let b_ = parseInt(b);
                return a_ - b_;
            }
            else {
                return a - b;
            }
        }
        else if (typeof a == "string") {
            return 1;
        }
        else {
            return -1
        }
    });

    // group by number
    /** @type (number|number[])[] */
    let grouped = [inputArray[0]];
    let counter = 1;
    for (let i = 1; i < inputArray.length; i++) {
        let typeOfCurrent = typeof grouped[counter-1];
        let valueOfCurrent = typeOfCurrent == "number" ? grouped[counter-1] : grouped[counter-1][grouped[counter-1].length - 1];
        // if the same, value, add to array
        if ((!doBonus && valueOfCurrent === inputArray[i]) || (doBonus && typeof valueOfCurrent == typeof inputArray[i])) {
            // convert existing element to array if there was only one before
            if (typeOfCurrent == "number" || typeOfCurrent == "string") {
                grouped[counter-1] = [grouped[counter-1]];
            }
            grouped[counter-1].push(inputArray[i]);
        }
        // else, append new item
        else {
            counter++;
            grouped.push(inputArray[i]);
        }
    }
    return grouped;
}
console.log(cleanTheRoom([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], false));
console.log(cleanTheRoom([1, "2", "3", 2], true));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
/**
 * Question 2
 * Write a javascript function that takes an array of numbers and a target number.
 * The function should find two different numbers in the array that, when added together,
 * give the target number. For example: answer([1,2,3], 4) should return [1,3]
 * Question ambiguous, so will return the values, not the indexes
 * @param {number[]} inputArray
 * @param {number} targetNumber 
 */
function findSumTargets(inputArray, targetNumber) {

    let first = 0;
    let second = 0;

    // first create unique set of numbers
    let newArray = Array.from(new Set(inputArray));
    console.log('searching for '+targetNumber+' with the set '+newArray);

    // perform search
    let searchDone = false;
    for (first = 0; first < newArray.length - 1; first++) {
        for (second = first; second < newArray.length; second++) {
            console.log(`loop ${first} ${second}`)
            // match found, set bool so can break out of loop, and break
            if (newArray[first]+newArray[second] == targetNumber) {
                console.log('found');
                searchDone = true;
                break;
            }
        }
        // search found in inner loop, break
        if (searchDone) {
            console.log('exit second');
            break;
        }
    }

    // return empty if no match found, otherwise the array of numbers
    return !searchDone ? [] : [newArray[first],newArray[second]];
}

console.log(findSumTargets([1,2,3], 4));
console.log(findSumTargets([1,2,6,1,9,6,3], 4));
console.log(findSumTargets([1,2,6,1,8,6,3], 14));

/**
 * Question 3
 * Write a function that converts HEX to RGB. Then Make that function auto-detect the
 * formats so that if you enter HEX color format it returns RGB and if you enter RGB
 * color format it returns HEX
/
/**
 * 
 * @param {string} input 
 */
function hexCharToInt(input){
    if (input >= '0' && input <= '9') {
        return parseInt(input);
    }
    else {
        switch(input) {
            case 'A':
                return 10;
            case 'B':
                return 11;
            case 'C':
                return 12;
            case 'D':
                return 13;
            case 'E':
                return 14;
            case 'F':
                return 15;
        }
    }
}
/**
 * 
 * @param {number} input 
 * @returns 
 */
function intToHexChar(input){
    if (input >= 0 && input <= 9) {
        return input.toString();
    }
    else {
        switch(input) {
            case 10:
                return 'A';
            case 11:
                return 'B';
            case 12:
                return 'C';
            case 13:
                return 'D';
            case 14:
                return 'E';
            case 15:
                return 'F';
        }
    }
}
/**
* Convert hex string to rgb
* @param {string} hexInput (#AA5498)
* @returns {string} (space separate three numbers)
*/
function hexToRgb(hexInput) {
   let inputs = [hexInput.substring(1,3), hexInput.substring(3,5), hexInput.substring(5,7)];
   let outputs = inputs.map(input => {
    //    return hexCharToInt(input.substring(0,1))*16+hexCharToInt(input.substring(1,2));
        return parseInt(input.substring(0,1), 16)*16 + parseInt(input.substring(1,2), 16);
   });

   return outputs.join(' ');
}
/**
 * Convert rgb to hex string
 * @param {string} rgbInput (space separate three numbers)
 * @returns {string}
 */
function rgbToHex(rgbInput) {
    let inputs = rgbInput.split(' ');
    let outputs = inputs.map(input => {
        let fullNumber = parseInt(input);
        let partA = Math.round(fullNumber/16,0);
        return intToHexChar(partA)+intToHexChar(fullNumber - partA*16);
    });

    return "#"+outputs.join();
}

/**
 * 
 * @param {string} input 
 * @returns 
 */
function autoHexRGBConverter(input) {
    return input.substring(0,1) == '#' ? hexToRgb(input) : rgbToHex(input);
}

let inputs = ['#4FA307','122 213 34','7 15 16'];
for (input of inputs) {
    console.log(autoHexRGBConverter(input));
}

