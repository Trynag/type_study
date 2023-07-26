# type_study

Estudio en typescript

Todo esto sale del estudio de directos de Midudev y Platzi

## Como ejecutar TS-NODE con ESNEXT

Sencillo, primero tenemos que ejecutarlo con el tsconfig en un estado neutro, o sea sin opcionales de ts-node en el tsconfig,para pasarle la bandera --esm al compilador, luego de que funcione, agregarle los cambios del ts-node, o sea:

"ts-node": {
  "esm": true,
  "experimentalSpecifierResolution": "node",
}

y tambien agregarle las opciones de compilador

"include": ["/**/*.ts"],
"exclude": ["node_modules"]

El exclude es bueno solamente ejecutarlo en entornos de prueba, por que podriamos perder tipos que se requieran dentro de los modulos o optimizaciones realizadas dentro del mismo. Segun GPT  la exclusión de node_modules es una práctica común y útil, especialmente en proyectos grandes con muchas dependencias, para mejorar el tiempo de compilación y evitar posibles conflictos. Sin embargo, es esencial tener en cuenta las desventajas mencionadas y, en caso de que surjan problemas relacionados con tipos o dependencias, es posible que debas ajustar la configuración o eliminar temporalmente la exclusión para investigar y resolver el problema específico.

## DTO

Clase 17 - tipos avanzados
Abreviatura para referesire a los Data transfer object??? Es la forma de omitir datos que no se necesiten en el preciso momento de creacion y en el resultado se contruye el producto completo con los datos omitidos.

{
  id: "69cd2f4", // <- Dato que podemos omitir al momento de crearlo
  title: "My title", //
  price: 200,        //  <- Dato que necesitamos para crear el producto ( DTO )
  createdAt: "2023-0203T20:50:53"  // <- Dato que podemos omitir al momento de crearlo
}

Los datos que no son omitidos son los objetos de transferencia DTO. estos Omit se puede extender a una interface lo cual es una ventaja sobre los types

## PICK

es lo contrario al DTO, solo escogemos los campos que necesitamos

## Partial Type

Es una forma de obtener argumentos sin necesidad de tenerlos obligatorios, lo que hace, es tomar los datos y convertirlos en opcionales

## Require

Al contrario que partial, require, si toma los argumentos que necesita y nos obliga a pasarlos como parametros.
Tambien convierte los datos dejandolos todos en obligatorios

## Readonly

Convierte todos los parametros en formato en modo de solo lectura

new change..... asdas
