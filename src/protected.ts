class Animal {
  constructor( 
    protected name: string // Es una herencia entre clases que esta invisible para las instancias
  ) {}

  move() {
    console.log('move')
  }
}

class Dog extends Animal {
  constructor (
    name: string,
    public owner: string,
  ) { super(name) }
}

const a = new Dog('bruno', 'trynag')
// a.name ? -> no existe para la instancia solo para la clase
Dog.name // solo para las clases
