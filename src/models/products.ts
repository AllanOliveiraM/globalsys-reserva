export type Product = {
  id: number
  name: string
  discountPercent: number | null
  price: number
  imageSrc: Array<{
    key: number
    src: string
  }>
}
