def has_two_num_sum(sum, nums):
    needed = set()
    for n in nums:
        if n in needed:
            return True
        else:
            needed.add(sum - n)
    return False