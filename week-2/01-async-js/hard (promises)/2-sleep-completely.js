/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(async(resolve, reject) => {
        await delay(milliseconds).then(()=>{
            resolve()
        })
    })
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
module.exports = sleep;
