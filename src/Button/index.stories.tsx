import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <div className='grid gap-2 bg-gray-100 p-10'>
        <Button variant={'default'} >default</Button>
        <Button variant={'pink'}>pink</Button>
      </div>
    )
  },
}
