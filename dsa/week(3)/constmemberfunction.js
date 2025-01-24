class Fraction {
    constructor(numerator = 0, denominator = 1) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    getNumerator() {
        return this.numerator;
    }
    getDenominator() {
        return this.denominator;
    }
    setNumerator(n) {
        this.numerator = n;
    }
    setDenominator(d) {
        this.denominator = d;
    }
    print() {
        console.log(`${this.numerator} / ${this.denominator}`);
    }
    simplify() {
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        const gcdValue = gcd(this.numerator, this.denominator);
        this.numerator = this.numerator / gcdValue;
        this.denominator = this.denominator / gcdValue;
    }
    add(f2) {
        const lcm = this.denominator * f2.denominator;
        const x = lcm / this.denominator;
        const y = lcm / f2.denominator;

        const num = x * this.numerator + y * f2.numerator;

        this.numerator = num;
        this.denominator = lcm;
        this.simplify();
    }

    multiply(f2) {
        this.numerator = this.numerator * f2.numerator;
        this.denominator = this.denominator * f2.denominator;
        this.simplify();
    }
}

// Example usage
const f1 = new Fraction(10, 2);
const f2 = new Fraction(15, 4);

console.log(`Before addition:`);
f1.print();

f1.add(f2);
console.log(`After addition:`);
f1.print();

f1.multiply(f2);
console.log(`After multiplication:`);
f1.print();
