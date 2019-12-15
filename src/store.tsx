import React, { useReducer } from "react";

interface Context {
  state: StoreState;
  dispatch: (value: ToggleSidebar) => void;
  toggleSideBar: () => void;
}

export interface StoreState {
  isSidebarVisible: boolean;
}

export const initialState: StoreState = { isSidebarVisible: false };
// Context
export const Context = React.createContext<Context>({state: initialState} as Context);

// Actions
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR;
export interface ToggleSidebar {
  type: TOGGLE_SIDEBAR;
}

// Reducer
const reducer = (state: StoreState, action: ToggleSidebar): StoreState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        isSidebarVisible: !state.isSidebarVisible,
      });
    default:
      return state;
  }
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, initialState);
  const toggleSideBar = () => dispatch({ type: TOGGLE_SIDEBAR });
  console.log(state);
  return (
    <Context.Provider value={{ state, dispatch, toggleSideBar }}>
      {children}
    </Context.Provider>
  );
};
