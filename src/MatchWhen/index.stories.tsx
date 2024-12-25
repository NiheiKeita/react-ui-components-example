
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { Match, When } from '.'
import { expect } from '@storybook/jest'
import { useState } from 'react'

const meta: Meta = {
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<number | undefined>()

    return (
      <>
        <div className="mb-4 flex space-x-4">
          {[1, 2, 3].map((value) => (
            <label key={value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedValue === value}
                onChange={() => setSelectedValue(value)}
                className="cursor-pointer"
              />
              <span>{value}</span>
            </label>
          ))}
        </div>
        <Match>
          <When exp={selectedValue === 1}>
            <div>one</div>
          </When>
          <When exp={selectedValue === 2}>
            <div>two</div>
          </When>
          <When exp={selectedValue === 3}>
            <div>three</div>
          </When>
          <When otherwise>
            <div>otherwise</div>
          </When>
        </Match>
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const screen = await within(canvasElement)
    expect(screen.getByText('otherwise')).toBeVisible()
    expect(screen.queryByText('one')).toBeNull()
    expect(screen.queryByText('two')).toBeNull()
    expect(screen.queryByText('three')).toBeNull()

    // Click the 1 checkbox
    await screen.getByText('1').click()
    expect(screen.getByText('one')).toBeVisible()
    expect(screen.queryByText('otherwise')).toBeNull()
    expect(screen.queryByText('two')).toBeNull()
    expect(screen.queryByText('three')).toBeNull()

    // Click the 2 checkbox
    await screen.getByText('2').click()
    expect(screen.getByText('two')).toBeVisible()
    expect(screen.queryByText('otherwise')).toBeNull()
    expect(screen.queryByText('one')).toBeNull()
    expect(screen.queryByText('three')).toBeNull()
  },
}