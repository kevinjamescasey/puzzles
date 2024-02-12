def find_missing_num(nums):
    total = 0
    nums_total = 0
    for i,n in enumerate(nums):
        total += (i + 1)
        nums_total +=n
    total += len(nums) + 1
    return total - nums_total