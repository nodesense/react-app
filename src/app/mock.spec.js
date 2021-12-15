
// write test case for calc
// set the scope
    // what is in scope, test only calc, not testing fn, what is does
    // calc should call fn 1 time, with a and b unchanged
    // return the result

function calc(fn, a, b) {
     const result = fn(a, b)
      
    return result;
}

describe("calc test", () => {
    it("mock test", () => {
        const mock = jest.fn() // create a mock
        const result = calc(mock, 10, 20)
        // test should focus on fn should called, with 10, 20
        expect(mock).toBeCalled() 
        expect(mock).toBeCalledTimes(1)
        expect(mock).toBeCalledWith(10, 20)
    })
})
