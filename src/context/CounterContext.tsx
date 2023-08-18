import { createContext, useReducer, ChangeEvent, ReactElement, useCallback } from "react"

type StateType = {
  count: number
  text: string 
}

export const initState: StateType = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' }
    default:
      throw new Error()
  }
}

// the functions returned by useCounterContext hook(increment, decrement, handleTextInput) are the ones that you want to use in different parts of your app to interact with the counter state
const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT}), [])

  const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT}), [])

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value
    })
  }, [])

  return { state, increment, decrement, handleTextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => { },
  decrement: () => { },
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { },
}

export const CounterContext = createContext<UseCounterContextType>(initContextState) 

type ChildrenType = {
  children?: ReactElement | undefined
}

// This is a component that provides the context to its descendants. It wraps around other components to make the state and functions from your custom hook (useCounterContext) available to those components without needing to pass them down through props manually.
export const CounterProvider = ({
  children, ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  )
}
