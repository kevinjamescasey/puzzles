function findDuplicates(a) {
    const duplicates = new Set()
    const seen = new Set()
    for(const e of a){
        if(seen.has(e)){
            duplicates.add(e)
        } else {
            seen.add(e)
        }
    }
    return duplicates
}
export default findDuplicates