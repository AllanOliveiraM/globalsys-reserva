import { getOverrideSystemColors } from '@nexpy/design-system'

const customDesignSystemColors = getOverrideSystemColors({
  systemPrimary: '#2957a4',
  systemDanger: '#D9534F',
  systemWarning: '#F0AD4E',
  systemSafe: '#6BB85C',

  systemFocus: '#3878e0',
  systemDisabled: '#e5e5e5',

  systemText: '#1a2027',

  systemBlack: '#28262C',
  systemLightGrey: '#64616b',
  systemTranslucidBlack: 'rgba(0, 0, 0, 0.3)',
  systemWhite: '#fff',
})

export const customTheme = {
  colors: {
    ...customDesignSystemColors,

    primary: '#d71921',

    grey100: '#f2f2f2',
    grey150: '#e2e2e2',
    grey200: '#d0d0d0',
    grey500: '#626262',

    grey200t: 'rgba(98, 98, 98, 0.1)',
  },
}
