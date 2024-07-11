import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import { CalenderHeaderView } from '.'

const meta: Meta<typeof CalenderHeaderView> = {
  title: 'views/Calender/CalenderHeaderView',
  component: CalenderHeaderView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    handlePrevClick: action('handlePrevClick'),
    handleNextClick: action('handleNextClick'),
    prevText: '前の月',
    nextText: '次の月',
  },
  render: (args) => {
    return <CalenderHeaderView {...args} >カレンダー</CalenderHeaderView>
  },
  play: async ({ args, canvasElement }) => {
    const canvas = await within(canvasElement)
    canvas.getByTestId('prevButton')
    await fireEvent.click(canvas.getByTestId('prevButton'))
    await waitFor(() => expect(args.handlePrevClick).toHaveBeenCalledTimes(1))
    await fireEvent.click(canvas.getByTestId('nextButton'))
    await waitFor(() => expect(args.handleNextClick).toHaveBeenCalledTimes(1))
    await waitFor(() => {
      expect(canvas.getByTestId('prevButton').textContent).toBe('前の月')
      expect(canvas.getByTestId('nextButton').textContent).toBe('次の月')
    })
  },
}
