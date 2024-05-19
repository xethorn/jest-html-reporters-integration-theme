import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";
import {Feature} from "./store.ts";

/**
 * Interface for the context. Adding new elements to the context should
 * be listed in this interface, and it will be broadly available throughout
 * the application.
 */
export interface ContextInterface {
  features: Feature[]
}

/**
 * Defaults getters and setters for the context. This allows typescript to
 * be aware of the different types without strictly requiring them.
 */
export const ContextState = createContext({
  state: {} as Partial<ContextInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<ContextInterface>>>,
});

/**
 * React element that encapsulates the current application to make
 * the context broadly available.
 */
export const ContextProvider = (
  {
    children,
    value = {} as ContextInterface,
  }: {
    children: React.ReactNode;
    value?: Partial<ContextInterface>;
  }
) => {
  const [state, setState] = useState(value);
  return (
    <ContextState.Provider value={{state, setState}}>
      {children}
    </ContextState.Provider>
  );
};

/**
 * Returns the current application context.
 */
export const useContextState = () => {
  const context = useContext(ContextState);
  if (!context) {
    throw new Error("useContextState must be used within a ContextState");
  }
  return context;
};