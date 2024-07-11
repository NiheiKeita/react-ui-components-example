import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import { eachDayOfInterval } from 'date-fns'
import { CalenderMonthlyView } from '.'
import { CalenderDay } from '../types/CalenderDay'
import { CalenderMonth } from '../types/CalenderMonth'


const meta: Meta<typeof CalenderMonthlyView> = {
  title: 'views/Calender/CalenderMonthlyView',
  component: CalenderMonthlyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>
const calender: CalenderMonth = {
  month: 4,
  days: eachDayOfInterval({ start: new Date(2024, 5, 1), end: new Date(2024, 5, 30) }).map(date => {
    return {
      date,
    } as CalenderDay
  }),
}

export const Default: Story = {
  args: {
    handlePrevClick: action('handlePrevClick'),
    handleDayClick: action('handleDayClick'),
    handleNextClick: action('handleNextClick'),
    calender: calender,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = await within(canvasElement)
    await fireEvent.click(canvas.getByText('05'))
    await waitFor(() => expect(args.handleDayClick).toHaveBeenCalledTimes(1))
  },
}
