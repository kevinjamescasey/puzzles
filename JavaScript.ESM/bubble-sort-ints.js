/*
keep finding the largest element in the unsorted part and adding it to the front of the sorted part
*/
function bubbleSort(a) {
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length - 1 - i; j++) {
            if(a[j] > a[j + 1]) {
                const temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
            }
        }
    }
    return a
}
export default bubbleSort