from collections import deque

def merge(deque1,deque2):
    sentinel = object()
    merged = deque()
    i1 = iter(deque1)
    i2 = iter(deque2)
    n1 = next(i1, sentinel)
    n2 = next(i2, sentinel)
    while len(merged) < len(deque1) + len(deque2):
        if n1 != sentinel and (n2 == sentinel or n1 < n2):
            merged.append(n1)
            n1 = next(i1, sentinel)
        else:
            merged.append(n2)
            n2 = next(i2, sentinel)

    return merged

# try solving with tracking indexes instead of using iterators
# try solving with popLeft destruction of arguments