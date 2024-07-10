
import { Meta, StoryObj } from '@storybook/react';
import { TabSwitchingView } from '..';
import { StepContext, useStep } from './StepContext';
import { useContext } from 'react';
import React from 'react';


const meta: Meta<typeof TabSwitchingView> = {
  title: 'views/TabSwitchingView/context',
  component: TabSwitchingView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: function Render() {
    const stepValue = useStep()
    const Child = () => {
      switch (stepValue.step) {
        case 1:
          return (
            <Sample1View />
          )
        case 2:
          return (
            <Sample2View />
          )
        default:
          return (
            <>default</>
          )
      }
    }
    return (
      <StepContext.Provider value={stepValue}>
        <Child />
      </StepContext.Provider>
    )
  },
}

const Sample1View = React.memo(function Sample1View() {

  const stepContext = useContext(StepContext)
  const switchView = () => {
    stepContext.updateStep(2)
  }
  return (
    <>
      1画面目
      <div onClick={switchView}>遷移ボタン</div >
    </>
  )
})
const Sample2View = React.memo(function Sample1View() {

  const stepContext = useContext(StepContext)
  const switchView = () => {
    stepContext.updateStep(3)
  }
  return (
    <>
      2画面目
      <div onClick={switchView}>デフォルトボタン</div >
    </>
  )
})

