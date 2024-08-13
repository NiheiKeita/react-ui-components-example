import { Meta, StoryObj } from '@storybook/react'
import { TurnOverCard } from '.'

const meta: Meta<typeof TurnOverCard> = {
  title: 'components/TurnOverCard',
  component: TurnOverCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <div className="flex min-h-screen items-center justify-center gap-2 bg-gray-200">
        <TurnOverCard frontContent={<span>Front</span>} backContent={<span>Back</span>} />
        <TurnOverCard frontContent={<span>Front</span>} backContent={<span>Back</span>} />
      </div>
    )
  },
}

