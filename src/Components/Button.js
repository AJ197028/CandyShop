import React, { useContext } from "react";
import CartContext from "./Cart-Context";
import classes from "./Button.module.css";
import { Button } from "react-bootstrap";

function ButtonDetails(props) {
  const { updateDetails, setUpdateDetails } = useContext(CartContext);

  const handleClick = () => {
    setUpdateDetails((prevList) =>
      prevList.map((item) =>
        item.id === props.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const incrementTwo = (item) => {
    setUpdateDetails((prevList) =>
      prevList.map((item) =>
        item.id === props.id ? { ...item, quantity: item.quantity + 2 } : item
      )
    );
  };
  const incrementThree = (item) => {
    setUpdateDetails((prevList) =>
      prevList.map((item) =>
        item.id === props.id ? { ...item, quantity: item.quantity + 3 } : item
      )
    );
  };

  return (
    <div className={classes.div}>
      <Button onClick={handleClick}>buy1</Button>
      <Button variant="success" onClick={incrementTwo}>
        buy2
      </Button>
      <Button variant="success" onClick={incrementThree}>
        buy3
      </Button>
    </div>
  );
}

export default ButtonDetails;