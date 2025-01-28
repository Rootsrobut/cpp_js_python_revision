
from functools import reduce
numbers = [1, 2, 3, 4]


squared = list(map(lambda x: x * x, numbers))
print(squared) 

 
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens) 


sum = reduce(lambda acc, x: acc + x, numbers, 0)
print(sum)  

sorted_numbers = sorted(numbers, key=lambda x: x)
print(sorted_numbers) 



def custom_map(callback, numbers):
    res = []
    for i in range(len(numbers)):
        res.append(callback(numbers[i], i, numbers)) 
    return res   
def custom_filter(callback, numbers):
    res = []
    for i in range(len(numbers)):
        if callback(numbers[i], i, numbers): 
            res.append(numbers[i]) 
    return res      
    
def custom_reduce(callback, numbers, initial_value=None):
    res = initial_value if initial_value is not None else numbers[0]  
    start_index = 0 if initial_value is not None else 1  

    for i in range(start_index, len(numbers)):
        res = callback(res, numbers[i], i, numbers) 
    return res



squared = list(custom_map(lambda x: x * x, numbers))
print(squared) 

 
evens = list(custom_filter(lambda x: x % 2 == 0, numbers))
print(evens) 


sum = custom_reduce(lambda acc, x: acc + x, numbers, 0)
print(sum)  
