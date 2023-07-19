class MyMath {
  static readonly Pi = 3.14
  static max(...args: number[]) {
    return args.reduce((max, item) => max >= item ? max : item, -Infinity)
  }
}

console.log(MyMath.Pi)
console.log('Max', MyMath.max(-1,-2,-3,-4))