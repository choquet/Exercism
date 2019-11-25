export class Triangle {

  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  kind() {

    let ab = this.a + this.b
    let bc = this.b + this.c
    let ac = this.a + this.c

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error("Invalid length")
    }
    
    if (ab < this.c || bc < this.a || ac < this.b) {
      throw new Error("Inequality")
    }

    if (ab == this.c || bc == this.a || ac == this.b) {
      return "degenerate"
    }

    if (ab == bc && bc == ac) {
      return "equilateral"
    }

    if (this.a == this.b || this.a == this.c || this.b == this.c) {
      return "isosceles"
    }

    return "scalene"
    
  }
}
