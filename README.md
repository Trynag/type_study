# type_study
Estudio en typescript

Todo esto sale del estudio de directos de Midudev y Platzi

# DTO 
Clase 17 - tipos avanzados
Abreviatura para referesire a los Data transfer object??? Es la forma de omitir datos que no se necesiten en el preciso momento de creacion y en el resultado se contruye el producto completo con los datos omitidos.

{
  id: "69cd2f4", // <- Dato que podemos omitir al momento de crearlo
  title: "My title", //
  price: 200,        //  <- Dato que necesitamos para crear el producto ( DTO )
  createdAt: "2023-0203T20:50:53"  // <- Dato que podemos omitir al momento de crearlo
}

Los datos que no son omitidos son los objetos de transferencia DTO. estos Omit se puede extender a una interface lo cual es una ventaja sobre los types 

# PICK
es lo contrario al DTO, solo escogemos los campos que necesitamos