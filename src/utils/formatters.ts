import isNumber from 'is-number'
import slugifyCore from 'slugify'

export const slugify = (value: string) => {
  return slugifyCore(value, { lower: true })
}

export const currency = (number: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  if (isNumber(number)) {
    return formatter.format(Number(number))
  }

  return formatter.format(0)
}

export const subtractPercentage = (amount: number, percentage: number) => {
  if (isNumber(amount) && isNumber(percentage)) {
    const nAmount = Number(amount)
    const nPercentage = Number(percentage)

    return nAmount - (nAmount * nPercentage) / 100
  }

  return 0
}

export const getPercentage = (amount: number, percentage: number) => {
  if (isNumber(amount) && isNumber(percentage)) {
    const nAmount = Number(amount)
    const nPercentage = Number(percentage)

    return (nAmount * nPercentage) / 100
  }

  return 0
}
