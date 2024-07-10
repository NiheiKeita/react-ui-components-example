
import { Meta, StoryObj } from '@storybook/react';
import { SliderView } from '.';
import React from 'react';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof SliderView> = {
  title: 'views/SliderView',
  component: SliderView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

const SampleSlider1 = React.memo(function SliderView() {
  return (
    <div className="flex h-20 w-full items-center justify-center bg-black text-white">
      SampleSlider1
    </div>
  )
})
const SampleSlider2 = React.memo(function SliderView() {
  return (
    <div className="flex h-20 w-full items-center justify-center bg-black text-white">
      SampleSlider2
    </div>
  )
})
const SampleSlider3 = React.memo(function SliderView() {
  return (
    <div className="flex h-20 w-full items-center justify-center bg-black text-white">
      SampleSlider3
    </div>
  )
})
export const Default: Story = {
  args: {
    sliders: [<SampleSlider1 />, <SampleSlider2 />, <SampleSlider3 />],
  },
  play: async ({ canvasElement }) => {
    await within(canvasElement)
  },
};

export const Space: Story = {
  // NOTE:リープは最低４枚ないとエラーになって右側の画像が書けるので注意
  args: {
    sliders: [<SampleSlider1 />, <SampleSlider2 />, <SampleSlider3 />, <SampleSlider3 />],
    spaceBetween: 10,
    slidesPerView: 1.5,
    loop: true,
  },
  play: async ({ canvasElement }) => {
    await within(canvasElement)
  },
};
