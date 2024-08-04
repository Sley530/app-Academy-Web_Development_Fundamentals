function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    const oddIndices = [];
    for (let i = 1; i < arr.length; i += 2) {
        oddIndices.push(arr[i]);
    }
    return oddIndices;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    const oddReverse = [];
    for (let i = arr.length - 1; i >= 1; i--) {
        if (i % 2 !== 0) {
            oddReverse.push(arr[i]);
        }
    }
    return oddReverse;
}


function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    const secondPower = [];

    for (let i = 2; i < arr.length; i++) {
            if (arr[i ** 2] === undefined) {
                break;
            }
            secondPower.push(arr[i ** 2]);
        }
    return secondPower;
}
console.log(secondPower([1, 2, 3, 4]));
function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    const nthPower = [];
    for (let i = 0; i < arr.length; i++) {
        if (Math.pow(n, i) === i) {
            nthPower.push(arr[i]);
        }
    }
    return nthPower;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    const firstHalf = [];
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        firstHalf.push(arr[i]);
    }
    return firstHalf;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    const secondHalf = [];
    for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
        secondHalf.push(arr[i]);
    }
    return secondHalf;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
