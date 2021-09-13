describe("mock example test", () => {
    // virtual/abstraction, given by 3rd party calc(a, b) calc can be add/sub, div...

    function calculator(calc, a, b) {
        const result = calc(a, b)
        return result;
    }

    it("mock test", () => {
        //mock
        const calc = jest.fn(); //returns a mock function
        // you want to test calculator
        
        calculator(calc, 10, 20)
        // goal
        // is calc called or not
        expect(calc).toBeCalled()

        expect(calc).toBeCalledTimes(1)

        expect(calc).toBeCalledWith(10, 20)
    })
   
})
