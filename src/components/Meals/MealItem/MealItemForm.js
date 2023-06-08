import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [valueIsValid, setValueIsValid] = useState(true);
  const enteredInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = enteredInput.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setValueIsValid(false);
      return;
    }
    props.onAddAmountToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={enteredInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valueIsValid && <p>Invalid Number! (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
