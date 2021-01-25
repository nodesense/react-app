describe("deffered interval test", () => {
    it ("delay after 2 second, then perform the test", (done) => {
        console.log("Running test")
        setTimeout(() => {
            console.log("Into test")
            expect(99 + 1).toBe(100)
            // the actual test is getting completed after a period of time. async code
            done(); // this tell jest that test case is completed
        }, 1000)
        console.log("Completed the test")
    })
})
