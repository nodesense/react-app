const { interval } = require("rxjs")

 
// react/jest shall run only focused test
xdescribe("focused test", () => {
    xit("focused math test", () => {
        expect(1 - 1).toBe(2)
    })
})

