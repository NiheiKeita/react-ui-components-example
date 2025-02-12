
import { Meta, StoryObj } from '@storybook/react/*'
import { TypeAList } from '.'

const meta: Meta = {
  tags: ['autodocs'],
  component: TypeAList,
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    list: [
      {
        title: 'Title 1',
        content: 'Content 1',
      },
      {
        title: 'Title 2',
        content: 'Content 2',
      },
      {
        title: 'Title 3',
        content: 'Content 3',
      },
    ],
    color: 'blue-500'
  },
}