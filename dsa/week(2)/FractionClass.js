class Fraction {
    #numerator; // Private field
    #denominator; // Private field
    constructor(numerator, denominator) {
        this.#numerator = numerator;
        this.#denominator = denominator;
    }
    print() {
        console.log(`${this.#numerator} / ${this.#denominator}`);
    }
    simplify() {
        const gcd = (a, b) => {
            while (b) {
                [a, b] = [b, a % b];
            }
            return a;
        };
        const gcdValue = gcd(this.#numerator, this.#denominator);
        this.#numerator = Math.floor(this.#numerator / gcdValue);
        this.#denominator = Math.floor(this.#denominator / gcdValue);
    }
    add(f2) {
        const lcm = (this.#denominator * f2.#denominator) / this.#gcd(this.#denominator, f2.#denominator);
        const x = lcm / this.#denominator;
        const y = lcm / f2.#denominator;
        const num = x * this.#numerator + y * f2.#numerator;
        this.#numerator = num;
        this.#denominator = lcm;
        this.simplify();
    }
    multiply(f2) {
        this.#numerator *= f2.#numerator;
        this.#denominator *= f2.#denominator;
        this.simplify();
    }

    #gcd(a, b) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }
}

// Main function
const f1 = new Fraction(10, 2);
const f2 = new Fraction(15, 4);

f1.add(f2);
f1.print();
f2.print();

f1.multiply(f2);
f1.print();
f2.print();
