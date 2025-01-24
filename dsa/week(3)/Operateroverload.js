class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    print() {
        console.log(`${this.numerator} / ${this.denominator}`);
    }

    simplify() {
        const gcd = this.#findGCD(this.numerator, this.denominator);
        this.numerator = this.numerator / gcd;
        this.denominator = this.denominator / gcd;
    }

    #findGCD(a, b) {
        return b === 0 ? a : this.#findGCD(b, a % b);
    }

    add(f2) {
        const lcm = this.denominator * f2.denominator;
        const x = lcm / this.denominator;
        const y = lcm / f2.denominator;

        const num = x * this.numerator + y * f2.numerator;
        const result = new Fraction(num, lcm);
        result.simplify();
        return result;
    }

    multiply(f2) {
        const num = this.numerator * f2.numerator;
        const denom = this.denominator * f2.denominator;
        const result = new Fraction(num, denom);
        result.simplify();
        return result;
    }

    equals(f2) {
        const thisSimplified = new Fraction(this.numerator, this.denominator);
        thisSimplified.simplify();

        const f2Simplified = new Fraction(f2.numerator, f2.denominator);
        f2Simplified.simplify();

        return thisSimplified.numerator === f2Simplified.numerator &&
               thisSimplified.denominator === f2Simplified.denominator;
    }
}

// Example usage
const f1 = new Fraction(10, 2);
const f2 = new Fraction(15, 4);

const f3 = f1.add(f2);
const f4 = f1.multiply(f2);

f1.print();
f2.print();
f3.print();
f4.print();

console.log(f1.equals(f2) ? "Equal" : "Not equal");
