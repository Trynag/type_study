// function saludar({name, age}: {name:string, age:number}) {
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// import { EnumType } from "typescript"

// saludar({name: 'Juan', age: 18})

// const avengers = ['ironman', 'hulk', 'thor']
// avengers.forEach(avengers => console.log(avengers))

// function Suma({user, age}: {user : string, age : number}) : number {
//     return age
// }

// const resta = (a : number, b : number) : number => {
//     return 12
// }

// const nunca = (a : number, b : string) : never => {
//     throw new Error() 
// }

// const hero = {
//     name: "ironam",
//     age: Infinity
// }

// // // Type Alias
// type HeroProperties1  = {
//     isActive?: boolean
//     readonly id?: HeroId // readonly es para evitar que sea alterado
//     powerScale?: HeroPoweScale
// }

// // const ironMan : Hero = {
// //     name: "IronMan",
// //     age: Infinity
// // }

// // // Union Type
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPoweScale = 'local' | 'planetary' | 'galatic' | 'universal'

// // // Intersection Type 
// type HeroBasicInfo = {
//   readonly id: HeroId
//   name: string
//   age: number
// }

// type Hero = HeroBasicInfo & HeroProperties1


// // Define function with Type Alias
// function createHero(hero: HeroBasicInfo) : Hero {
//   const { id, name, age } = hero
//   return { 
//     id: id,
//     name,
//     age,
//     isActive: true,
//     powerScale: 'galatic'
//   }
// }

// const miles = createHero({
//   id: crypto.randomUUID(),
//   name: 'Miles Morales', 
//   age: 15,
// })

// // Type Index

// type HeroProperties = {
//     isActive: boolean
//     address: {
//         city: string
//         planet: string
//     }
// }

// const addressHero: HeroProperties['address'] = {
//     planet: 'Earth',
//     city: 'Bogota'
// }

// // type from values 

// const address = {
//     planet: 'Earth',
//     city: 'Bogota'
// }

// type Address1 = typeof address

// const addressSebastian: Address1 = {
//     planet: 'Earth',
//     city: 'Caldas'
// }

// // type from function return

// function createAddress() {
//     return {
//         planet: 'Earth',
//         city: 'Caldas'
//     }
// }

// type Address2 = ReturnType <typeof createAddress>

// // Arrays

// const languages: (string | number)[] = []
// languages.push(21)
// languages.push("Jhon")

// function simpleArraySum(ar: number[]): number {
//     return ar.reduce((val, cont) => {
//         return val + cont
//     })
// }

// type Size = 'S' | 'M' |'L' | 'XL'
// const createProductToJson = ( title: string, createdAt: Date, stock: number, size: Size): Object => {
//     return {title, createdAt, stock, size}
// }
// console.log(createProductToJson)

// function regularFunction(...parans: any[]) {return "Some"} //  
// const anonimus = function(): string {return "some"}         // ambas son lo mismo, solamente que una no tiene nombre por eso es anonima
// const arrowFunction = ((a: string) => "some") // Cambia internamente el como trata al this


// // Uso de type in values con 3x3
// type CellValue = 'X' | 'O' | ''
// type LineValue = readonly [CellValue, CellValue, CellValue]
// type GameBoard = [LineValue, LineValue, LineValue]

// const game: GameBoard = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', ''],
// ]

// // Enums
// function mostrarMensajes(tipoError: ERROR_TYPE) {
//     if( tipoError == ERROR_TYPE.NOT_FOUND ) {
//         console.log(ERROR_TYPE.NOT_FOUND)
//     } else if( tipoError == ERROR_TYPE.UNATHORIZED) {
//         console.log("No tienes permisos para acceder")
//     }
// }

// const enum ERROR_TYPE { // siempre usar const, solamente no usarlo cuando sea algo componetizable hacia fuera de la app
//     NOT_FOUND = 'No se encuentra el recurso',
//     UNATHORIZED = "No tienes permisos para acceder"
// }

// // Inserction
// // Aunque nos ayudan a diferir del dato que estamos tratando, no son un buen tipo a implementar debido a que no sale de la inferencia
// // natural de TypeScript si no una inferencia forzada por nosotros, por lo cual, casi siempre, podemos cagarla por confudir cosas

// // // Metodo 1 si peta
// // const canvas  = document.getElementById('canvas') as HTMLCanvasElement // as ... es la inserction debido a que typescript no es capas
// //                                                                        // de saber que tipo de elemento es y devuelve o null o HTMLElment, por eso, se le indica que es un HTMLCanvasElement

// // if (canvas) {
// //     const ctx = canvas.getContext('2d') // esto presenta un problema por que puede que el elemento cambie
// // }

// // // Metodo 2 si peta
// // const canva = document.getElementById('canvas')

// // if (canva) {
// //     const ctx = (canva as HTMLCanvasElement).getContext('2d') // Esto es otra forma de validar que el elemento sea un canva con
// //                                                               // inserction, siempre evitarla
// // }

// // // Metodo 3 sin inserction resultando el mismo codigo compilado a JS y usando inferencia en TS jamas peta
// const canvas = document.getElementById('canvas')

// // // debido a esta validacion TS por inferencia sabe que unicamente se estara trabajando con un HTMLCanvasElement
// if (canvas instanceof HTMLCanvasElement) { // Debi!= null && do a esta validacion, TypeScript detecta que es un elemento
//     const ctx = canvas.getContext('2d')                      // HTMLCanvas, y ya no es necesario hacer una inserction
// }

// // typeof -> para types o tipos basicos
// // instanceof --> para instancias

// Definir una tupla

// const user: [string, number] = ['trynag', 7]

// Uso del Unknow Type

let unknowVar: unknown // <- declaracion

if(typeof unknowVar === 'string') unknowVar.toUpperCase() // TS marca un error por que recomienda que se 
                                                          // trabaje con el solamente cuando se haya realizado
                                                          // una verificacion de tipo
