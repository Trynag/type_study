
// It's a way to create a basic class that is so abstract that it doesn't need to be instantiated without a more defined class
abstract class A {
  constructor(
    public a: string,
    protected b: string
  ) {}

  protected sayHi() {
    console.log("Hi")
  }

  static sayBay() {
    console.log("bye")
  }
}

// How to use protected in herence POO
class B extends A {
  constructor (
    a: string,
    b: string, // this not have public or private defined because was creating duplicity in the class
    private c: string,
  ) {
    super(a, b) // Super means the constructor of father class
  }

  greeting() {
    this.sayHi()
  }
}

const b = new B("a", "b", "c")