import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 1.1rem;
  line-height: 2;
`;

const StyledInput = styled.input`
  margin-right: ${(props) => (props.radio ? "10px" : "none")};
`;

export const Input = ({ type, label, id, reg, handleChange, invalid }) => {
  // maybe it would be a better idea to use forwardRef in here to avoid conditions...
  if (type === "radio") {
    return (
      <>
        <StyledLabel htmlFor={id}>
          <StyledInput
            radio={true}
            type={type}
            id={id}
            {...reg}
            value={label}
            aria-invalid={invalid}
          />
          {label}
        </StyledLabel>
      </>
    );
  }

  if (type === "tel") {
    return (
      <>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <input
          type={type}
          id={id}
          {...reg}
          onChange={handleChange}
          aria-invalid={invalid}
        />
      </>
    );
  }

  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <input type={type} id={id} {...reg} aria-invalid={invalid} />
    </>
  );
};
