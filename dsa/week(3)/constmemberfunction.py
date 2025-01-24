from math import gcd

class Fraction:
    def __init__(self, numerator=0, denominator=1):
        self.numerator = numerator
        self.denominator = denominator
    def get_numerator(self):
        return self.numerator
    def get_denominator(self):
        return self.denominator
    def set_numerator(self, n):
        self.numerator = n
    def set_denominator(self, d):
        self.denominator = d
    def print(self):
        print(f"{self.numerator} / {self.denominator}")

    def simplify(self):
        gcd_value = gcd(self.numerator, self.denominator)
        self.numerator //= gcd_value
        self.denominator //= gcd_value

    def add(self, f2):
        lcm = self.denominator * f2.denominator
        x = lcm // self.denominator
        y = lcm // f2.denominator

        num = x * self.numerator + y * f2.numerator

        self.numerator = num
        self.denominator = lcm
        self.simplify()

    def multiply(self, f2):
        self.numerator *= f2.numerator
        self.denominator *= f2.denominator
        self.simplify()


# Example usage
f1 = Fraction(10, 2)
f2 = Fraction(15, 4)

print("Before addition:")
f1.print()

f1.add(f2)
print("After addition:")
f1.print()

f1.multiply(f2)
print("After multiplication:")
f1.print()
