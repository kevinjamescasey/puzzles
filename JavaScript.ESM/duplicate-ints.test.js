import findDuplicates from './duplicate-ints.js'

test('retuns the integers that are duplicated', () => {
    expect(findDuplicates([1,2,3,1])).toEqual(new Set([1]))
    expect(findDuplicates([1,2,3])).toEqual(new Set())
    expect(findDuplicates([1,2,3,1,1])).toEqual(new Set([1]))
    expect(findDuplicates([1,2,3,3,2,1])).toEqual(new Set([1,2,3]))
})