import React, { Fragment, useReducer } from "react";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import Routes from "./components";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);

  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment> 
  );
}

export default App;
