from merge_sorted_linked_lists import merge
from collections import deque

def merge_lists(l1,l2):
    return list(merge(deque(l1), deque(l2)))

def test_merge_sorted_linked_lists():
    assert merge_lists([1,3], [2,4]) == [1,2,3,4]