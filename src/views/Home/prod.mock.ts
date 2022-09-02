import { Product } from 'models/products'

export const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta',
    price: 23,
    discountPercent: null,
  },
  {
    id: 2,
    name: 'Camiseta 2',
    price: 23,
    discountPercent: null,
  },
  {
    id: 3,
    name: 'Camiseta 3',
    price: 23,
    discountPercent: 10,
  },
  {
    id: 4,
    name: 'Camiseta 3',
    price: 23,
    discountPercent: 10,
  },
  {
    id: 5,
    name: 'Camiseta 3',
    price: 23,
    discountPercent: null,
  },
  {
    id: 6,
    name: 'Camiseta 3',
    price: 23,
    discountPercent: null,
  },
  {
    id: 7,
    name: 'Camiseta 3',
    price: 23,
    discountPercent: null,
  },
  {
    id: 8,
    name: 'Camiseta 3',
    price: 23,
    discountPercent: 5,
  },
].map(prod => ({
  ...prod,
  imageSrc: [
    {
      key: 1,
      src: 'https://lojausereserva.vtexassets.com/arquivos/ids/6068656-1200-auto?v=637648975461100000&width=1200&height=auto&aspect=true',
    },
    {
      key: 2,
      src: 'https://lojausereserva.vtexassets.com/arquivos/ids/6068667-1200-auto?v=637648975461730000&width=1200&height=auto&aspect=true',
    },
    {
      key: 3,
      src: 'https://lojausereserva.vtexassets.com/arquivos/ids/6068675-1200-auto?v=637648975462330000&width=1200&height=auto&aspect=true',
    },
    {
      key: 4,
      src: 'https://lojausereserva.vtexassets.com/arquivos/ids/6068688-1200-auto?v=637648975466400000&width=1200&height=auto&aspect=true',
    },
  ],
}))
