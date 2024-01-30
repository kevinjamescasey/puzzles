import bubbleSort from './bubble-sort-ints'
import inserstionSort from './insertion-sort-ints'

test.each([bubbleSort, inserstionSort])('%p sorts the given array in ascending order', (sort) => {
    expect(sort([3,2,1])).toEqual([1,2,3])
    expect(sort([1,2,3])).toEqual([1,2,3])
    expect(sort([0])).toEqual([0])
    expect(sort([1,1,1,1])).toEqual([1,1,1,1])
    expect(sort([9, 5, 1])).toEqual([1,5,9])
})