
// Singleton Patron prevent multiply instance of object "MyService" making constructor private and only manage by the class
export class MyService {
  private constructor (
    private name: string
  ) {}

  static instance: MyService | null = null // Flag to know if object "MyService" has an instance

  get Name () {
    return this.name
  }

  static create(name: string) { // Manage instance of class between private constructor and returned the instace
    if (MyService.instance === null) {
      MyService.instance = new MyService(name) // Set one instance
    }

    return MyService.instance // if instance of MyService there is, return the existing
  }
}

const service1 = MyService.create("PostgreSQL")
const service2 = MyService.create("PostgreSQL 2")

console.log({
  "Servicio 1": service1.Name,
  "Servicio 2": service2.Name,
  "Equal": service1 === service2,
})