import AgeCalculator from "./index"

describe("AgeCalculator", ()=>{
    const ageCalculator = new AgeCalculator(Mercury, Venus, Mars, Jupiter)

    Test("it should check Mercury, Venus, Mars, Jupiter", ()=>{
        expect(ageCalculator.Mercury).toEqual(Mercury);
        expect(ageCalculator.Venus).toEqual(Venus);
        expect(ageCalculator.Mars).toEqual(Mars);
        expect(ageCalculator.Jupiter).toEqual(Jupiter);
    })
   
})
