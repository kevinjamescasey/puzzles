from merge_sort import merge_sort

def test_merge_sort():
    assert merge_sort([3,2,1]) == [1,2,3]
    assert merge_sort([1,2,3]) == [1,2,3]
    assert merge_sort([0]) == [0]
    assert merge_sort([1,1,1,1]) == [1,1,1,1]
    assert merge_sort([9,5,1]) == [1,5,9]
    