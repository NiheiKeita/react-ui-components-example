import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { CalenderDailyView } from '.'
import { CalenderDay } from '../types/CalenderDay'

const meta: Meta<typeof CalenderDailyView> = {
  title: 'views/Calender/CalenderDailyView',
  component: CalenderDailyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

const day: CalenderDay = {
  date: new Date("2024-02-05"),
}
export const Default: Story = {
  args: {
    handleClick: action('handleClick'),
    day: day
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
    canvas.getByText("05")
  },
}
