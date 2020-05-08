
describe("map(numbers, operation)", () => {
    it("Debe devolver cada número duplicado(numbers, operation)", () => {
        const numbers = [1, 2, 3]
        const result = map(numbers, duplicar)

      expect(result).to.be.eql([2, 4, 6]) // aserción
    })
})

describe("filter(numbers, operation)", () => {
    it("Debe devolver 'true' si el número es múltiplo de 10 (numbers, operation)", () => {
        const numbers = [1050]
        const result = multiploDe10(numbers)

    expect(result).to.be.true // aserción
    })
    it("Debe devolver 'false' si el número no es múltiplo de 10 (numbers, operation)", () => {
        const numbers = [1027]
        const result = multiploDe10(numbers)

    expect(result).to.be.false // aserción
    })
    it("Debe devolver los números que sean múltiplos de 10 (numbers, operation)", () => {
        const numbers = [10, 2, 3, 40, 33, 50]
        const result = filter(numbers, multiploDe10)

    expect(result).to.be.eql([10, 40, 50]) // aserción
    })
})


describe("every(numbers, operation)", () => {
    it("Debe devolver 'true' si todos los números son positvos(numbers, operation)", () => {
        const numbers = [1, 2, 3]
        const result = every(numbers, esPositivo)

        expect(result).to.be.true  // aserción
    })
    it("Debe devolver 'false' si al menos un números es negativo (numbers, operation)", () => {
        const numbers = [195, -29, 36]
        const result = every(numbers, esPositivo)

        expect(result).to.be.false  // aserción
    })
    it("Debe devolver 'true' todos los números son múltiplo de 10 (numbers, operation)", () => {
        const numbers = [1950, 290, 360]
        const result = every(numbers, multiploDe10)

        expect(result).to.be.true  // aserción
    })
    it("Debe devolver 'false' si algún número no es múltiplo de 10 (numbers, operation)", () => {
        const numbers = [1950, 295, 360]
        const result = every(numbers, multiploDe10)

        expect(result).to.be.false  // aserción
    })
})

describe("some(numbers, operation)", () => {
    it("Debe devolver 'true' si al menos uno de los números es positvos(numbers, operation)", () => {
        const numbers = [1, -2, 3]
        const result = some(numbers, esPositivo)

        expect(result).to.be.true  // aserción
    })
    it("Debe devolver 'false' si todos los números son negativos(numbers, operation)", () => {
        const numbers = [-195, -29, -36]
        const result = some(numbers, esPositivo)

        expect(result).to.be.false  // aserción
    })
    it("Debe devolver 'true' si al menos un número es múltiplo de 10 (numbers, operation)", () => {
        const numbers = [1950, 296, 362]
        const result = some(numbers, multiploDe10)

        expect(result).to.be.true  // aserción
    })
    it("Debe devolver 'false' si ningún número es múltiplo de 10 (numbers, operation)", () => {
        const numbers = [1957, 294, 362]
        const result = some(numbers, multiploDe10)

        expect(result).to.be.false  // aserción
    })

})

describe("find(numbers, operation)", () => {
    it("Debe devolver 'true' si todos los números son múltiplo de 10 (numbers, operation)", () => {
        const numbers = [80, 290, 30, 40, 330, 50]
        const result = find(numbers, multiploDe10)

        expect(result).to.be.true  // aserción
    })
    it("Debe devolver 'udefinded' si al menos un número no es true (numbers, operation)", () => {
        const numbers = [8, 2, 3, 40, 33, 50]
        const result = find(numbers, multiploDe10)

        expect(result).to.be.undefined  // aserción
    })
})

describe("findIndex(numbers, operation)", () => {
    it("Debe devolver el índice[i] del primer elemento 'true' que sea múltiplo de 10 (numbers, operation)", () => {
        const numbers = [83, 26, 3, 407, 33, 502, 70]
        const result = findIndex(numbers, multiploDe10)

        expect(result).to.eql('6')  // aserción
    })
    it("Debe devolver el undefined sin ningún número es múltiplo de 10 (numbers, operation)", () => {
        const numbers = [83, 26, 3, 407, 33, 502]
        const result = findIndex(numbers, multiploDe10)

        expect(result).to.be.undefined  // aserción
    })
})







