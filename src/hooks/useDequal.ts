import { useEffect, useState } from 'react'

import { dequal } from 'dequal'
import get from 'lodash/get'

export const useDequal = <T = unknown>(
  value: T,
  setOnFalse = false,
  accessKeyForComparison = ''
) => {
  const [staticValue, setStaticValue] = useState<T | undefined>(undefined)

  useEffect(() => {
    if (accessKeyForComparison) {
      setStaticValue(prevState => {
        if (
          value &&
          !dequal(
            get(value, accessKeyForComparison),
            get(prevState, accessKeyForComparison)
          )
        ) {
          return value
        }

        if (!value && setOnFalse) {
          return value
        }

        return prevState
      })

      return
    }

    setStaticValue(prevState => {
      if (value && !dequal(value, prevState)) {
        return value
      }

      if (!value && setOnFalse) {
        return value
      }

      return prevState
    })
  }, [accessKeyForComparison, setOnFalse, value])

  return staticValue
}
