import { useContext } from "react";
import { CheckoutFormContext } from "../components/FormContext/";

const useCheckoutForm = () => {
  const [state, setState] = useContext(CheckoutFormContext);

  return {
    name: state.name,
    total: state.total
  };
};

export default useCheckoutForm;
