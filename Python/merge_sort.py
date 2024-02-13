# split in half, recursively sort the halves, and merge the sorted halves while keeping the merged result sorted
# each recursive call takes a copy of half of the list so each call consumes more memory
# retuns a sorted copy of `list`. does not change `list`
def merge_sort(list):
    # print(f'merge sorting {list}')
    if len(list) <= 1:
        return list
    
    mid = len(list) // 2
    left = merge_sort(list[:mid])
    right = merge_sort(list[mid:])

    return merge(left, right)

def merge(left, right):
    # print(f'merging {left} and {right}')
    l = 0
    r = 0

    merged = []
    for _ in range(len(left) + len(right)):
        if l < len(left) and (r >= len(right) or left[l] < right[r]):
            merged.append(left[l])
            l += 1
        else:
            merged.append(right[r])
            r += 1

    return merged

