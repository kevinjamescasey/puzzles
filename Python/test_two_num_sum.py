from two_num_sum import has_two_num_sum

def test_has_two_num_sum():
    assert has_two_num_sum(10, [5, 5]) == True
    assert has_two_num_sum(5, [3, 1]) == False
    assert has_two_num_sum(10, [3, 5, 5, 7]) == True
