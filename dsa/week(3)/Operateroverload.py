from math import gcd

class Fraction:
    def __init__(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator

    def print(self):
        print(f"{self.numerator} / {self.denominator}")

    def simplify(self):
        common = gcd(self.numerator, self.denominator)
        self.numerator //= common
        self.denominator //= common

    def add(self, f2):
        lcm = self.denominator * f2.denominator
        x = lcm // self.denominator
        y = lcm // f2.denominator

        num = x * self.numerator + y * f2.numerator
        result = Fraction(num, lcm)
        result.simplify()
        return result

    def multiply(self, f2):
        num = self.numerator * f2.numerator
        denom = self.denominator * f2.denominator
        result = Fraction(num, denom)
        result.simplify()
        return result

    def equals(self, f2):
        self_simplified = Fraction(self.numerator, self.denominator)
        self_simplified.simplify()

        f2_simplified = Fraction(f2.numerator, f2.denominator)
        f2_simplified.simplify()

        return self_simplified.numerator == f2_simplified.numerator and self_simplified.denominator == f2_simplified.denominator

# Example usage

f1 = Fraction(10, 2)
f2 = Fraction(15, 4)

f3 = f1.add(f2)
f4 = f1.multiply(f2)

f1.print()
f2.print()
f3.print()
f4.print()

if f1.equals(f2):
    print("Equal")
else:
    print("Not equal")
