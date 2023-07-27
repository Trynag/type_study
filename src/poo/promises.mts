import axios from 'axios'

export type Products = {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  creationAt:  Date;
  updatedAt:   Date;
  category:    Category;
}

export type Category = {
  id:         number;
  name:       string;
  image:      string;
  creationAt: Date;
  updatedAt:  Date;
}


const getProducts = ( async (): Promise<Products[]> => {
  const { data } = await axios.get<Products[]>('https://api.escuelajs.co/api/v1/products')
  return data
})

const products = await getProducts()
console.log(products)