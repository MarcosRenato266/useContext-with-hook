import React, { useState } from "react";

const CheckoutFormContext = React.createContext([{}, () => {}]);

const CheckoutFormProvider = props => {
  const [state, setState] = useState({
    name: "marcos",
    total: "2000"
  });
  return (
    <CheckoutFormContext.Provider value={[state, setState]}>
      {props.children}
    </CheckoutFormContext.Provider>
  );
};

export { CheckoutFormContext, CheckoutFormProvider };
