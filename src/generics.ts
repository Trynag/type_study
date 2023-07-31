function getValue<myType>(value: myType) { // <myType> es la forma de agregar genericos. myType es solo la
  return value                             // declaracion del nombre del generico, o sea, el famoso <T>
}

/*
  Los genericos son la forma de darle dinamismo al tipado de forma que es el desarrallador el que le dice al programa lo que deberia ser el argumento de la funcion, veamos el ejemplo.
*/

import { Dog } from "./protected"

const bruno = new Dog('Bruno', 'Tryna')
getValue<Dog>(bruno).move