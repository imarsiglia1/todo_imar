import React, { forwardRef } from "react";

// interface InputProps {
//   props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>
//   ref: any
// }

const CustomInput = forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>(
  (
    props: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ref
  ) => {
    return <input ref={ref} {...props} />;
  }
);
export default CustomInput;
