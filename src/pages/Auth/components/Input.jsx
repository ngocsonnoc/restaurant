import styled from "styled-components";
export default function Input({
  type,
  placeholder,
  onBlur,
  onChange,
  value,
  name,
  customClass,
}) {
  return (
    <StyledInput
      type={type}
      name={name ? name : ""}
      onChange={onChange ? onChange : null}
      value={value}
      onBlur={onBlur ? onBlur : null}
      placeholder={placeholder}
      className={customClass ? customClass : ""}
    />
  );
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &.custom-input {
    width: 95%;
  }
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
  &.alert-danger {
    color: #842029 !important;
    background-color: rgba(237, 82, 73, 0.4) !important;
    border-color: #f5c2c7 !important;
  }
`;
