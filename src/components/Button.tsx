import React from "react";

type ButtonProp = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  label: string;
};

export const Button = (props: ButtonProp) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>
      {props.label}
    </button>
  );
};
