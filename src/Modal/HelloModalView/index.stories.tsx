import { expect } from '@storybook/jest'

import { Meta, StoryObj } from '@storybook/react'
import { fireEvent, within } from '@storybook/testing-library'
import { HelloModalView } from '.'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof HelloModalView> = {
  title: 'views/Modal/HelloModalView',
  component: HelloModalView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: action('onClose')
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
    await expect(await canvas.queryByText('open')).toBeTruthy()
    await fireEvent.click(canvas.getByTestId('openButton'))
    canvas.getByText("hello")
    await fireEvent.click(canvas.getByTestId('closeButton'))
    await expect(await canvas.queryByText('hello')).toBeFalsy()
  },
}
