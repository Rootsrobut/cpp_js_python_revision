import math

pi = 3.14

def sum(a, b, c=0):
    # Here, c is the default argument
    return a + b + c

def main():
    n = int(input("Enter the value of n: "))
    m = int(input("Enter the value of m: "))

    # Dynamic 2D array creation
    arr = [[0] * m for _ in range(n)]

    # Freeing the array (Python handles garbage collection automatically)
    arr = None

    a, b, c = 2, 3, 4
    print(sum(a, b))       # Here, c will automatically be taken as 0
    print(sum(a, b, c))    # As the value of c is provided, the value of c will be 4

    d = 5  # Constant in Python

if __name__ == "__main__":
    main()
