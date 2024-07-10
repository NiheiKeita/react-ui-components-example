import React from "react";
import { Step, useStep } from "./contexts/StepContext";
import { StepContext } from "./contexts/StepContext";
import { Tab } from "./components/Tab";

export const TabSwitchingView = React.memo(function TabSwitchingView() {
  const stepValue = useStep()
  const Child = () => {
    switch (stepValue.step) {
      case 'Home':
        return (
          <div>Home content</div>
        )
      case 'Explore':
        return (
          <div>Explore content</div>
        )
      case 'Notifications':
        return (
          <div>Notifications content</div>
        )
      case 'Messages':
        return (
          <div>Messages content</div>
        )
      default:
        return (
          <>default</>
        )
    }
  }
  const tabList: Step[] = ['Home', 'Explore', 'Notifications', 'Messages']
  const handleTabChange = (step: Step) => {
    stepValue.updateStep(step);
  };
  const step = stepValue.step
  return (
    <>
      <StepContext.Provider value={stepValue}>
        <div className="flex min-h-screen flex-col items-center  py-2">
          <div className="flex space-x-4" data-testid='tabHead'>
            {tabList.map((tab, index) => {
              return (
                <Tab
                  key={index}
                  title={String(tab)}
                  isActive={step === tab}
                  handleClick={() => handleTabChange(tab)}
                />
              )
            })}
          </div>
          <div className="mt-8" data-testid='tabBody'>
            <Child />
          </div>
        </div>
      </StepContext.Provider>
    </>
  )
});
TabSwitchingView.displayName = "CountView";

