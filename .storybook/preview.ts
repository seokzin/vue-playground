import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { dark, light } from './theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  darkMode: {
    dark,
    light,
  },
}
