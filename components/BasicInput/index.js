import React from "react";
import useCheckoutForm from "../../hooks/useCheckoutForm";

export default function index() {
  const { name } = useCheckoutForm();
  return (
    <div>
      <input value={name} />
    </div>
  );
}
