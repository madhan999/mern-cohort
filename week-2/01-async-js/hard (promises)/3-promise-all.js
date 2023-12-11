/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, t)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, t)
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, t)
    })
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    var promises = []
    promises.push(wait1());
    promises.push(wait2());
    promises.push(wait3());
    Promise.all(promises).then(()=>{
        const end = Date.now();
        const difference = end - start;
        return difference
    })
}

module.exports = calculateTime;
