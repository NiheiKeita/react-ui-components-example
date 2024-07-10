import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, waitFor, within } from '@storybook/testing-library';
import { eachDayOfInterval } from 'date-fns';
import { CalenderWeeklyView } from '.';
import { CalenderDay } from '../types/CalenderDay';
import { CalenderWeek } from '../types/CalenderWeek';



// let dates = eachDayOfInterval({ start: new Date(2024, 5, 1), end: new Date(2024, 5, 7) })
// const calender = {
//   month: 3,
//   days: dates,
// }

const calender: CalenderWeek = {
  days: eachDayOfInterval({ start: new Date(2024, 4, 1), end: new Date(2024, 4, 7) }).map(date => {
    return {
      date,
    } as CalenderDay
  }),
}
const meta: Meta<typeof CalenderWeeklyView> = {
  title: 'views/Calender/CalenderWeeklyView',
  component: CalenderWeeklyView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

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
};

