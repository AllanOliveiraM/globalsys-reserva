import { useMemo } from 'react'

import * as yup from 'yup'
import { AnyObjectSchema } from 'yup'

import { resolveSchema } from 'utils/yupValidationResolver'

type SchemaCreator = (yupInstance: typeof yup) => AnyObjectSchema

export const useFormValidationSchema = (schemaCreator: SchemaCreator) => {
  const formValidationSchema = useMemo(
    () => resolveSchema(schemaCreator(yup)),
    [schemaCreator]
  )

  return formValidationSchema
}
