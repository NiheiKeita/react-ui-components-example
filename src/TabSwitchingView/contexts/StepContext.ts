
import { useCallback, useState, createContext } from "react"

export type Step = 1 | 2 | 3 | "Home" | 'Explore' | 'Notifications' | 'Messages'
type StepContextType = {
    step: Step,
    // eslint-disable-next-line no-unused-vars
    updateStep: (step: Step) => void,
}

const defaultContext: StepContextType = {
    step: 1,
    updateStep: () => { },
}

export const StepContext = createContext<StepContextType>(defaultContext)
export const useStep = (): StepContextType => {
    const [step, setStep] = useState<Step>(1)
    const updateStep = useCallback((step: Step): void => {
        setStep(step)
    }, [setStep])

    return {
        step,
        updateStep,
    }
}
