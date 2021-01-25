
describe("Test Suite", () => {
    // invoked before every test case in this test suite
    let total = 0;
    beforeEach(() => {
        // create/assign resource
        // create mock..
        console.log("***beforeEach test")
        total = 0;
    })

    // use the resource
    it("calc test", () => {
        console.log("***calc test")
        total = 10  + 20
        expect(total).toBe(30)
    })


    // use the resource
    it("calc test2", () => {
        console.log("***calc test2")
        total = -10  + -20
        expect(total).toBe(-30)
    })

    // invoked after every test case
    afterEach(() => {
        // release the stub or resources, or mocks you create 
        // clean up
        total = 0;
        console.log("***afterEach test")
    })
})
