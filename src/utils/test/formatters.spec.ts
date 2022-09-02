/* eslint-disable @typescript-eslint/no-explicit-any */
import { currency, getPercentage, slugify, subtractPercentage } from '../formatters'

describe('Formatters testing', () => {
  it('Currency', () => {
    expect(currency(10)).toBe('R$\xa010,00')
  })

  it('Currency not number', () => {
    expect(currency('10s' as any)).toBe('R$\xa00,00')
  })

  it('getPercentage', () => {
    expect(getPercentage(10, 50)).toBe(5)
  })

  it('getPercentage not number', () => {
    expect(getPercentage('10s' as any, 50)).toBe(0)
  })

  it('slugify', () => {
    expect(slugify('slugify test')).toBe('slugify-test')
  })

  it('subtractPercentage', () => {
    expect(subtractPercentage(10, 20)).toBe(8)
  })

  it('subtractPercentage not number', () => {
    expect(subtractPercentage('10s' as any, 20)).toBe(0)
  })
})
