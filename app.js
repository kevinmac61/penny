const myfunc = function theTotal() {
    const days = 30
    let tote = .01
    let dbld = .01
    console.log(`The day is 1 and your total dollars are $${tote}`)
    for (let index = 1; index < days; index++) {
        tote = tote + (dbld * 2);
        some = tote *1
        console.log(`The day is ${index + 1}. The penny doubled amount for this day is $${dbld}. Your penny doubled plus the previous day's total is $ ${tote}.`)
        dbld = dbld * 2
    }
}