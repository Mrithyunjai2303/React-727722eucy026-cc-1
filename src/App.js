import React, { useState } from "react";
import Button from '@mui/material/Button';
function FontSize() {
  const [font, setfont] = useState(16);

  const [variable, setvar] = useState({ fontSize: "16px" });
  const Decrement = () => {
    setfont(font - 25);
    setvar({
      fontSize: font + "px",
    });
  };
  const Increment = () => {
    setfont(font + 25);
    setvar({
      fontSize: font + "px",
    });
  };
  return (
    <div >
      <Button variant="contained" color="success" onClick={Increment}>
      Increase
      </Button><Button variant="contained" color="error" onClick={Decrement}>
Decrease
</Button>
      <p style={variable}>Text that can be Adjustable</p>
    </div>
  );
}

export default FontSize;