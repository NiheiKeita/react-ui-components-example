import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { TabSwitchingView } from '.'
import { fireEvent, within } from '@storybook/testing-library'


const meta: Meta<typeof TabSwitchingView> = {
  title: 'views/TabSwitchingView',
  component: TabSwitchingView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render() {
    return (
      <TabSwitchingView />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)
    const tabArea = within(canvas.getByTestId('tabHead'))
    const bodyArea = within(canvas.getByTestId('tabBody'))
    await fireEvent.click(tabArea.getByText('Home'))
    expect(tabArea.getByText('Home').textContent).toBe('Home')
    expect(bodyArea.getByText('Home content').textContent).toBe('Home content')
    await fireEvent.click(tabArea.getByText('Explore'))
    expect(tabArea.getByText('Explore').textContent).toBe('Explore')
    expect(bodyArea.getByText('Explore content').textContent).toBe('Explore content')
    await fireEvent.click(tabArea.getByText('Notifications'))
    expect(tabArea.getByText('Notifications').textContent).toBe('Notifications')
    expect(bodyArea.getByText('Notifications content').textContent).toBe('Notifications content')
    await fireEvent.click(tabArea.getByText('Messages'))
    expect(tabArea.getByText('Messages').textContent).toBe('Messages')
    expect(bodyArea.getByText('Messages content').textContent).toBe('Messages content')
  },
}

