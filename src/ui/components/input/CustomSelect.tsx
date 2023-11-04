import React from "react";

const CustomSelect = (
  props: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) => {
  return (
    <select className="select_input" {...props}>
      {props.children}
    </select>
  );
};

export default CustomSelect;
