import React, { forwardRef } from "react";

const CustomTextArea = forwardRef<
  HTMLTextAreaElement,
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
>(
  (
    props: React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    ref
  ) => {
    return <textarea ref={ref} {...props} />;
  }
);
export default CustomTextArea;
