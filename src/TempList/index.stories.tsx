
import { Meta, StoryObj } from '@storybook/react/*'
import { TempList } from '.'

const meta: Meta = {
  tags: ['autodocs'],
  component: TempList,
}
export default meta

export const Default: StoryObj<typeof TempList> = {
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
  },
  render: function Render(args) {

    return (
      <div className="grid gap-10 bg-gray-100 p-4">
        <TempList {...args} type='A' />
        <TempList {...args} type='B' />
        <TempList {...args} type='C' />
        <TempList {...args} type='D' />
        <TempList {...args} type='E' />
        <TempList {...args} type='F' />
        <TempList {...args} type='G' />
        <TempList {...args} type='H' />
        <TempList {...args} type='I' />
        <TempList {...args} type='J' />
      </div>
    )
  },
}