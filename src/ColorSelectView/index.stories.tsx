
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, within } from '@storybook/testing-library';
import { ColorSelectView } from '.';
import { useState } from 'react';

const meta: Meta<typeof ColorSelectView> = {
  title: 'views/ColorSelectView',
  component: ColorSelectView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const defaultColor = 180
    const [color, setColor] = useState('')
    const handleColorSelect = (colorCode: string) => {
      setColor(colorCode)
    }
    return (
      <>
        {color}
        <svg width="20" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle fill={color} cx="1" cy="1" r="1"></circle>
        </svg>
        < ColorSelectView handleColorSelect={handleColorSelect} defaultColorHSL={defaultColor} />
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
    await fireEvent.click(canvas.getByTestId('color'))
  },
};
