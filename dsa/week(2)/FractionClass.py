class Fraction:
    def __init__(self, numerator, denominator):
        self.__numerator = numerator  
        self.__denominator = denominator  
    def print(self):
        print(f"{self.__numerator} / {self.__denominator}")
    def simplify(self):
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a
        gcd_value = gcd(self.__numerator, self.__denominator)
        self.__numerator //= gcd_value
        self.__denominator //= gcd_value

    def add(self, f2):
        lcm = self.__denominator * f2.__denominator // self._gcd(self.__denominator, f2.__denominator)
        x = lcm // self.__denominator
        y = lcm // f2.__denominator
        num = x * self.__numerator + y * f2.__numerator
        self.__numerator = num
        self.__denominator = lcm
        self.simplify()

    def multiply(self, f2):
        self.__numerator *= f2.__numerator
        self.__denominator *= f2.__denominator
        self.simplify()
    def _gcd(self, a, b):
        while b:
            a, b = b, a % b
        return a


# Main function
if __name__ == "__main__":
    f1 = Fraction(10, 2)
    f2 = Fraction(15, 4)

    f1.add(f2)
    f1.print()
    f2.print()

    f1.multiply(f2)
    f1.print()
    f2.print()
