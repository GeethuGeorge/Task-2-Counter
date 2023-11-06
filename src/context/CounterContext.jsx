import { createContext } from "react";
import { useReducer } from "react";

const initialState = { count: 0 };

// Define the reducer function before using it
const countReducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "INCREMENT":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <CounterContext.Provider
      value={{
        count: state.count,
        onIncrement: () => dispatch({ type: "INCREMENT", payload: 1 }),
        onDecrement: () => dispatch({ type: "DECREMENT", payload: 1 }),
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
