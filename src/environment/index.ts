/* eslint-disable @typescript-eslint/naming-convention */

import { PRODUCTION_ENVIRONMENT_NAMES } from 'constants/environment'
import { validEnvNameOrProduction } from 'utils/environment'

const { NEXT_PUBLIC_DEBUG_MODE: __TO_CAST_NEXT_PUBLIC_DEBUG_MODE } = process.env
if (!__TO_CAST_NEXT_PUBLIC_DEBUG_MODE) {
  throw new Error('NEXT_PUBLIC_DEBUG_MODE Env is not defined.')
}
export const NEXT_PUBLIC_DEBUG_MODE = __TO_CAST_NEXT_PUBLIC_DEBUG_MODE === 'true'

export const { NODE_ENV } = process.env

export const isProductionMode = PRODUCTION_ENVIRONMENT_NAMES.includes(
  validEnvNameOrProduction(NODE_ENV)
)
