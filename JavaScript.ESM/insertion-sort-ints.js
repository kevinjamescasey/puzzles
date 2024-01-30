/* 
keep finding the proper place in the sorted part for the next element from the unsorted part
every element in the sorted part greater than the next element has to be shifted right to open a position to insert the next element
*/
function insertionSort(a) {
    for(let m = 1; m < a.length; m++){
        let n = m
        while( n > 0 && a[n] < a[n - 1]){
            const temp = a[n]
            a[n] = a[n - 1]
            a[n - 1] = temp
            n--
        }
    }
    return a
}
export default insertionSort